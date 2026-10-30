import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik ve Güvenlik Politikası | Entegrematik",
  description: "Entegrematik Bilişim Teknolojileri gizlilik, veri güvenliği ve kullanıcı hakları politikası. Verilerinizin nasıl korunduğunu öğrenin.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/gizlilik",
  },
};

export default function GizlilikPage() {
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
          <span className="text-gray-300">Gizlilik Politikası</span>
        </nav>

        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Gizlilik ve Güvenlik Politikası
          </h1>
          <p className="text-sm text-gray-400">
            Son Güncelleme Tarihi: Ekim 2026 | Entegrematik Bilişim Teknolojileri
          </p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
          <section className="bg-[#161C28] p-6 rounded-2xl border border-white/10 space-y-3">
            <p>
              <strong className="text-white">entegrematik.com</strong> web sitesi ve bağlı entegrasyon servisleri,{" "}
              <span className="text-white font-medium">Dr. Gürol Başaran Sok. No:1</span> adresinde faaliyet gösteren{" "}
              <strong className="text-white">Entegrematik Bilişim Teknolojileri</strong> bünyesinde işletilmektedir.
            </p>
            <p>
              Bu politika metni, platformumuzu ziyaret eden kullanıcıların, üye işletmelerin ve çözüm ortaklarımızın veri güvenliğine dair prensiplerimizi açıklamak amacıyla hazırlanmıştır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              1. Veri Toplama ve Kullanım Esasları
            </h2>
            <p>
              Sitemizin genel bilgilendirme sayfalarını herhangi bir kişisel veri paylaşımında bulunmadan dilediğiniz zaman ziyaret edebilirsiniz. Üyelik oluşturma, demo talebinde bulunma veya iletişim formlarını kullanma aşamalarında paylaştığınız bilgiler yalnızca sizin bilginiz ve onayınız dahilinde sistemlerimize kaydedilir.
            </p>
            <p>
              Kayıt altına alınan kurumsal ve kişisel verileriniz, Entegrematik Bilişim Teknolojileri güvencesinde saklanır. Yetkisiz erişimleri, veri kaybını veya bilgilerin uygunsuz kullanımını engellemek amacıyla uluslararası standartlara uygun teknik ve idari güvenlik tedbirleri uygulanmaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              2. Otomatik Toplanan Teknik Veriler
            </h2>
            <p>
              Hizmet kalitemizi artırmak, sistem performansını optimize etmek ve güvenlik analitiği sağlamak amacıyla platformumuza yapılan erişimlerde bazı teknik veriler otomatik olarak işlenebilir. Bu veriler; IP adresiniz, cihaz/tarayıcı tipiniz, erişim saatleriniz ve yönlendirici kaynak adresleri gibi anonim istatistiki parametreleri içerebilir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              3. Verilerin Gizliliği ve Üçüncü Şahıslar
            </h2>
            <p>
              Entegrematik Bilişim Teknolojileri, kullanıcılarına ait verileri hiçbir koşulda satmaz, kiralamaz veya ticari amaçlarla başka kurum ve kuruluşlarla paylaşmaz. Yasal zorunluluklar ve yetkili idari/adli makamların resmi talepleri haricinde verileriniz üçüncü taraflara aktarılmaz.
            </p>
            <p>
              KVKK kapsamındaki ayrıntılı haklarınız ve veri işleme süreçlerimiz için{" "}
              <a href="/kvkk" className="text-[#2563EB] hover:underline font-semibold">
                KVKK Aydınlatma Metni
              </a>{" "}
              sayfamızı inceleyebilirsiniz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-wide">
              4. Harici Bağlantılar ve İletişim
            </h2>
            <p>
              Sitemiz üzerinden yönlendirilen üçüncü taraf web sitelerinin gizlilik politikaları ve içeriklerinden Entegrematik Bilişim Teknolojileri sorumlu tutulamaz. İlgili sitelerin kendi gizlilik bildirimlerini incelemeniz önerilir.
            </p>
            <p>
              Standart e-posta iletişimi şifreli bir kanal üzerinden gerçekleşmediği takdirde mesaj güvenliği tam olarak garanti edilemez. E-posta yoluyla ilettiğiniz hassas bilgilerin sorumluluğu göndericiye aittir.
            </p>
          </section>

          <section className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-2 text-xs sm:text-sm text-gray-400">
            <p>
              Entegrematik Bilişim Teknolojileri, işbu Gizlilik ve Güvenlik Politikası üzerinde önceden haber vermeksizin güncelleme ve değişiklik yapma hakkını saklı tutar. Güncel metin sitede yayınlandığı andan itibaren geçerlilik kazanır.
            </p>
            <p>
              Sorularınız için:{" "}
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