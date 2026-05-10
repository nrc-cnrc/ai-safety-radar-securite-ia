/**
 * AI Safety Radar — MCP server (Cloudflare Worker).
 *
 * Exposes the published digest data over MCP so any MCP-compatible client
 * (Claude Desktop, etc.) can query AI safety reports. The Worker is a thin
 * adapter: it fetches manifest.json + markdown from the live GitHub Pages
 * site and serves them as MCP tool responses.
 */

const PAGES_URL = "https://ygauthie.github.io/ai-safety-radar-securite-ia";

const REPORT_LABELS: Record<string, string> = {
  "safety-daily": "Daily executive summary",
  "safety-weekly": "Weekly rollup",
  "safety-research": "Research papers (ArXiv + journals)",
  "safety-analysis": "Blogs, news & AI Safety Institutes",
  "safety-community": "Community & tools (HN + GitHub)",
};

interface ManifestEntry {
  date: string;
  files: string[];
}

interface Manifest {
  generated: string;
  entries: ManifestEntry[];
}

type Lang = "en" | "fr";

function parseFile(file: string): { type: string; lang: Lang } | null {
  const m = file.match(/^\d{4}-\d{2}-\d{2}\/(.+?)(\.fr)?\.md$/);
  if (!m) return null;
  return { type: m[1], lang: m[2] ? "fr" : "en" };
}

function pickLang(args: Record<string, unknown>): Lang {
  return String(args["lang"] ?? "en") === "fr" ? "fr" : "en";
}

async function fetchManifest(): Promise<Manifest> {
  const res = await fetch(`${PAGES_URL}/manifest.json`, {
    cf: { cacheTtl: 300 },
  } as RequestInit);
  if (!res.ok) throw new Error(`Failed to fetch manifest: HTTP ${res.status}`);
  return res.json() as Promise<Manifest>;
}

async function fetchReport(date: string, type: string, lang: Lang): Promise<string> {
  const suffix = lang === "fr" ? ".fr.md" : ".md";
  const res = await fetch(`${PAGES_URL}/digests/${date}/${type}${suffix}`, {
    cf: { cacheTtl: 3600 },
  } as RequestInit);
  if (!res.ok) throw new Error(`Report not found: ${date}/${type} (${lang}) — HTTP ${res.status}`);
  return res.text();
}

async function toolListReports(args: Record<string, unknown>): Promise<string> {
  const days = Math.min(Number(args["days"] ?? 7), 30);
  const lang = pickLang(args);
  const { entries } = await fetchManifest();
  const slice = entries.slice(0, days);

  const lines = slice.map(({ date, files }) => {
    const types = files
      .map(parseFile)
      .filter((p): p is { type: string; lang: Lang } => p !== null && p.lang === lang)
      .map(({ type }) => `${type} (${REPORT_LABELS[type] ?? type})`);
    return `• ${date}: ${types.join(", ") || "(none)"}`;
  });

  return `Available reports — last ${slice.length} day(s) [${lang}]:\n\n${lines.join("\n")}`;
}

async function toolGetReport(args: Record<string, unknown>): Promise<string> {
  const date = String(args["date"] ?? "").trim();
  const type = String(args["type"] ?? "").trim();
  const lang = pickLang(args);
  if (!date || !type) throw new Error("Both 'date' and 'type' are required");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error("'date' must be YYYY-MM-DD");
  return fetchReport(date, type, lang);
}

async function toolGetLatest(args: Record<string, unknown>): Promise<string> {
  const type = String(args["type"] ?? "safety-daily").trim();
  const lang = pickLang(args);
  const { entries } = await fetchManifest();
  for (const { date, files } of entries) {
    const has = files.some((f) => {
      const p = parseFile(f);
      return p && p.type === type && p.lang === lang;
    });
    if (has) {
      const content = await fetchReport(date, type, lang);
      return `# ${date} — ${REPORT_LABELS[type] ?? type}\n\n${content}`;
    }
  }
  throw new Error(`No report found for type: ${type} (${lang})`);
}

async function toolSearch(args: Record<string, unknown>): Promise<string> {
  const query = String(args["query"] ?? "").trim().toLowerCase();
  if (!query) throw new Error("'query' is required");
  const days = Math.min(Number(args["days"] ?? 7), 14);
  const lang = pickLang(args);

  const { entries } = await fetchManifest();
  const slice = entries.slice(0, days);
  const results: string[] = [];

  await Promise.all(
    slice.map(async ({ date, files }) => {
      const targets = files
        .map(parseFile)
        .filter(
          (p): p is { type: string; lang: Lang } =>
            p !== null && p.lang === lang && p.type !== "safety-weekly",
        )
        .map(({ type }) => type);

      await Promise.all(
        targets.map(async (type) => {
          try {
            const content = await fetchReport(date, type, lang);
            if (!content.toLowerCase().includes(query)) return;
            const excerpts = content
              .split("\n")
              .filter((l) => l.toLowerCase().includes(query))
              .slice(0, 3)
              .map((l) => `  > ${l.trim()}`)
              .join("\n");
            results.push(`📄 ${date} / ${type}:\n${excerpts}`);
          } catch {
            // skip missing reports
          }
        }),
      );
    }),
  );

  if (!results.length) return `No matches for "${query}" in the last ${days} day(s).`;
  return `Found "${query}" in ${results.length} report(s):\n\n${results.join("\n\n")}`;
}

const TOOLS = [
  {
    name: "list_reports",
    description: "List available dates and report types from AI Safety Radar (last N days).",
    inputSchema: {
      type: "object",
      properties: {
        days: { type: "number", description: "Number of recent days to list (default 7, max 30)" },
        lang: { type: "string", description: "Language: 'en' (default) or 'fr'" },
      },
    },
  },
  {
    name: "get_report",
    description: "Fetch a specific AI Safety Radar digest by date and type.",
    inputSchema: {
      type: "object",
      properties: {
        date: { type: "string", description: "YYYY-MM-DD" },
        type: {
          type: "string",
          description:
            "Report type: safety-daily, safety-weekly, safety-research, safety-analysis, safety-community",
        },
        lang: { type: "string", description: "Language: 'en' (default) or 'fr'" },
      },
      required: ["date", "type"],
    },
  },
  {
    name: "get_latest",
    description: "Fetch the most recent report of a given type.",
    inputSchema: {
      type: "object",
      properties: {
        type: { type: "string", description: "Report type (default safety-daily)" },
        lang: { type: "string", description: "Language: 'en' (default) or 'fr'" },
      },
    },
  },
  {
    name: "search",
    description: "Keyword search across recent AI Safety Radar digests.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keyword or phrase to search for" },
        days: { type: "number", description: "Number of recent days to search (default 7, max 14)" },
        lang: { type: "string", description: "Language: 'en' (default) or 'fr'" },
      },
      required: ["query"],
    },
  },
];

interface JsonRpcRequest {
  jsonrpc: string;
  id: unknown;
  method: string;
  params?: unknown;
}

async function handleMcp(body: unknown): Promise<unknown> {
  const req = body as JsonRpcRequest;
  const id = req.id ?? null;

  try {
    switch (req.method) {
      case "initialize":
        return {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: { tools: {} },
            serverInfo: { name: "ai-safety-radar", version: "1.0.0" },
          },
        };

      case "notifications/initialized":
        return { jsonrpc: "2.0", id, result: {} };

      case "tools/list":
        return { jsonrpc: "2.0", id, result: { tools: TOOLS } };

      case "tools/call": {
        const { name, arguments: args = {} } = req.params as {
          name: string;
          arguments?: Record<string, unknown>;
        };
        let text: string;
        switch (name) {
          case "list_reports":
            text = await toolListReports(args);
            break;
          case "get_report":
            text = await toolGetReport(args);
            break;
          case "get_latest":
            text = await toolGetLatest(args);
            break;
          case "search":
            text = await toolSearch(args);
            break;
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
        return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text }] } };
      }

      default:
        return {
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Method not found: ${req.method}` },
        };
    }
  } catch (e) {
    return {
      jsonrpc: "2.0",
      id,
      error: { code: -32603, message: e instanceof Error ? e.message : String(e) },
    };
  }
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return Response.json(
        {
          name: "ai-safety-radar-mcp",
          status: "ok",
          tools: TOOLS.map((t) => t.name),
          source: PAGES_URL,
        },
        { headers: CORS },
      );
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: CORS });
    }

    try {
      const body = await request.json();
      const result = await handleMcp(body);
      return Response.json(result, { headers: CORS });
    } catch {
      return Response.json(
        { jsonrpc: "2.0", error: { code: -32700, message: "Parse error" } },
        { status: 400, headers: CORS },
      );
    }
  },
};
