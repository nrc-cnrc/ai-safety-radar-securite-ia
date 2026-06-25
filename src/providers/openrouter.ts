import OpenAI from "openai";
import type { LlmProvider } from "./types.js";

export class OpenRouterProvider implements LlmProvider {
  private client: OpenAI;
  private model: string;

  constructor() {
    this.client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
      timeout: 120_000,
      maxRetries: 2,
      // Use Node 22's native (undici) fetch instead of the SDK's bundled
      // node-fetch@2.7, which mishandles keep-alive sockets closed by
      // Cloudflare and throws ERR_STREAM_PREMATURE_CLOSE mid-response.
      fetch: globalThis.fetch.bind(globalThis) as any,
      defaultHeaders: {
        "HTTP-Referer": "https://github.com/ygauthie/ai-safety-radar-securite-ia",
        "X-Title": "AI Safety Daily Digest",
      },
    });
    this.model = process.env.LLM_MODEL || "anthropic/claude-sonnet-4";
  }

  async summarize(prompt: string, maxTokens = 4096): Promise<string> {
    const stream = await this.client.chat.completions.create({
      model: this.model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
      stream: true,
    });
    let out = "";
    for await (const chunk of stream) {
      out += chunk.choices[0]?.delta?.content ?? "";
    }
    return out;
  }
}
