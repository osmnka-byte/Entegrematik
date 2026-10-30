import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages statik derlemesi için zorunlu alan
  output: "export",

  // Trailing slash ekleyerek statik sayfa yönlendirmelerini ve dosya erişimini garantiye alıyoruz
  trailingSlash: true,

  reactStrictMode: true,
  poweredByHeader: false,

  // Unsplash blog kapak görselleri ve statik resim ayarları
  images: {
    unoptimized: true, // Statik export (Cloudflare Pages) için zorunludur
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
};

export default nextConfig;