import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
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
    <html lang="ru" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
