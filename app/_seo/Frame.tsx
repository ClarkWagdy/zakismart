import type { ReactNode } from "react";
import {
  arabicName,
  phoneDisplay,
  siteName,
  whatsapp,
  quoteUrl,
  email,
} from "./site";
import { byKind, pathFor, type Lang } from "./content";

/*
  The main site <Navbar /> is already rendered by your root layout (fixed,
  floating pill), so this Frame no longer draws its own header. That old dark
  header is what showed up behind the real navbar.

  The footer reuses your global `footer`, `.container`, `.footer-grid` and
  `.footer-bottom` styles from globals.css so it matches the homepage.
  If your root layout already renders the site <Footer />, delete the
  <footer> block below.
*/
const t = {
  en: {
    home: "Home",
    services: "Services",
    guides: "Guides",
    lang: "العربية",
    contact: "Contact",
    wa: "WhatsApp",
    quote: "Request a quote",
    rights: "All rights reserved.",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    guides: "الأدلة",
    lang: "English",
    contact: "التواصل",
    wa: "واتساب",
    quote: "اطلب عرض سعر",
    rights: "جميع الحقوق محفوظة.",
  },
};

export function Frame({
  lang,
  altHref,
  children,
}: {
  lang: Lang;
  altHref: string;
  children: ReactNode;
}) {
  const x = t[lang];
  const isAr = lang === "ar";
  const p = isAr ? "/ar" : "";
  const name = isAr ? arabicName : siteName;

  return (
    <div
      lang={lang}
      dir={isAr ? "rtl" : "ltr"}
      style={
        isAr
          ? { fontFamily: '"IBM Plex Sans Arabic", "Inter", sans-serif' }
          : undefined
      }
    >
      {/* clears the fixed navbar (18px top + 68px height) */}
      <main style={{ paddingTop: 118 }}>{children}</main>

      <footer style={{ marginTop: 40 }}>
        <div className="container">
          <div
            className="footer-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div>
              <a
                href={isAr ? "/ar" : "/"}
                style={{ color: "#ffd23f", fontWeight: 700, fontSize: 20 }}
              >
                {name}
              </a>
              <a href={isAr ? "/ar" : "/"}>{x.home}</a>
              <a href={altHref} hrefLang={isAr ? "en" : "ar"}>
                {x.lang}
              </a>
            </div>

            <div>
              <strong>{x.services.toUpperCase()}</strong>
              {byKind("service").map((s) => (
                <a key={s.slug} href={pathFor(s, lang)}>
                  {s.h1[lang]}
                </a>
              ))}
            </div>

            <div>
              <strong>{x.guides.toUpperCase()}</strong>
              {byKind("guide").map((s) => (
                <a key={s.slug} href={pathFor(s, lang)}>
                  {s.h1[lang]}
                </a>
              ))}
            </div>

            <div>
              <strong>{x.contact.toUpperCase()}</strong>
              <span dir="ltr">{phoneDisplay}</span>
              <a href={whatsapp}>{x.wa}</a>
              <a href={quoteUrl}>{x.quote}</a>
              <span dir="ltr">{email}</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {name}. {x.rights}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
