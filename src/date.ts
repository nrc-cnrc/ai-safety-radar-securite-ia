const TZ = "America/Toronto";

export function today(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: TZ });
}

export function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-CA", { timeZone: TZ });
}

// Freshness window (days) for scraped sources without a reliable feed date.
export const FRESHNESS_DAYS = 7;

// True only if dateStr parses to a date within the last `maxDays`.
// Missing or unparseable dates return false (treated as "not recent").
export function isRecent(dateStr: string | null | undefined, maxDays: number): boolean {
  if (!dateStr) return false;
  const t = new Date(dateStr).getTime();
  if (isNaN(t)) return false;
  return t >= Date.now() - maxDays * 24 * 60 * 60 * 1000;
}

function metaContent(html: string, key: string): string | null {
  const tag = html.match(
    new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]*>`, "i")
  )?.[0];
  return tag?.match(/content=["']([^"']+)["']/i)?.[1] ?? null;
}

// Best-effort extraction of a page's publish date from common HTML metadata.
// Returns an ISO-ish date string, or null if none found / unparseable.
export function extractPublishDate(html: string): string | null {
  const metaKeys = [
    "article:published_time",
    "article:modified_time",
    "og:updated_time",
    "publish-date",
    "publishdate",
    "date",
    "dc.date",
    "dc.date.issued",
  ];
  const candidates = [
    ...metaKeys.map((k) => metaContent(html, k)),
    html.match(/"datePublished"\s*:\s*"([^"]+)"/i)?.[1] ?? null,
    html.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1] ?? null,
  ];
  for (const c of candidates) {
    if (c && !isNaN(new Date(c).getTime())) return c;
  }
  return null;
}
