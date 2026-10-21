// Put <HomeFaqJsonLd /> inside your home page (page.tsx), NOT in layout.tsx.
// FAQ markup must appear only on the page that shows these questions.
import { JsonLd } from "./JsonLd";
import { siteUrl } from "./site";

export const homeFaq = [
  { q: "Can you automate an existing home?", a: "Yes. We design retrofit systems that minimize wall work and disruption. Following a site survey, we specify the appropriate wired, wireless or hybrid approach." },
  { q: "Will everything still work if the internet goes down?", a: "Core functions such as lights, climate, locks, and scenes are designed to run locally. Internet is only needed for remote access and selected cloud integrations." },
  { q: "Which smart home brands do you support?", a: "We work across Matter, KNX, Zigbee, Z-Wave, Wi-Fi, and MQTT ecosystems, choosing reliable products that suit your project rather than locking you into one brand." },
  { q: "How long does installation take?", a: "A typical apartment takes 2 to 5 days. Villas and commercial spaces vary by scope. We provide a clear timeline before any work begins." },
  { q: "Can I start small and expand later?", a: "Yes. Every system is designed modularly, so you can begin with lighting or security and add climate, shading, energy, and more over time." },
  { q: "Do you provide support after installation?", a: "Every project includes onboarding, documentation, and post-installation care. Our support plans add remote diagnostics, updates, and priority visits." },
];

export function HomeFaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: homeFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }}
    />
  );
}
