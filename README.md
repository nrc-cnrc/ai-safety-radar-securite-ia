# <sub><img src="assets/favicon.svg" width="50" height="50" alt=""></sub> AI Safety Radar

**A daily automated digest of AI safety research, policy, and developments.**

Runs every morning at approximately 5 AM ET via GitHub Actions, pulls from nine types of data sources, summarizes with Claude, and publishes to GitHub Pages as a clean, bilingual, searchable static site with an RSS feed.  Also generates a **weekly rollup**, cross-source synthesis of the past week, every Monday. Inspired from [agents-radar](https://github.com/duanyytop/agents-radar).

**Live site:** [ygauthie.github.io/ai-safety-radar-securite-ia](https://ygauthie.github.io/ai-safety-radar-securite-ia)

**RSS feed:** [ygauthie.github.io/ai-safety-radar-securite-ia/feed.xml](https://ygauthie.github.io/ai-safety-radar-securite-ia/feed.xml) — subscribe in any RSS reader (Feedly, NetNewsWire, etc.) to receive new digests automatically.

---

## What it monitors

| Source | What it tracks |
|---|---|
| **AI Safety Institutes** | Updates from US AISI, UK AISI, Canada CAISI, Japan J-AISI, Singapore AISI, EU AI Office, Korea AISI |
| **ArXiv** | Papers tagged cs.AI, cs.CL, cs.LG, cs.CY matching safety keywords |
| **Scientific Journals** | Peer-reviewed articles from Nature, Science, PNAS, Nature Machine Intelligence, JAIR, and others — keyword-filtered for AI safety relevance |
| **Org Websites** | New publications from Anthropic, OpenAI, DeepMind (sitemap crawling) |
| **RSS Feeds** | Alignment Forum, LessWrong, and 15+ AI safety newsletters and Substacks |
| **Hacker News** | Top discussions matching safety keywords |
| **GitHub** | Releases and activity from tracked repos + dynamic discovery via AI safety topics |
| **Actually Relevant** | AI safety-filtered stories from actuallyrelevant.news (keyword-filtered) |

### Keywords

The same keyword list is used for three sources: **ArXiv** (paper search), **Hacker News** (story search), and **Scientific Journals** (title + abstract filtering). All 31 keywords:

`activation steering` · `adversarial robustness` · `AI ethics` · `AI evaluation` · `AI governance` · `AI guardrails` · `AI oversight` · `AI regulation` · `AI safety` · `AI Safety Institute` · `AI Security Institute` · `alignment` · `CAISI` · `collusion risk` · `constitutional AI` · `content provenance` · `deception` · `deepfake detection` · `existential risk` · `hallucination` · `honesty evaluation` · `interpretability` · `jailbreak` · `mechanistic interpretability` · `multilingual AI safety` · `red teaming` · `responsible AI` · `RLHF` · `scalable oversight` · `synthetic content detection` · `value alignment`

GitHub uses a fixed list of repos plus dynamic discovery via GitHub topics (`ai-safety`, `llm-alignment`, `llm-safety`, `ai-alignment`). RSS feeds and org websites are not keyword-filtered — all content is passed to Claude.

---

## Architecture

```
GitHub Actions (cron 5 AM ET - actual runtime may vary due to queuing)
    │
    ├── Fetch sources in parallel
    │     ├── ArXiv API
    │     ├── Scientific journal RSS feeds (keyword-filtered)
    │     ├── RSS/Atom feeds (blogs, forums)
    │     ├── GitHub REST API + topic discovery
    │     ├── HN Algolia API
    │     ├── Website sitemaps
    │     ├── AISI websites + RSS
    │     └── Actually Relevant API (keyword-filtered)
    │
    ├── Summarize with Claude (OpenRouter) — 3 sections in parallel
    │     ├── Research Papers (ArXiv + peer-reviewed journals)
    │     ├── Blogs & News (RSS + org websites + AISIs + Actually Relevant)
    │     ├── Community & Tools (HN + GitHub)
    │     └── Daily executive summary (rollup with dedup context from last 2 days)
    │
    ├── Save to digests/YYYY-MM-DD/safety-{section}.md
    ├── Translate to French (if languages includes "fr")
    ├── Regenerate manifest.json + feed.xml
    └── Commit and push → GitHub Pages serves index.html
```

### Project structure

```
src/
  index.ts              # Main daily pipeline entry point
  weekly.ts             # Weekly rollup entry point
  arxiv.ts              # ArXiv paper fetcher
  journals.ts           # Scientific journal RSS fetcher (keyword-filtered)
  rss.ts                # RSS/Atom feed fetcher (blogs, forums)
  github.ts             # GitHub activity fetcher + topic discovery
  hn.ts                 # Hacker News fetcher
  web.ts                # Org website sitemap crawler
  aisi.ts               # AI Safety Institute fetcher
  actuallyrelevant.ts   # Actually Relevant news fetcher (keyword-filtered)
  prompts.ts            # LLM prompt templates
  report.ts             # LLM calling + concurrency limiter + file saving
  generate-manifest.ts  # manifest.json + feed.xml generator
  config.ts             # Config loader
  date.ts               # Date utilities
  i18n.ts               # Internationalisation (en + fr)
  providers/            # LLM provider abstraction (OpenRouter default)
config.yml              # All data source configuration
index.html              # Single-page frontend (no build step)
digests/                # Generated markdown files, committed by CI
  YYYY-MM-DD/
    safety-daily.md     # Executive summary (rollup)
    safety-weekly.md    # Mondays only
    safety-research.md  # ArXiv + peer-reviewed journals
    safety-analysis.md  # RSS blogs + org websites + AISIs
    safety-community.md # Hacker News + GitHub
```

---

## Setup

### 1. Fork and configure

Fork this repo, then add one repository secret:

**Settings → Secrets and variables → Actions → New repository secret**

| Secret | Value |
|---|---|
| `OPENROUTER_API_KEY` | Your [OpenRouter](https://openrouter.ai) API key |

### 2. Enable GitHub Pages

**Settings → Pages → Source: Deploy from a branch → Branch: main / root**

### 3. Trigger the first run

**Actions → Daily Digest → Run workflow**

The site will be live at `https://<your-username>.github.io/ai-safety-radar-securite-ia` after the first successful run.

### 4. Run locally (optional)

```bash
cp .env.example .env        # add your OPENROUTER_API_KEY
pnpm install
pnpm start                  # run daily digest
pnpm weekly                 # run weekly rollup
pnpm manifest               # regenerate manifest.json and feed.xml
pnpm typecheck              # TypeScript type check
```

---

## Configuration

All sources are configured in `config.yml`:

- **`github_topics`** — GitHub topics for dynamic repo discovery (top 20 most recently active per topic)
- **`github_repos`** — fixed list of `owner/repo` to always track
- **`arxiv.keywords`** — keywords used for ArXiv search and journal filtering
- **`journal_feeds`** — name + URL pairs for peer-reviewed journal RSS feeds (Tier 1)
- **`rss_feeds`** — name + URL + tier for blog/newsletter RSS feeds (Tier 1–3)
- **`websites`** — sitemap URL + URL patterns for org website crawling (Tier 1–2)
- **`aisi_websites`** — national AI Safety Institute URLs, optional RSS feeds, and optional additional URLs (Tier 1)
- **`hn_keywords`** — keywords + `min_points` threshold (default 20) for HN story filtering
- **`languages`** — `[en]` by default; add `fr` to enable French digests

Sources are annotated with a credibility tier used by the LLM when prioritizing content:
- **Tier 1**: Government AISIs, peer-reviewed journals, established think tanks (RAND, Georgetown CSET, Ada Lovelace Institute)
- **Tier 2**: AI lab blogs (Anthropic, OpenAI, DeepMind), safety research orgs (METR, ARC, MIRI, Apollo, Epoch), preprints / non-peer-reviewed papers, expert newsletters
- **Tier 3**: LessWrong, Hacker News, GitHub activity, Actually Relevant

---

## Languages

English by default. Add `fr` to the `languages` list in `config.yml` to generate parallel French digests. English reports are generated first, then translated by Claude.

---

## Schedule

| Workflow | When |
|---|---|
| Daily Digest | Every day at approximately 5:00 AM ET (09:00 UTC) - Github Actions can be queued or delayed|
| Weekly Rollup | Every Monday at approximately 5:30 AM ET (09:30 UTC) |

---

## MCP server

A Model Context Protocol (MCP) server is published alongside the digest so any MCP-compatible client (Claude Desktop, etc.) can query the published reports as tools. The server is a small Cloudflare Worker (~250 LOC, in [`mcp/`](mcp/)) that fetches the live `manifest.json` and digest markdown from GitHub Pages and serves them over MCP's JSON-RPC protocol.

**Endpoint** (after first deploy, see setup below):

```
https://ai-safety-radar-mcp.<your-cf-subdomain>.workers.dev
```

A `GET /` returns a small JSON health check; MCP traffic is `POST /` with a JSON-RPC body.

### Tools

| Tool | Purpose |
|---|---|
| `list_reports` | List available dates and report types (last N days, default 7, max 30) |
| `get_report` | Fetch a specific report by `date` (YYYY-MM-DD) and `type` |
| `get_latest` | Fetch the most recent report of a given `type` (default `safety-daily`) |
| `search` | Keyword search across recent digests (last N days, default 7, max 14) |

All tools accept an optional `lang` parameter (`en` default, or `fr` if French digests are enabled in `config.yml`).

Report types: `safety-daily`, `safety-weekly`, `safety-research`, `safety-analysis`, `safety-community`.

### Connect from Claude Desktop

Add an entry under `mcpServers` in your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "ai-safety-radar": {
      "url": "https://ai-safety-radar-mcp.<your-cf-subdomain>.workers.dev"
    }
  }
}
```

Restart Claude Desktop, and the four tools above will appear.

### Deploy your own instance

The Worker auto-deploys via GitHub Actions on every push that touches `mcp/`. One-time setup:

**1. Create a Cloudflare account** at [dash.cloudflare.com](https://dash.cloudflare.com) (free, no credit card needed for the Workers free tier — 100k requests/day). On first use, pick your `*.workers.dev` subdomain in the Workers & Pages dashboard; it's permanent.

**2. Create a Cloudflare API token** with the **Edit Cloudflare Workers** template:

- Cloudflare dashboard → top-right profile → **API Tokens** → **Create Token**
- Use the **Edit Cloudflare Workers** template
- Account Resources: include your account; Zone Resources: All zones (or none, if you don't use a custom domain)
- Copy the token

**3. Add the token as a GitHub secret**:

- GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
- Name: `CLOUDFLARE_API_TOKEN`
- Value: the token from step 2

**4. Trigger the first deploy**:

- Either push any change under `mcp/` to `main`, or go to **Actions** → **Deploy MCP Worker** → **Run workflow**
- The first run creates the Worker; subsequent runs update it

After the first deploy, the Worker is live at `https://ai-safety-radar-mcp.<your-cf-subdomain>.workers.dev`.

---
