import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Entegrematik",
  description: "Entegrematik Bilişim Teknolojileri hizmet kullanım koşulları, lisans şartları ve kullanıcı sorumlulukları.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/kullanim-kosullari",
  },
};

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F9FAFB] font-sans">
      <header className="border-b border-white/5 bg-[#0B0F17]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group" title="Entegrematik Ana Sayfa">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#10B981] flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="font-bold text-white text-lg">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">Entegrematik</span>
          </a>
          <a href="/" className="text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-blue-400 transition-colors">
            ← Ana Sayfaya Dön
          </a>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-gray-300 transition-colors">Ana Sayfa</a>
          <span>/</span>
          <span className="text-gray-300">Kullanım Koşulları</span>
        </nav>

        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Kullanım Koşulları ve Hizmet Sözleşmesi
          </h1>
          <p className="text-sm text-gray-400">
            Son Güncelleme Tarihi: Ekim 2026 | Entegrematik Bilişim Teknolojileri
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
          <section className="bg-[#161C28] p-6 rounded-2xl border border-white/10 space-y-3">
            <p>
              Bu internet sitesini (<strong className="text-white">entegrematik.com</strong>) ve Entegrematik tarafından sunulan pazaryeri, e-fatura ve stok entegrasyonu yazılım servislerini kullanarak işbu Kullanım Koşulları metnini kabul etmiş sayılırsınız.
            </p>
            <p>
              Servislerimiz <strong className="text-white">Entegrematik Bilişim Teknolojileri</strong> (<span className="text-white font-medium">Dr. Gürol Başaran Sok. No:1</span>) tarafından sağlanmaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              1. Hizmet Kapsamı ve Lisans Kullanımı
            </h2>
            <p>
              Entegrematik, kullanıcılara seçtikleri abonelik paketine göre pazaryerleri ve e-ticaret altyapıları ile çift yönlü veri senkronizasyonu sağlayan bir SaaS (Software as a Service) platformudur. Kullanıcı, satın aldığı paket limitleri dahilinde sistemi kullanma hakkına sahiptir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              2. Kullanıcı Sorumlulukları
            </h2>
            <p>
              Kullanıcılar, platforma aktardıkları ürün bilgileri, fiyatlandırma, stok verileri ve e-fatura bilgilerinin doğruluğundan bizzat sorumludur. Entegrematik, kullanıcı tarafındaki yanlış veri girişinden kaynaklanan üçüncü taraf mağaza zararlarından sorumlu tutulamaz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              3. Fikri Mülkiyet Hakları
            </h2>
            <p>
              entegrematik.com üzerinde bulunan tüm tasarım, kod altyapısı, logo, grafik ve içerikler Entegrematik Bilişim Teknolojileri&apos;ne aittir. Yazılı izin olmaksızın kopyalanamaz, çoğaltılamaz veya dağıtılamaz.
            </p>
          </section>

          <section className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-2 text-xs sm:text-sm text-gray-400">
            <p>
              İletişim ve destek talepleriniz için:{" "}
              <a href="mailto:info@entegrematik.com" className="text-[#2563EB] hover:underline">
                info@entegrematik.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
          <a href="/" className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-400 font-semibold transition-colors">
            ← Ana Sayfaya Dön
          </a>
          <span className="text-xs text-gray-500">© 2026 Entegrematik Bilişim Teknolojileri</span>
        </div>
      </main>
    </div>
  );
}