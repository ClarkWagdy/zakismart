import type { ReactNode } from "react";
import { arabicName, phoneDisplay, siteName, whatsapp, quoteUrl, email } from "./site";
import { byKind, pathFor, type Lang } from "./content";

const t = {
  en: { home: "Home", services: "Services", guides: "Guides", lang: "العربية", contact: "Contact", wa: "WhatsApp", quote: "Request a quote", rights: "All rights reserved." },
  ar: { home: "الرئيسية", services: "الخدمات", guides: "الأدلة", lang: "English", contact: "التواصل", wa: "واتساب", quote: "اطلب عرض سعر", rights: "جميع الحقوق محفوظة." },
};
const brandColor = "#1b1b2f";
const accent = "#ffd23f";

export function Frame({ lang, altHref, children }: { lang: Lang; altHref: string; children: ReactNode }) {
  const x = t[lang];
  const p = lang === "ar" ? "/ar" : "";
  const name = lang === "ar" ? arabicName : siteName;
  return (
    <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} style={{ fontFamily: "system-ui, sans-serif", color: "#222", lineHeight: 1.75 }}>
      <header style={{ background: brandColor, color: "#fff6d6" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 20px", display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <a href={lang === "ar" ? "/ar" : "/"} style={{ color: accent, fontWeight: 800, textDecoration: "none", fontSize: 20 }}>{name}</a>
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", marginInlineStart: "auto" }}>
            <a href={lang === "ar" ? "/ar" : "/"} style={{ color: "#fff6d6" }}>{x.home}</a>
            <a href={`${p}/services`} style={{ color: "#fff6d6" }}>{x.services}</a>
            <a href={`${p}/guides`} style={{ color: "#fff6d6" }}>{x.guides}</a>
            <a href={altHref} hrefLang={lang === "ar" ? "en" : "ar"} style={{ color: accent }}>{x.lang}</a>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px" }}>{children}</main>
      <footer style={{ background: "#f4f1e4", borderTop: "4px solid " + accent }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 20px", display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div>
            <strong>{x.services}</strong>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
              {byKind("service").map((s) => (
                <li key={s.slug}><a href={pathFor(s, lang)}>{s.h1[lang]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <strong>{x.guides}</strong>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
              {byKind("guide").map((s) => (
                <li key={s.slug}><a href={pathFor(s, lang)}>{s.h1[lang]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <strong>{x.contact}</strong>
            <p style={{ margin: "8px 0 0" }}>
              <span dir="ltr">{phoneDisplay}</span><br />
              <a href={whatsapp}>{x.wa}</a> · <a href={quoteUrl}>{x.quote}</a><br />
              <span dir="ltr">{email}</span>
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: 0, padding: "0 20px 20px", fontSize: 13, color: "#666" }}>
          © {new Date().getFullYear()} {name}. {x.rights}
        </p>
      </footer>
    </div>
  );
}
