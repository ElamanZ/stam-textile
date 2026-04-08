import type { Metadata, Viewport } from "next";
import { Advent_Pro, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { site } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import layoutStyles from "./layout.module.css";
import "./globals.css";

const adventPro = Advent_Pro({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-advent-pro",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const baseUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f5f5",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: site.defaultTitle,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: baseUrl }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
    },
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
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["ky_KG"],
    url: baseUrl,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.description,
    images: [
      {
        url: "/og-cover.png",
        width: 1024,
        height: 455,
        alt: "Stam Textile — швейное производство в Бишкеке",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.description,
    images: ["/og-cover.png"],
  },
  category: "business",
  verification: {
    google: "cKfk8tv-3OQsaeLeNflUy2I6xScxjDC6MWezjBj5zKE",
  },
  other: {
    "geo.region": site.regionIso,
    "geo.placename": site.address.locality,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${adventPro.variable} ${plusJakarta.variable}`.trim()}
      >
        <LocalBusinessJsonLd />
        <Header />
        <main id="main-content" className={layoutStyles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
