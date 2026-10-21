// Footer links block that reuses the main footer's classes so both look identical.
// Rendered inside <Footer />, so it is a <div>, not a second <footer>.
// NOTE: columns are <div>s (not <nav>) because the main footer's CSS targets `.footer-grid > div`.
import { byKind, pathFor } from "./content";

const short: Record<string, string> = {
  "smart-lighting": "Smart lighting",
  "motorized-curtains-shading": "Motorized curtains",
  "security-cctv": "Security & CCTV",
  "smart-locks-access": "Smart locks",
  "climate-hvac": "Climate & AC",
  "energy-optimization": "Energy monitoring",
  "voice-mobile-control": "Voice & mobile control",
  "custom-iot-solutions": "Custom IoT",
  "no-neutral-wire-smart-home-egypt": "No neutral wire?",
  "zigbee-vs-wifi-smart-home": "Zigbee vs Wi-Fi",
  "start-a-smart-home-apartment-cairo": "Start in an apartment",
};

const css = `
.seo-footer{padding-top:32px;padding-bottom:8px}
.seo-footer .seo-spacer{display:block}
.seo-footer .seo-ar{text-align:left}
.seo-footer .seo-ar strong{letter-spacing:0;text-transform:none}
@media (max-width:900px){.seo-footer .seo-spacer{display:none}}
`;

export function SeoFooter() {
  return (
    <div className="seo-footer">
      <style>{css}</style>
      <div className="container footer-grid">
        {/* empty column under the logo, keeps the grid aligned with the top footer */}
        <div className="seo-spacer" aria-hidden="true" />

        <div role="navigation" aria-label="Services">
          <strong>ALL SERVICES</strong>
          {byKind("service").map((p) => (
            <a key={p.slug} href={pathFor(p, "en")}>
              {short[p.slug] ?? p.h1.en}
            </a>
          ))}
        </div>

        <div role="navigation" aria-label="Guides">
          <strong>GUIDES</strong>
          {byKind("guide").map((p) => (
            <a key={p.slug} href={pathFor(p, "en")}>
              {short[p.slug] ?? p.h1.en}
            </a>
          ))}
        </div>

        <div
          className="seo-ar"
          role="navigation"
          aria-label="Arabic"
          lang="ar"
          dir="rtl"
        >
          <strong>بالعربي</strong>
          <a href="/ar" hrefLang="ar">
            النسخة العربية
          </a>
          <a href="/ar/services" hrefLang="ar">
            خدماتنا
          </a>
          <a href="/ar/guides" hrefLang="ar">
            أدلة البيت الذكي
          </a>
        </div>
      </div>
    </div>
  );
}
