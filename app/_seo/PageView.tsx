import { notFound } from "next/navigation";
import { Frame } from "./Frame";
import { JsonLd } from "./JsonLd";
import { getPage, pages, pathFor, base, type Kind, type Lang } from "./content";
import { siteName, siteUrl, whatsapp, quoteUrl, phoneDisplay, phone, lastUpdated } from "./site";

const ui = {
  en: { faq: "Frequently asked questions", related: "Related", cta: "Book your free site survey", ctaText: "Every project starts with a free site survey, then a technical offer and a financial offer.", wa: "Message us on WhatsApp", quote: "Request a quote", home: "Home", services: "Services", guides: "Guides" },
  ar: { faq: "أسئلة شائعة", related: "مواضيع ذات صلة", cta: "احجز معاينتك المجانية", ctaText: "كل مشروع بيبدأ بمعاينة مجانية، وبعدها عرض فني وعرض مالي.", wa: "ابعتلنا على واتساب", quote: "اطلب عرض سعر", home: "الرئيسية", services: "الخدمات", guides: "الأدلة" },
};

export function PageView({ kind, slug, lang }: { kind: Kind; slug: string; lang: Lang }) {
  const p = getPage(slug, kind);
  if (!p) notFound();
  const x = ui[lang];
  const url = `${siteUrl}${pathFor(p, lang)}`;
  const altHref = pathFor(p, lang === "ar" ? "en" : "ar");
  const prefix = lang === "ar" ? "/ar" : "";
  const org = { "@type": "ProfessionalService", "@id": `${siteUrl}/#organization`, name: siteName, url: siteUrl, telephone: phone };
  const main = kind === "service"
    ? { "@type": "Service", name: p.h1[lang], description: p.description[lang], url, inLanguage: lang, areaServed: { "@type": "Country", name: "Egypt" }, provider: org }
    : { "@type": "Article", headline: p.h1[lang], description: p.description[lang], url, inLanguage: lang, dateModified: lastUpdated, mainEntityOfPage: url, author: org, publisher: org };
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: x.home, item: `${siteUrl}${lang === "ar" ? "/ar" : "/"}` },
          { "@type": "ListItem", position: 2, name: kind === "service" ? x.services : x.guides, item: `${siteUrl}${prefix}/${base(kind)}` },
          { "@type": "ListItem", position: 3, name: p.h1[lang], item: url },
        ],
      },
      main,
      { "@type": "FAQPage", mainEntity: p.faq[lang].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  const related = p.related.map((s) => pages.find((q) => q.slug === s)).filter(Boolean);
  return (
    <Frame lang={lang} altHref={altHref}>
      <JsonLd data={ld} />
      <nav aria-label="breadcrumb" style={{ fontSize: 14, color: "#666", marginBottom: 12 }}>
        <a href={lang === "ar" ? "/ar" : "/"}>{x.home}</a> / <a href={`${prefix}/${base(kind)}`}>{kind === "service" ? x.services : x.guides}</a>
      </nav>
      <h1 style={{ fontSize: 34, lineHeight: 1.3, margin: "0 0 12px" }}>{p.h1[lang]}</h1>
      <p style={{ fontSize: 19 }}>{p.intro[lang]}</p>
      {p.sections[lang].map((s) => (
        <section key={s.h}>
          <h2 style={{ fontSize: 24, marginTop: 28 }}>{s.h}</h2>
          {s.p?.map((t, i) => <p key={i}>{t}</p>)}
          {s.ul && <ul>{s.ul.map((t, i) => <li key={i}>{t}</li>)}</ul>}
        </section>
      ))}
      <section style={{ background: "#1b1b2f", color: "#fff6d6", borderRadius: 16, padding: 24, margin: "36px 0" }}>
        <h2 style={{ margin: 0, color: "#ffd23f", fontSize: 24 }}>{x.cta}</h2>
        <p>{x.ctaText}</p>
        <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={whatsapp} style={{ background: "#ffd23f", color: "#1b1b2f", padding: "10px 20px", borderRadius: 10, fontWeight: 800, textDecoration: "none" }}>{x.wa}: <span dir="ltr">{phoneDisplay}</span></a>
          <a href={quoteUrl} style={{ border: "2px solid #ffd23f", color: "#ffd23f", padding: "8px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>{x.quote}</a>
        </p>
      </section>
      <section>
        <h2 style={{ fontSize: 24 }}>{x.faq}</h2>
        {p.faq[lang].map((f) => (
          <div key={f.q}>
            <h3 style={{ fontSize: 18, marginBottom: 4 }}>{f.q}</h3>
            <p style={{ marginTop: 0 }}>{f.a}</p>
          </div>
        ))}
      </section>
      <section>
        <h2 style={{ fontSize: 24 }}>{x.related}</h2>
        <ul>
          {related.map((r) => r && <li key={r.slug}><a href={pathFor(r, lang)}>{r.h1[lang]}</a></li>)}
        </ul>
      </section>
    </Frame>
  );
}
