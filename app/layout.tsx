import type { Metadata, Viewport } from "next";

const siteUrl = "https://zakismart.com";
const siteName = "Zaki for Smart Solutions";
const description =
  "Zaki designs, installs and supports smart technology for homes, offices and businesses: smart control, access and security, lighting, automation and connectivity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zaki for Smart Solutions | Smart Home & Building Automation",
    template: "%s | Zaki",
  },
  description,
  applicationName: "Zaki",
  keywords: [
    "smart solutions",
    "smart home",
    "home automation",
    "smart lighting",
    "smart lock",
    "access control",
    "building automation",
    "smart home Egypt",
    "ذكي",
    "حلول ذكية",
    "سمارت هوم",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Zaki for Smart Solutions",
    description,
    locale: "en_US",
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
      { url: "/favicon.ico" },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  alternateName: ["Zaki", "ذكي"],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: "info@zakismart.com",
  description,
  slogan: "Smarter spaces. Simpler living.",
  sameAs: [
    // "https://www.facebook.com/zaki.smart",
    // "https://www.instagram.com/zaki.smart",
    // "https://www.linkedin.com/company/zaki",
    // "https://www.tiktok.com/@zaki.smart",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
