import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
  allowedDevOrigins: ["http://192.168.1.9:3000"],
};

export default nextConfig;