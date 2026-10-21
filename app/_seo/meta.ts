import type { Metadata } from "next";
import { pathFor, getPage, type Kind, type Lang } from "./content";
import { siteUrl } from "./site";

export function pageMetadata(kind: Kind, slug: string, lang: Lang): Metadata {
  const p = getPage(slug, kind);
  if (!p) return {};
  const en = `${siteUrl}${pathFor(p, "en")}`;
  const ar = `${siteUrl}${pathFor(p, "ar")}`;
  const url = lang === "ar" ? ar : en;
  return {
    title: p.title[lang],
    description: p.description[lang],
    alternates: { canonical: url, languages: { en, ar, "x-default": en } },
    openGraph: {
      type: "article",
      url,
      title: p.title[lang],
      description: p.description[lang],
      locale: lang === "ar" ? "ar_EG" : "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: p.title[lang] }],
    },
  };
}
