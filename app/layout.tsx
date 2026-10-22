import type { Metadata, Viewport } from "next";
import Footer from "./src/Footer";
import Navbar from "./src/Navbar";

const siteUrl = "https://zakismart.com";
const siteName = "Zaki for Smart Solutions";
// Official Arabic name. Confirm the exact spelling you want to use everywhere, then keep it identical
// on the website, Facebook, LinkedIn, Google Business Profile and printed material.
const arabicName = "ذكي للحلول الذكية";
const description =
  "Zaki designs, installs and supports smart technology for homes, offices and businesses: smart control, access and security, lighting, automation and connectivity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zaki for Smart Solutions | Smart Home & Building Automation",
    template: "%s | Zaki for Smart Solutions",
  },
  description,
  applicationName: siteName,
  keywords: [
    "smart solutions",
    "smart home",
    "home automation",
    "smart lighting",
    "smart lock",
    "access control",
    "building automation",
    "smart home Egypt",
    "smart home Cairo",
    "smart home installation Cairo",
    "حلول ذكية",
    "سمارت هوم",
    "سمارت هوم القاهرة",
    "تركيب بيت ذكي في القاهرة",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Zaki for Smart Solutions",
    description,
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    images: [
      {
        url: "/og-image.png", // 1200x630
        width: 1200,
        height: 630,
        alt: "Zaki for Smart Solutions: Smarter spaces. Simpler living.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki for Smart Solutions",
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png", // 180x180
  },
  // verification: { google: "PASTE_SEARCH_CONSOLE_CODE" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF6D6" },
    { media: "(prefers-color-scheme: dark)", color: "#1B1B2F" },
  ],
};

/* ------------------------------------------------------------------
   Structured data (JSON-LD) for the whole site: the organization and the website.
   The FAQ markup lives in the home page (HomeFaqJsonLd), not here. Everything here must match text that is
   visible on the page. Do not add ratings, reviews or project counts
   unless they are real, documented and shown on the page.
------------------------------------------------------------------- */
const services = [
  ["Smart Lighting Control", "Centralized scenes, dimming, occupancy logic and daylight-responsive control."],
  ["Security and CCTV Systems", "Integrated surveillance, verified alerts and secure remote access."],
  ["Smart Locks and Access", "Role-based access with PIN, biometric and temporary access."],
  ["Climate and HVAC Automation", "Zoned temperature control, schedules and air quality."],
  ["Energy Optimization", "Live metering, analysis and controls that reduce avoidable demand."],
  ["Motorized Shading", "Coordinated privacy and solar control with motors and scenes."],
  ["Voice and Mobile Control", "Control through Alexa, Google Home and mobile apps."],
  ["Custom IoT Solutions", "Sensors, gateways, MQTT and operational dashboards."],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      // Specific names only. A bare "Zaki" or "ذكي" would make AI systems confuse this company
      // with other companies that use similar names.
      alternateName: [siteName, arabicName],
      // legalName: "REGISTERED LEGAL NAME", // add the exact name from your commercial register
      url: siteUrl,
      // Make sure this file exists at https://zakismart.com/logo.png
      // (or point to /brand/zaki-horizontal-bilingual-color.svg).
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/og-image.png`,
      email: "info@zakismart.com",
      telephone: "+201024244589",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+201024244589",
          contactType: "customer service",
          areaServed: "EG",
          availableLanguage: ["Arabic", "English"],
        },
      ],
      description,
      disambiguatingDescription:
        "Smart home and building automation design, installation and support company based in Cairo, Egypt. Website: zakismart.com.",
      slogan: "Smarter spaces. Simpler living.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      areaServed: [{ "@type": "Country", name: "Egypt" }, "Middle East and North Africa"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsLanguage: ["en", "ar"],
      knowsAbout: [
        "Smart home",
        "Home automation",
        "Building automation",
        "Smart lighting",
        "Access control",
        "CCTV",
        "Zigbee",
        "Matter",
        "KNX",
        "MQTT",
      ],
      sameAs: [
        "https://www.facebook.com/zakiismart",
        "https://www.linkedin.com/company/zakiismart",
        // "https://www.instagram.com/YOUR_REAL_HANDLE", // add when the account is public
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Smart home and IoT services",
        itemListElement: services.map(([name, desc]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description: desc },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: arabicName,
      inLanguage: ["en", "ar"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
