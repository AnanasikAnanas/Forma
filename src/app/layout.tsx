import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SiteFooter } from "@/components/common/SiteFooter";
import { SiteHeader } from "@/components/common/SiteHeader";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FORMA — сайты для локального бизнеса",
    template: "%s — FORMA",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "FORMA",
    title: "FORMA — Digital atelier for local business",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "FORMA — цифровые пространства для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORMA",
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F1EFE9",
};

const themeScript = `(()=>{try{const s=localStorage.getItem('forma-theme');const d=s||(matchMedia('(prefers-color-scheme:dark)').matches?'night':'day');document.documentElement.dataset.theme=d}catch(e){document.documentElement.dataset.theme='day'}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "FORMA",
    description: siteConfig.description,
    areaServed: "Remote",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Тольятти",
      addressCountry: "RU",
    },
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        <a className="skip-link" href="#content">
          К содержанию
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <CustomCursor />
      </body>
    </html>
  );
}
