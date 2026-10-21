import type { Metadata } from "next";
import { Frame } from "./Frame";
import { JsonLd } from "./JsonLd";
import { byKind, pathFor, base, type Kind, type Lang } from "./content";
import { siteUrl, siteName, arabicName, whatsapp, quoteUrl, phoneDisplay } from "./site";

const txt = {
  service: {
    en: { title: "Smart Home and Building Automation Services in Cairo, Egypt", h1: "Our smart home services", desc: "Smart lighting, curtains, security, locks, climate, energy and custom IoT for homes, offices and businesses in Cairo, Egypt. Free site survey first." },
    ar: { title: "خدمات البيت الذكي وأتمتة المباني في القاهرة ومصر", h1: "خدماتنا في البيت الذكي", desc: "إضاءة وستاير وأمان وأقفال وتكييف وطاقة وحلول IoT للبيوت والمكاتب والشركات في القاهرة ومصر. معاينة مجانية الأول." },
  },
  guide: {
    en: { title: "Smart Home Guides for Egypt", h1: "Smart home guides", desc: "Simple guides for smart homes in Egypt: neutral wire, Zigbee or Wi-Fi, and how to start in an apartment in Cairo." },
    ar: { title: "أدلة البيت الذكي في مصر", h1: "أدلة البيت الذكي", desc: "أدلة بسيطة عن البيت الذكي في مصر: النيوترال، Zigbee ولا Wi-Fi، وإزاي تبدأ في شقة في القاهرة." },
  },
};

export function listMetadata(kind: Kind, lang: Lang): Metadata {
  const t = txt[kind][lang];
  const en = `${siteUrl}/${base(kind)}`;
  const ar = `${siteUrl}/ar/${base(kind)}`;
  return { title: t.title, description: t.desc, alternates: { canonical: lang === "ar" ? ar : en, languages: { en, ar, "x-default": en } }, openGraph: { url: lang === "ar" ? ar : en, title: t.title, description: t.desc, locale: lang === "ar" ? "ar_EG" : "en_US" } };
}

export function ListView({ kind, lang }: { kind: Kind; lang: Lang }) {
  const t = txt[kind][lang];
  const items = byKind(kind);
  const alt = `${lang === "ar" ? "" : "/ar"}/${base(kind)}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.h1,
    description: t.desc,
    inLanguage: lang,
    url: `${siteUrl}${lang === "ar" ? "/ar" : ""}/${base(kind)}`,
    hasPart: items.map((i) => ({ "@type": "WebPage", name: i.h1[lang], url: `${siteUrl}${pathFor(i, lang)}` })),
  };
  return (
    <Frame lang={lang} altHref={alt}>
      <JsonLd data={ld} />
      <h1 style={{ fontSize: 34, lineHeight: 1.3 }}>{t.h1}</h1>
      <p style={{ fontSize: 19 }}>{t.desc}</p>
      <ul>
        {items.map((i) => (
          <li key={i.slug} style={{ marginBottom: 14 }}>
            <a href={pathFor(i, lang)} style={{ fontWeight: 700 }}>{i.h1[lang]}</a>
            <br />
            <span>{i.description[lang]}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function ArabicHome() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${arabicName} | بيت ذكي في القاهرة`,
    inLanguage: "ar",
    url: `${siteUrl}/ar`,
    about: { "@id": `${siteUrl}/#organization` },
  };
  return (
    <Frame lang="ar" altHref="/">
      <JsonLd data={ld} />
      <h1 style={{ fontSize: 36, lineHeight: 1.35 }}>{arabicName}: تصميم وتركيب وبرمجة البيت الذكي في القاهرة</h1>
      <p style={{ fontSize: 19 }}>
        {siteName} ({arabicName}) شركة في القاهرة، مصر، بتصمم وبتركّب وبتدعم حلول البيت الذكي والمباني الذكية للشقق والفيلات والمكاتب والفنادق: إضاءة ذكية، ستاير موتورات، كاميرات وأمان، أقفال، تكييف، ترشيد الطاقة، وتحكم صوتي وبالموبايل.
      </p>
      <p>كل مشروع بيبدأ بمعاينة مجانية للمكان، وبعدها عرض فني وعرض مالي ثم تعاقد. ضمان 5 سنين ضد عيوب الصناعة وسوء الاستخدام.</p>
      <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href={whatsapp} style={{ background: "#ffd23f", color: "#1b1b2f", padding: "10px 20px", borderRadius: 10, fontWeight: 800, textDecoration: "none" }}>ابعتلنا على واتساب: <span dir="ltr">{phoneDisplay}</span></a>
        <a href={quoteUrl} style={{ border: "2px solid #1b1b2f", color: "#1b1b2f", padding: "8px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>اطلب عرض سعر</a>
      </p>
      <h2>خدماتنا</h2>
      <ul>{byKind("service").map((s) => <li key={s.slug}><a href={pathFor(s, "ar")}>{s.h1.ar}</a></li>)}</ul>
      <h2>أدلة تفيدك</h2>
      <ul>{byKind("guide").map((s) => <li key={s.slug}><a href={pathFor(s, "ar")}>{s.h1.ar}</a></li>)}</ul>
    </Frame>
  );
}

export const arabicHomeMetadata: Metadata = {
  title: `${arabicName}: بيت ذكي في القاهرة`,
  description: "تصميم وتركيب وبرمجة البيت الذكي في القاهرة ومصر: إضاءة وستاير وكاميرات وأقفال وتكييف. معاينة مجانية وضمان 5 سنين.",
  alternates: { canonical: `${siteUrl}/ar`, languages: { en: siteUrl, ar: `${siteUrl}/ar`, "x-default": siteUrl } },
  openGraph: { url: `${siteUrl}/ar`, locale: "ar_EG", title: `${arabicName}: بيت ذكي في القاهرة` },
};
