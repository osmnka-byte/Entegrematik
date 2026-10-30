import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages statik derlemesi için zorunlu alan
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,

  // Unsplash blog kapak görselleri ve statik resim ayarları
  images: {
    unoptimized: true, // Statik export için zorunludur
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