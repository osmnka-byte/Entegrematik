import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Entegrematik",
  description: "Entegrematik Bilişim Teknolojileri Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni ve veri işleme ilkeleri.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/kvkk",
  },
};

export default function KvkkPage() {
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
          <span className="text-gray-300">KVKK Aydınlatma Metni</span>
        </nav>

        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
          </h1>
          <p className="text-sm text-gray-400">
            6698 Sayılı KVKK Uyarınca Veri Sorumlusu Bilgilendirmesi | Entegrematik Bilişim Teknolojileri
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
          <p className="bg-[#161C28] p-6 rounded-2xl border border-white/10 text-gray-300">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;), kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ile uyacakları usul ve esasları düzenlemektedir. Anılan kanun, ilgili yönetmelikler ve Kişisel Verileri Koruma Kurumu kararları uyarınca kişisel verilerinizin işlenmesi, korunması ve haklarınız hakkında sizleri bilgilendirmek isteriz.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              1. Veri Sorumlusu Bilgileri
            </h2>
            <div className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-1 text-sm text-gray-300">
              <p><strong className="text-white">Unvan:</strong> Entegrematik Bilişim Teknolojileri</p>
              <p><strong className="text-white">Adres:</strong> Dr. Gürol Başaran Sok. No:1</p>
              <p><strong className="text-white">E-posta:</strong> <a href="mailto:info@entegrematik.com" className="text-[#2563EB] hover:underline">info@entegrematik.com</a></p>
              <p><strong className="text-white">Web Adresi:</strong> https://entegrematik.com</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              2. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
            </h2>
            <p>Kişisel verileriniz;</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
              <li><strong className="text-white">entegrematik.com</strong> internet sitesini ziyaret etmeniz,</li>
              <li>Platforma üyelik oluşturmanız veya demo talebinde bulunmanız,</li>
              <li>E-posta, telefon, mesajlaşma uygulamaları, iletişim formları veya canlı destek hatları üzerinden bizimle iletişime geçmeniz,</li>
              <li>Hizmet ve abonelik sözleşmelerini onaylamanız,</li>
            </ul>
            <p className="pt-2">
              yollarıyla toplanmaktadır. Bu veriler, 6698 sayılı KVKK&apos;nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere ve ilgili mevzuat hükümlerine uygun olarak işlenmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              3. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p>
              Kişisel verileriniz; Entegrematik tarafından sunulan pazaryeri ve ön muhasebe entegrasyon hizmetlerinin yürütülebilmesi, taleplerinizin ve şikayetlerinizin yanıtlanması, yazılım geliştirme ve hata tespiti süreçlerinin yönetilmesi, istatistiksel değerlendirmeler yapılması, bilgi ve işlem güvenliğinin sağlanması ile yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              4. Kişisel Verilerin Korunmasına İlişkin Tedbirler
            </h2>
            <p>
              Entegrematik Bilişim Teknolojileri, KVKK&apos;nın 12. maddesine uygun olarak kişisel verilerinizin gizliliğini ve güvenliğini sağlamak için gerekli tüm idari ve teknik tedbirleri almaktadır. Verileriniz şifrelenmiş sunucularda (TLS/SSL şifreleme altyapısı), erişim yetkilendirme ve güvenlik duvarları ile muhafaza edilmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              5. Kişisel Verilerin Aktarımı
            </h2>
            <p>
              Kişisel verileriniz, yasal düzenlemelerin izin verdiği sınırlar dahilinde ve hizmetin sunulabilmesi için gerekli olan yetkili kamu kurum ve kuruluşları, e-fatura/e-dönüşüm altyapı sağlayıcıları ve zorunlu iş ortaklarımız ile KVKK&apos;ya uygun olarak paylaşılabilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              6. KVKK Kapsamındaki Haklarınız (Madde 11)
            </h2>
            <p>Veri sahibi olarak Entegrematik Bilişim Teknolojileri&apos;ne başvurarak;</p>
            <ul className="list-disc list-inside space-y-1.5 text-gray-300 pl-2 text-xs sm:text-sm">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK 7. maddede öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>Düzeltme veya silinme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.</li>
            </ul>
          </section>

          <section className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
            <h2 className="text-lg font-bold text-white">
              7. Veri Sorumlusuna Başvuru
            </h2>
            <p className="text-xs sm:text-sm">
              Yukarıda belirtilen haklarınızı kullanmak için talebinizi içeren dilekçenizi sistemimizde kayıtlı bulunan e-posta adresiniz üzerinden{" "}
              <a href="mailto:info@entegrematik.com" className="text-[#2563EB] hover:underline font-semibold">
                info@entegrematik.com
              </a>{" "}
              adresine iletebilirsiniz. Başvurularınız talebin niteliğine göre en geç 30 gün içinde yanıtlanacaktır.
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