import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://entegrematik.com"),
  title: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
  description:
    "Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu. Hemen keşfedin!",
  keywords: [
    "pazaryeri entegrasyonu",
    "trendyol entegrasyonu",
    "hepsiburada entegrasyonu",
    "e-fatura entegrasyonu",
    "ön muhasebe entegrasyonu",
    "stok takip yazılımı",
    "e-ticaret entegrasyonu",
    "entegrematik",
  ],
  authors: [{ name: "Entegrematik Bilişim Teknolojileri" }],
  publisher: "Entegrematik Bilişim Teknolojileri",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://entegrematik.com",
  },
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
  openGraph: {
    title: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
    description:
      "Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu. Hemen keşfedin!",
    url: "https://entegrematik.com",
    siteName: "Entegrematik",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/osmnka-byte/Entegrematik/main/public/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entegrematik Pazaryeri ve Ön Muhasebe Entegrasyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu",
    description:
      "Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu. Hemen keşfedin!",
    images: [
      "https://raw.githubusercontent.com/osmnka-byte/Entegrematik/main/public/og-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Entegrematik",
    operatingSystem: "All",
    applicationCategory: "BusinessApplication",
    description:
      "Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu.",
    url: "https://entegrematik.com",
    publisher: {
      "@type": "Organization",
      name: "Entegrematik Bilişim Teknolojileri",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: "749",
      highPrice: "2099",
      offerCount: "4",
    },
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Doğrudan Statik HTML Meta Etiketleri */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entegrematik.com" />
        <meta property="og:title" content="Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu" />
        <meta property="og:description" content="Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu. Hemen keşfedin!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/osmnka-byte/Entegrematik/main/public/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entegrematik | Pazaryeri ve Ön Muhasebe Entegrasyonu" />
        <meta name="twitter:description" content="Trendyol, Hepsiburada, N11, Çiçeksepeti ve e-ticaret sitelerinizi tek ekrandan yönetin. Otomatik stok, e-fatura ve kargo entegrasyonu. Hemen keşfedin!" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/osmnka-byte/Entegrematik/main/public/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="72d52bfe-a5dc-4288-b067-d63248ae7956";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#0B0F17] text-[#F9FAFB] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}