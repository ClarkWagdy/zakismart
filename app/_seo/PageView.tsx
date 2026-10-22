import { notFound } from "next/navigation";
import { Frame } from "./Frame";
import { JsonLd } from "./JsonLd";
import { getPage, pages, pathFor, base, type Kind, type Lang } from "./content";
import {
  siteName,
  siteUrl,
  whatsapp,
  quoteUrl,
  phoneDisplay,
  phone,
  lastUpdated,
} from "./site";

const ui = {
  en: {
    faq: "Frequently asked questions",
    related: "Related",
    cta: "Book your free site survey",
    ctaText:
      "Every project starts with a free site survey, then a technical offer and a financial offer.",
    wa: "Message us on WhatsApp",
    quote: "Request a quote",
    home: "Home",
    services: "Services",
    guides: "Guides",
    eyebrowService: "Service",
    eyebrowGuide: "Guide",
  },
  ar: {
    faq: "أسئلة شائعة",
    related: "مواضيع ذات صلة",
    cta: "احجز معاينتك المجانية",
    ctaText: "كل مشروع بيبدأ بمعاينة مجانية، وبعدها عرض فني وعرض مالي.",
    wa: "ابعتلنا على واتساب",
    quote: "اطلب عرض سعر",
    home: "الرئيسية",
    services: "الخدمات",
    guides: "الأدلة",
    eyebrowService: "خدمة",
    eyebrowGuide: "دليل",
  },
};

/*
  Uses the variables from your globals.css (--bg, --text, --muted, --line,
  --surface, --cyan = yellow), so light / dark follow your theme switch.
*/
const css = `
.zp {
  --zp-yellow: var(--cyan, #ffd23f);
  --zp-head: "Manrope", "IBM Plex Sans Arabic", sans-serif;
  --zp-mono: "JetBrains Mono", ui-monospace, monospace;
  position: relative;
  color: var(--text);
  max-width: 880px;
  margin-inline: auto;
  padding: 0 20px 72px;
  isolation: isolate;
}
.zp[dir="rtl"] { --zp-head: "IBM Plex Sans Arabic", "Manrope", sans-serif; }

/* full-width grid like the homepage hero, running up behind the navbar */
.zp::before {
  content: "";
  position: absolute;
  top: -118px;
  left: 50%;
  width: 100vw;
  height: 760px;
  transform: translateX(-50%);
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.55;
  -webkit-mask-image: radial-gradient(ellipse 60% 70% at 50% 0%, #000 20%, transparent 100%);
  mask-image: radial-gradient(ellipse 60% 70% at 50% 0%, #000 20%, transparent 100%);
}
.zp a:focus-visible { outline: 2px solid var(--zp-yellow); outline-offset: 3px; border-radius: 8px; }

/* breadcrumb pill */
.zp-crumbs {
  display: inline-flex; align-items: center; gap: 8px; flex-wrap: wrap;
  font-size: 13px; color: var(--muted);
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 16px; margin-bottom: 36px;
  box-shadow: var(--shadow);
}
.zp-crumbs a:hover { color: var(--text); }

/* eyebrow */
.zp-eyebrow {
  display: flex; align-items: center; gap: 10px; margin: 0 0 20px;
  font: 600 11px var(--zp-mono); color: var(--zp-yellow);
}
.zp-eyebrow::before { content: ""; width: 28px; height: 1px; background: currentColor; }
.zp[dir="ltr"] .zp-eyebrow { text-transform: uppercase; letter-spacing: 0.13em; }
.light .zp-eyebrow { color: #c99700; }

/* hero */
.zp h1 {
  font-family: var(--zp-head);
  font-size: clamp(32px, 4.6vw, 48px);
  line-height: 1.12; font-weight: 600; margin: 0 0 22px;
  letter-spacing: -0.045em; text-wrap: balance;
}
.zp[dir="rtl"] h1 { line-height: 1.4; letter-spacing: 0; }
.zp-dot {
  display: inline-block; width: 0.16em; height: 0.16em; border-radius: 50%;
  background: var(--zp-yellow); margin-inline-start: 0.08em;
}
.zp-intro { font-size: 18px; line-height: 1.75; color: var(--muted); max-width: 640px; margin: 0; }

/* content */
.zp-body { margin-top: 48px; max-width: 720px; }
.zp-body h2 {
  font-family: var(--zp-head);
  font-size: 24px; line-height: 1.3; font-weight: 600; letter-spacing: -0.03em;
  margin: 44px 0 12px; padding-inline-start: 16px;
  border-inline-start: 4px solid var(--zp-yellow); border-radius: 2px;
}
.zp[dir="rtl"] .zp-body h2 { letter-spacing: 0; }
.zp-body p { font-size: 15px; line-height: 1.8; color: var(--muted); margin: 0 0 14px; }
.zp-body ul { list-style: none; padding: 0; margin: 12px 0 0; display: grid; gap: 10px; }
.zp-body li {
  position: relative; padding: 12px 16px; padding-inline-start: 44px;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; font-size: 14px; line-height: 1.7; color: var(--text);
}
.zp-body li::before {
  content: ""; position: absolute; inset-inline-start: 18px; top: 1.3em;
  width: 9px; height: 9px; border-radius: 50%; background: var(--zp-yellow);
}

/* CTA: dark card, same in light and dark mode */
.zp-cta {
  position: relative; overflow: hidden; border-radius: 26px;
  padding: 36px 32px; margin: 64px 0;
  background: #101020; color: #f4f5f8;
  border: 1px solid var(--line-bright);
  box-shadow: var(--shadow);
}
.zp-cta::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 48px 48px;
}
.zp-cta::after {
  content: ""; position: absolute; width: 280px; height: 280px; border-radius: 50%;
  inset-inline-end: -80px; top: -120px; pointer-events: none;
  background: radial-gradient(circle, rgba(255, 210, 63, 0.25), transparent 70%);
}
.zp-cta > * { position: relative; z-index: 1; }
.zp-cta h2 { margin: 0 0 10px; font: 600 28px var(--zp-head); letter-spacing: -0.035em; color: #fff; }
.zp[dir="rtl"] .zp-cta h2 { letter-spacing: 0; }
.zp-cta p { margin: 0 0 24px; max-width: 520px; font-size: 15px; line-height: 1.7; color: rgba(244, 245, 248, 0.72); }
.zp-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.zp-btn {
  min-height: 50px; padding: 0 22px;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  border-radius: 12px; font-weight: 650; font-size: 14px;
  transition: transform .2s, box-shadow .2s, background .2s;
}
.zp-btn:hover { transform: translateY(-2px); }
.zp-btn svg { width: 17px; height: 17px; flex: none; }
.zp[dir="rtl"] .zp-btn svg, .zp[dir="rtl"] .zp-related svg { transform: scaleX(-1); }
.zp-btn--primary { background: #ffd23f; color: #12142a !important; box-shadow: 0 8px 20px rgba(255, 210, 63, 0.22); }
.zp-btn--ghost { background: rgba(255, 255, 255, 0.06); color: #fff !important; border: 1px solid rgba(255, 255, 255, 0.22); }
.zp-btn--ghost:hover { background: rgba(255, 255, 255, 0.12); }

/* FAQ */
.zp-section-title { font: 600 26px var(--zp-head); letter-spacing: -0.035em; margin: 0 0 20px; }
.zp[dir="rtl"] .zp-section-title { letter-spacing: 0; }
.zp-faq { display: grid; gap: 12px; margin-bottom: 56px; }
.zp-faq-item {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 16px; padding: 20px 22px;
}
.zp-faq-item h3 { font: 600 16px/1.5 var(--zp-head); margin: 0 0 8px; }
.zp-faq-item p { margin: 0; font-size: 14px; line-height: 1.75; color: var(--muted); }

/* related */
.zp-related { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
.zp-related a {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 16px 18px; border-radius: 14px; font: 600 14px/1.5 var(--zp-head);
  background: var(--surface); border: 1px solid var(--line);
  transition: border-color .2s, transform .2s;
}
.zp-related a:hover { border-color: var(--zp-yellow); transform: translateY(-2px); }
.zp-related svg { width: 17px; height: 17px; flex: none; color: var(--zp-yellow); }
.light .zp-related svg { color: #c99700; }

@media (max-width: 560px) {
  .zp-cta { padding: 28px 22px; border-radius: 22px; }
  .zp-btn { width: 100%; }
}
@media (prefers-reduced-motion: reduce) {
  .zp-btn:hover, .zp-related a:hover { transform: none; }
}
`;

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function PageView({
  kind,
  slug,
  lang,
}: {
  kind: Kind;
  slug: string;
  lang: Lang;
}) {
  const p = getPage(slug, kind);
  if (!p) notFound();
  const x = ui[lang];
  const url = `${siteUrl}${pathFor(p, lang)}`;
  const altHref = pathFor(p, lang === "ar" ? "en" : "ar");
  const prefix = lang === "ar" ? "/ar" : "";
  const org = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    telephone: phone,
  };
  const main =
    kind === "service"
      ? {
          "@type": "Service",
          name: p.h1[lang],
          description: p.description[lang],
          url,
          inLanguage: lang,
          areaServed: { "@type": "Country", name: "Egypt" },
          provider: org,
        }
      : {
          "@type": "Article",
          headline: p.h1[lang],
          description: p.description[lang],
          url,
          inLanguage: lang,
          dateModified: lastUpdated,
          mainEntityOfPage: url,
          author: org,
          publisher: org,
        };
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: x.home,
            item: `${siteUrl}${lang === "ar" ? "/ar" : "/"}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: kind === "service" ? x.services : x.guides,
            item: `${siteUrl}${prefix}/${base(kind)}`,
          },
          { "@type": "ListItem", position: 3, name: p.h1[lang], item: url },
        ],
      },
      main,
      {
        "@type": "FAQPage",
        mainEntity: p.faq[lang].map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  const related = p.related
    .map((s) => pages.find((q) => q.slug === s))
    .filter(Boolean);
  const sectionLabel = kind === "service" ? x.services : x.guides;
  const eyebrow = kind === "service" ? x.eyebrowService : x.eyebrowGuide;

  return (
    <Frame lang={lang} altHref={altHref}>
      <JsonLd data={ld} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <article className="zp" dir={lang === "ar" ? "rtl" : "ltr"}>
        <nav aria-label="breadcrumb" className="zp-crumbs">
          <a href={lang === "ar" ? "/ar" : "/"}>{x.home}</a>
          <span aria-hidden="true">/</span>
          <a href={`${prefix}/${base(kind)}`}>{sectionLabel}</a>
        </nav>

        <header>
          <p className="zp-eyebrow">{eyebrow}</p>
          <h1>
            {p.h1[lang]}
            <span className="zp-dot" aria-hidden="true" />
          </h1>
          <p className="zp-intro">{p.intro[lang]}</p>
        </header>

        <div className="zp-body">
          {p.sections[lang].map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p?.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
              {s.ul && (
                <ul>
                  {s.ul.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="zp-cta">
          <h2>{x.cta}</h2>
          <p>{x.ctaText}</p>
          <div className="zp-actions">
            <a href={whatsapp} className="zp-btn zp-btn--primary">
              <span>
                {x.wa}: <span dir="ltr">{phoneDisplay}</span>
              </span>
              <Arrow />
            </a>
            <a href={quoteUrl} className="zp-btn zp-btn--ghost">
              {x.quote}
            </a>
          </div>
        </section>

        <section>
          <h2 className="zp-section-title">{x.faq}</h2>
          <div className="zp-faq">
            {p.faq[lang].map((f) => (
              <div key={f.q} className="zp-faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="zp-section-title">{x.related}</h2>
          <ul className="zp-related">
            {related.map(
              (r) =>
                r && (
                  <li key={r.slug}>
                    <a href={pathFor(r, lang)}>
                      <span>{r.h1[lang]}</span>
                      <Arrow />
                    </a>
                  </li>
                ),
            )}
          </ul>
        </section>
      </article>
    </Frame>
  );
}
