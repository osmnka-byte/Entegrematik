import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Entegrematik",
  description:
    "Entegrematik platformunu kullanırken uymanız gereken hizmet şartları ve kullanım koşulları.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function KullanimKosullariPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-silver hover:text-electric-cyan transition-colors mb-8"
        title="Ana Sayfaya Dön"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Ana Sayfaya Dön
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-ghost mb-6">Kullanım Koşulları</h1>

      <div className="space-y-6 text-silver leading-relaxed">
        <p>Son Güncelleme: Ekim 2026</p>
        <p>
          Entegrematik web sitesini ve sunduğumuz yazılım hizmetlerini kullanarak aşağıdaki
          kullanım koşullarını kabul etmiş sayılırsınız.
        </p>

        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">1. Hizmet Kapsamı</h2>
        <p>
          Entegrematik, pazaryeri entegrasyonu, ön muhasebe yönetimi, e-fatura/e-arşiv
          entegrasyonu ve stok takibi gibi SaaS (Yazılım Hizmeti) çözümleri sunar. Hizmetler,
          seçilen abonelik paketi sınırları dahilinde sunulur.
        </p>

        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">2. Kullanıcı Sorumlulukları</h2>
        <p>
          Kullanıcılar, platforma aktardıkları ürün bilgileri, fiyatlandırma, stok verileri ve
          e-fatura bilgilerinin doğruluğundan bizzat sorumludur. Entegrematik, kullanıcı kaynaklı
          yanlış veri girişinden doğan üçüncü taraf zararlarından sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">3. Fikri Mülkiyet Hakları</h2>
        <p>
          entegrematik.com üzerinde bulunan tüm tasarım, kod altyapısı, logo, grafik ve içerikler
          Entegrematik Bilişim Teknolojileri&apos;ne aittir. Yazılı izin olmaksızın kopyalanamaz,
          çoğaltılamaz veya dağıtılamaz.
        </p>

        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">4. Değişiklik Hakları</h2>
        <p>
          Entegrematik, bu kullanım koşullarını ve hizmet özelliklerini önceden haber
          vermeksizin güncelleme hakkını saklı tutar. Güncellemeler sitede yayınlandığı tarihten
          itibaren geçerli olur.
        </p>
      </div>
    </div>
  );
}