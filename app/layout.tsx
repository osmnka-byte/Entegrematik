import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://entegrematik.com"),
  title: {
    default: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
    template: "%s | Entegrematik",
  },
  description:
    "Trendyol, Hepsiburada, N11 ve tüm pazaryerlerini tek panelde yönetin. Otomatik e-fatura, stok senkronu ve kargo entegrasyonu.",
  keywords: [
    "pazaryeri entegrasyonu",
    "trendyol entegrasyonu",
    "hepsiburada entegrasyonu",
    "e-fatura entegrasyonu",
    "stok yönetimi",
    "ön muhasebe",
  ],
  authors: [
    { name: "Entegrematik Bilişim Teknolojileri", url: "https://entegrematik.com" },
  ],
  publisher: "Entegrematik Bilişim Teknolojileri",
  creator: "Entegrematik Bilişim Teknolojileri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
    description:
      "Tüm pazaryerleri, e-fatura, kargo ve stok yönetimi tek ekranda.",
    type: "website",
    locale: "tr_TR",
    siteName: "Entegrematik",
    url: "https://entegrematik.com",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Entegrematik — Pazaryeri ve Ön Muhasebe Yönetimi Tek Ekranda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
    description:
      "Tüm pazaryerleri, e-fatura, kargo ve stok yönetimi tek ekranda.",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geist.variable} font-sans min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}