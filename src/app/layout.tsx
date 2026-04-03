import type { Metadata } from "next";
import { Advent_Pro, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { site } from "@/lib/site";
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

const siteUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — швейное производство`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${site.name} — швейное производство`,
    description: site.description,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${adventPro.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
