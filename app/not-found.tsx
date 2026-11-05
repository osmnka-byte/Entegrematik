import Link from "next/link";
import { Home, Search } from "lucide-react";

const popularLinks = [
  { name: "Özellikler", href: "/#ozellikler" },
  { name: "Entegrasyonlar", href: "/#entegrasyonlar" },
  { name: "Fiyatlandırma", href: "/#fiyatlandirma" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Pazaryeri Rehberleri", href: "/blog/pazaryeri-entegrasyonlari" },
];

export default function NotFound() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 lg:py-32 max-w-3xl mx-auto text-center">
      <div className="badge mb-6">
        <span aria-hidden="true">🧭</span>
        <span>Sayfa bulunamadı</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-silver text-lg mb-10 text-balance">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
        Aşağıdaki bağlantılardan yolunuza devam edebilirsiniz.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
        <Link href="/" className="btn-primary w-full sm:w-auto">
          <Home size={18} aria-hidden="true" />
          Ana Sayfaya Dön
        </Link>
        <Link href="/blog" className="btn-secondary w-full sm:w-auto">
          <Search size={18} aria-hidden="true" />
          Blog&apos;u İncele
        </Link>
      </div>

      <div className="glass-card p-6 sm:p-8 text-left">
        <h2 className="text-xs font-bold text-ghost uppercase tracking-wider mb-5">
          Popüler Sayfalar
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {popularLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="inline-flex items-center min-h-[44px] px-4 w-full rounded-bento bg-charcoal border border-slate-dark/40 text-silver hover:text-ghost hover:border-electric-cyan/40 transition-all text-sm font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}