import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { loadConfig } from "./config.js";
import { FRESHNESS_DAYS, isRecent, extractPublishDate } from "./date.js";

interface SitemapEntry {
  loc: string;
  lastmod?: string;
}

export interface WebArticle {
  source: string;
  title: string;
  url: string;
  excerpt: string;
}

interface WebState {
  [source: string]: string[];
}

const STATE_FILE = join(process.cwd(), "digests", "web-state.json");

function loadState(): WebState {
  if (existsSync(STATE_FILE)) {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8"));
  }
  return {};
}

function saveState(state: WebState): void {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

export async function fetchWebsites(): Promise<WebArticle[]> {
  const config = loadConfig();
  const state = loadState();
  const articles: WebArticle[] = [];

  for (const site of config.websites) {
    try {
      const knownUrls = new Set(state[site.name] || []);
      const sitemapEntries = await fetchSitemap(site.sitemap, site.include_patterns);

      // Candidates: not seen before, and not provably stale by sitemap <lastmod>.
      // Entries without a lastmod fall through to a date check on the article HTML.
      const newEntries = sitemapEntries.filter(
        (e) =>
          !knownUrls.has(e.loc) &&
          (!e.lastmod || isRecent(e.lastmod, FRESHNESS_DAYS))
      );
      console.log(`[web] ${site.name}: ${newEntries.length} new recent URLs found`);

      for (const entry of newEntries.slice(0, 10)) {
        try {
          const article = await fetchArticleContent(entry.loc, site.name, entry.lastmod);
          if (article) articles.push(article);
          await new Promise((r) => setTimeout(r, 300));
        } catch {
          console.error(`[web] Failed to fetch ${entry.loc}`);
        }
      }

      // Update state with all known URLs (including stale ones, so we don't re-check them)
      state[site.name] = [
        ...new Set([...Array.from(knownUrls), ...sitemapEntries.map((e) => e.loc)]),
      ];
    } catch (e) {
      console.error(`[web] Sitemap error for ${site.name}:`, e);
    }
  }

  saveState(state);
  return articles;
}

async function fetchSitemap(url: string, includePatterns: string[]): Promise<SitemapEntry[]> {
  const res = await fetch(url, {
    headers: { "User-Agent": "AI-Safety-Daily-Brief/1.0" },
  });
  if (!res.ok) return [];
  const xml = await res.text();

  const entries: SitemapEntry[] = [];
  // Match each <url>/<sitemap> block so <lastmod> stays paired with its <loc>.
  const blocks = xml.match(/<(?:url|sitemap)\b[\s\S]*?<\/(?:url|sitemap)>/g) ?? [];
  for (const block of blocks) {
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;
    const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]?.trim();

    // Check if URL matches any include pattern
    if (includePatterns.some((p) => loc.includes(p))) {
      entries.push({ loc, lastmod });
    }
    // Also check for nested sitemaps
    if (loc.endsWith(".xml")) {
      try {
        const nested = await fetchSitemap(loc, includePatterns);
        entries.push(...nested);
      } catch {
        // Skip nested sitemap errors
      }
    }
  }

  return entries;
}

async function fetchArticleContent(
  url: string,
  source: string,
  lastmod?: string
): Promise<WebArticle | null> {
  const res = await fetch(url, {
    headers: { "User-Agent": "AI-Safety-Daily-Brief/1.0" },
  });
  if (!res.ok) return null;
  const html = await res.text();

  // Drop anything we can't confirm is recent (page metadata, falling back to
  // the sitemap's <lastmod>). Undated pages are excluded.
  const published = extractPublishDate(html) ?? lastmod;
  if (!isRecent(published, FRESHNESS_DAYS)) return null;

  // Extract title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/s);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : url;

  // Extract main content text
  const mainMatch = html.match(/<(?:main|article)[^>]*>(.*?)<\/(?:main|article)>/s);
  const contentHtml = mainMatch ? mainMatch[1] : "";
  const excerpt = contentHtml
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 500);

  if (!excerpt || excerpt.length < 50) return null;

  return { source, title, url, excerpt };
}
