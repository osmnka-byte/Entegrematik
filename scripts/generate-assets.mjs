// scripts/generate-assets.mjs
// Kullanım: node scripts/generate-assets.mjs
// Çıktılar: app/icon.png (256x256 favicon) + public/og/default.png (1200x630 OG)
import sharp from "sharp";
import { mkdirSync } from "node:fs";

/* ── Marka ikonu (gradyan zemin + E) ── */
const brandSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00D9FF"/>
      <stop offset="1" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <text x="32" y="45" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700" fill="#ffffff" text-anchor="middle">E</text>
</svg>
`;

/* ── Open Graph görseli (1200x630) ── */
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0E27"/>
      <stop offset="100%" stop-color="#101736"/>
    </linearGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00D9FF"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#00D9FF" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#00D9FF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <rect x="80" y="80" width="72" height="72" rx="20" fill="url(#brand)"/>
  <text x="116" y="130" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="800" fill="#FFFFFF" text-anchor="middle">E</text>
  <text x="172" y="128" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#F8FAFC">Entegrematik</text>

  <text x="80" y="290" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#F8FAFC">Pazaryerleri ve Ön Muhasebe</text>
  <text x="80" y="370" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" fill="#F8FAFC">Yönetimi <tspan fill="url(#brand)">Tek Ekranda</tspan></text>

  <text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#94A3B8">Trendyol, Hepsiburada, N11 ve 20+ pazaryeri • Otomatik e-fatura • Stok senkronu</text>

  <rect x="80" y="520" width="220" height="44" rx="22" fill="#00D9FF" fill-opacity="0.12"/>
  <text x="190" y="549" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#00D9FF" text-anchor="middle">entegrematik.com</text>
</svg>
`;

mkdirSync("public/og", { recursive: true });
mkdirSync("app", { recursive: true });

await sharp(Buffer.from(brandSvg(256))).png().toFile("app/icon.png");
await sharp(Buffer.from(ogSvg)).png().toFile("public/og/default.png");

console.log("✅ app/icon.png (256x256) üretildi");
console.log("✅ public/og/default.png (1200x630) üretildi");