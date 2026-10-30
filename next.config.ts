import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Unsplash blog kapak görsellerinin yüklenmesi için izinler
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // Turbopack CSS kuralları
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // SEO ve Güvenlik Başlıkları (Headers)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  // Senin Mevcut Yönlendirme (Redirects) Kuralların
  async redirects() {
    return [
      // 1. E-Fatura ve Fatura Yönlendirmeleri
      {
        source: "/e-fatura-entegrasyonlari",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/e-fatura-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/e-fatura",
        destination: "/#entegrasyonlar",
        permanent: true,
      },

      // 2. Pazaryeri ve Platform Yönlendirmeleri
      {
        source: "/pazaryeri-entegrasyonlari",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/pazaryeri-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/trendyol-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/hepsiburada-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/n11-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
      {
        source: "/ciceksepeti-entegrasyonu",
        destination: "/#entegrasyonlar",
        permanent: true,
      },

      // 3. Fiyatlandırma, Paketler ve Hizmetler
      {
        source: "/fiyatlar",
        destination: "/#fiyatlandirma",
        permanent: true,
      },
      {
        source: "/fiyatlandirma-ve-paketler",
        destination: "/#fiyatlandirma",
        permanent: true,
      },
      {
        source: "/paketler",
        destination: "/#fiyatlandirma",
        permanent: true,
      },
      {
        source: "/ozellikler",
        destination: "/#ozellikler",
        permanent: true,
      },

      // 4. İletişim ve Kurumsal Sayfalar
      {
        source: "/iletisim",
        destination: "/#sss",
        permanent: true,
      },
      {
        source: "/hakkimizda",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kurumsal",
        destination: "/",
        permanent: true,
      },

      // 5. Joker / Wildcard Yönlendirmeler
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hizmetler/:path*",
        destination: "/#ozellikler",
        permanent: true,
      },
      {
        source: "/entegrasyonlar/:path*",
        destination: "/#entegrasyonlar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;