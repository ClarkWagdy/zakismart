import type { MetadataRoute } from "next";

const siteUrl = "https://zakismart.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add one entry per page when you split the site, for example:
    // { url: `${siteUrl}/services/smart-lighting`, lastModified: new Date() },
    // { url: `${siteUrl}/faq`, lastModified: new Date() },
    // Arabic version with hreflang:
    // { url: `${siteUrl}/ar`, lastModified: new Date(),
    //   alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } } },
  ];
}
