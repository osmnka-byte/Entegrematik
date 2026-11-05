import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Send, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mesajınız Alındı | Entegrematik",
  description:
    "İletişim formunuz başarıyla gönderildi. Ekibimiz en kısa sürede size dönüş yapacaktır.",
  robots: {
    index: false, // Teşekkür sayfası indekslenmemeli (SEO)
    follow: false,
  },
};

export default function BasariliPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-3xl mx-auto">
      <div className="text-center">
        {/* Başarı İkonu */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald/10 text-emerald mb-6">
          <CheckCircle2 size={48} aria-hidden="true" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-ghost mb-4 text-balance">
          Mesajınız Başarıyla Gönderildi!
        </h1>

        <p className="text-silver text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Teşekkür ederiz. Talebiniz ekibimize ulaştı.
          <br className="hidden sm:block" />
          En kısa sürede (genellikle aynı iş günü içinde) size dönüş yapacağız.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <Home size={18} aria-hidden="true" />
            Ana Sayfaya Dön
          </Link>
          <Link href="/iletisim" className="btn-secondary w-full sm:w-auto">
            <Send size={18} aria-hidden="true" />
            Yeni Bir Mesaj Gönder
          </Link>
        </div>

        {/* Ek Bilgi Kartı */}
        <div className="glass-card p-6 sm:p-8 text-left max-w-lg mx-auto">
          <h2 className="text-sm font-bold text-ghost uppercase tracking-wider mb-4">
            Hızlı İletişim Kanalları
          </h2>
          <ul className="space-y-3 text-sm text-silver">
            <li className="flex items-start gap-3">
              <ArrowRight size={16} className="text-electric-cyan mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Acil konularda:{" "}
                <a href="mailto:info@entegrematik.com" className="text-electric-cyan hover:text-cyan-glow transition-colors">
                  info@entegrematik.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight size={16} className="text-electric-cyan mt-0.5 shrink-0" aria-hidden="true" />
              <span>Yanıt süresi: Mesai saatleri içinde aynı iş günü</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight size={16} className="text-electric-cyan mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Blog yazılarımız:{" "}
                <Link href="/blog" className="text-electric-cyan hover:text-cyan-glow transition-colors">
                  entegrematik.com/blog
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}