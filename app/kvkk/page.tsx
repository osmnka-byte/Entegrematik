import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Entegrematik",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Entegrematik aydınlatma metni ve veri sahibi hakları.",
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-silver hover:text-electric-cyan transition-colors mb-8" title="Ana Sayfaya Dön">
        <ArrowLeft size={18} aria-hidden="true" /> Ana Sayfaya Dön
      </Link>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-ghost mb-6">KVKK Aydınlatma Metni</h1>
      
      <div className="space-y-6 text-silver leading-relaxed">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK"), kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak amacıyla düzenlenmiştir. Aşağıda, kişisel verilerinizin işlenmesi, korunması ve haklarınız hakkında bilgilendirme yapılmaktadır.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">1. Veri Sorumlusu</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-ghost">Unvan:</strong> Entegrematik Bilişim Teknolojileri</li>
          <li><strong className="text-ghost">Adres:</strong> Dr. Gürol Başaran Sok. No:1</li>
          <li><strong className="text-ghost">E-posta:</strong> info@entegrematik.com</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">2. Kişisel Verilerin İşlenme Amacı</h2>
        <p>
          Kişisel verileriniz; hizmet sözleşmesinin ifası, müşteri ilişkilerinin yönetimi, faturalandırma, yasal yükümlülüklerin yerine getirilmesi ve hizmet kalitesinin artırılması amacıyla işlenmektedir.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">3. Kişisel Verilerin Aktarılması</h2>
        <p>
          Kişisel verileriniz, yasal düzenlemelerin izin verdiği sınırlar dahilinde; e-fatura/e-dönüşüm altyapı sağlayıcıları, bulut bilişim hizmet sağlayıcıları ve yetkili kamu kurumları ile KVKK'ya uygun olarak paylaşılabilir.
        </p>
        
        <h2 className="text-xl font-semibold text-ghost mt-8 mb-3">4. Veri Sahibi Olarak Haklarınız (KVKK Madde 11)</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
        </ul>
        
        <p>
          Bu haklarınızı kullanmak için talebinizi <a href="mailto:info@entegrematik.com" className="text-electric-cyan hover:underline" title="Bize E-posta Gönderin">info@entegrematik.com</a> adresine iletebilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.
        </p>
      </div>
    </div>
  );
}