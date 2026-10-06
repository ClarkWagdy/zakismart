import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zakismart.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // { url: `${base}/solutions`, lastModified: new Date(), priority: 0.8 },
    // { url: `${base}/contact`, lastModified: new Date(), priority: 0.6 },
  ];
}
