import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Entegrematik",
  description: "Entegrematik gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi.",
  robots: { index: true, follow: true },
};

export default function GizlilikPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-silver hover:text-electric-cyan transition-colors mb-8" title="Ana Sayfaya Dön">
        <ArrowLeft size={18} aria-hidden="true" /> Ana Sayfaya Dön
      </Link>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-ghost mb-6">Gizlilik Politikası</h1>
      
      <div className="space-y-6 text-silver leading-relaxed">
        <p>Son Güncelleme: Ekim 2026</p>
        <p>
          Entegrematik Bilişim Teknolojileri olarak, web sitemizi ziyaret eden kullanıcıların, üye işletmelerin ve çözüm ortaklarımızın gizliliğine büyük önem veriyoruz. Bu politika, kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamak amacıyla hazırlanmıştır.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">1. Toplanan Bilgiler</h2>
        <p>
          Hizmetlerimizi kullanmanız sırasında adınız, e-posta adresiniz, şirket bilgileriniz ve teknik veriler (IP adresi, tarayıcı türü) gibi bilgiler toplanabilir. Bu bilgiler yalnızca hizmet sunumu, hesap yönetimi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">2. Bilgilerin Kullanımı</h2>
        <p>
          Toplanan veriler, size daha iyi bir kullanıcı deneyimi sunmak, teknik destek sağlamak, faturalandırma işlemlerini yürütmek ve yasal düzenlemelere uyum sağlamak için kullanılır. Verileriniz, açık rızanız olmadan üçüncü taraflarla paylaşılmaz.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">3. Veri Güvenliği</h2>
        <p>
          Verilerinizin güvenliğini sağlamak için endüstri standardı şifreleme (SSL/TLS), güvenlik duvarları ve erişim kontrol mekanizmaları kullanılmaktadır.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">4. İletişim</h2>
        <p>
          Gizlilik politikamızla ilgili sorularınız için <a href="mailto:info@entegrematik.com" className="text-electric-cyan hover:underline" title="Bize E-posta Gönderin">info@entegrematik.com</a> adresinden bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}