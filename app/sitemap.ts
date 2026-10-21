import type { MetadataRoute } from "next";
import { pages, pathFor, base } from "./_seo/content";
import { siteUrl, lastUpdated } from "./_seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const last = new Date(lastUpdated);
  const entries: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: last, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } } },
    { url: `${siteUrl}/ar`, lastModified: last, changeFrequency: "monthly", priority: 0.9, alternates: { languages: { en: siteUrl, ar: `${siteUrl}/ar` } } },
  ];
  for (const kind of ["service", "guide"] as const) {
    const b = base(kind);
    entries.push({ url: `${siteUrl}/${b}`, lastModified: last, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { en: `${siteUrl}/${b}`, ar: `${siteUrl}/ar/${b}` } } });
    entries.push({ url: `${siteUrl}/ar/${b}`, lastModified: last, changeFrequency: "monthly", priority: 0.7, alternates: { languages: { en: `${siteUrl}/${b}`, ar: `${siteUrl}/ar/${b}` } } });
  }
  for (const p of pages) {
    const en = `${siteUrl}${pathFor(p, "en")}`;
    const ar = `${siteUrl}${pathFor(p, "ar")}`;
    entries.push({ url: en, lastModified: last, changeFrequency: "monthly", priority: 0.7, alternates: { languages: { en, ar } } });
    entries.push({ url: ar, lastModified: last, changeFrequency: "monthly", priority: 0.6, alternates: { languages: { en, ar } } });
  }
  return entries;
}
