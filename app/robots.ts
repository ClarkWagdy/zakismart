import type { MetadataRoute } from "next";

// Option A: welcome everyone, including AI search, assistants and AI training crawlers.
// If you do NOT want your content used for AI training, remove the
// "training" list below and keep "search" and "assistants".
export default function robots(): MetadataRoute.Robots {
  const search = ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"];
  const assistants = ["ChatGPT-User", "Claude-User", "Perplexity-User"];
  const training = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: [...search, ...assistants, ...training], allow: "/" },
    ],
    sitemap: "https://zakismart.com/sitemap.xml",
  };
}
