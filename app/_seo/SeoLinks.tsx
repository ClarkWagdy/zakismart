// Drop this component into the footer or a section of your home page (page.tsx).
// It gives the home page real links to every service page and guide.
import { byKind, pathFor, type Lang } from "./content";

export function SeoLinks({ lang = "en" }: { lang?: Lang }) {
  const title = lang === "ar" ? { s: "خدماتنا", g: "أدلة تفيدك" } : { s: "Our services", g: "Guides" };
  return (
    <nav aria-label="Services and guides" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <h2>{title.s}</h2>
      <ul>{byKind("service").map((p) => <li key={p.slug}><a href={pathFor(p, lang)}>{p.h1[lang]}</a></li>)}</ul>
      <h2>{title.g}</h2>
      <ul>{byKind("guide").map((p) => <li key={p.slug}><a href={pathFor(p, lang)}>{p.h1[lang]}</a></li>)}</ul>
      <p><a href={lang === "ar" ? "/" : "/ar"}>{lang === "ar" ? "English" : "العربية"}</a></p>
    </nav>
  );
}
