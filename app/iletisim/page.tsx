import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Demo Talebi & Destek",
  description:
    "Entegrematik ekibiyle iletişime geçin: demo talebi, paket bilgisi ve teknik sorularınız için formu doldurun, aynı iş günü içinde dönüş yapalım.",
  openGraph: {
    title: "İletişim | Entegrematik",
    description: "Demo talebi, paket bilgisi ve teknik sorularınız için bize yazın.",
    type: "website",
    locale: "tr_TR",
    url: "https://entegrematik.com/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="badge mb-4">
          <span aria-hidden="true">💬</span>
          <span>Size Nasıl Yardımcı Olabiliriz?</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ghost mb-4 text-balance">
          Bizimle <span className="gradient-text">İletişime Geçin</span>
        </h1>
        <p className="text-silver max-w-2xl mx-auto">
          Demo talebi, paket karşılaştırması veya teknik sorularınız için formu
          doldurun; ekibimiz aynı iş günü içinde size dönüş yapsın.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
        {/* Sol: Kontakt Bilgileri */}
        <div className="space-y-4">
          <div className="glass-card p-6">
            <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 text-electric-cyan flex items-center justify-center mb-3">
              <Mail size={20} aria-hidden="true" />
            </div>
            <h2 className="font-semibold text-ghost mb-1">E-posta</h2>
            <a
              href="mailto:destek@entegrematik.com"
              className="text-sm text-electric-cyan hover:text-cyan-glow transition-colors break-all"
            >
              destek@entegrematik.com
            </a>
            <div className="mt-2">
              <a
                href="mailto:info@entegrematik.com"
                className="text-sm text-silver hover:text-electric-cyan transition-colors break-all"
              >
                info@entegrematik.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center mb-3">
              <MapPin size={20} aria-hidden="true" />
            </div>
            <h2 className="font-semibold text-ghost mb-1">Adres</h2>
            <p className="text-sm text-silver leading-relaxed">
              Entegrematik Bilişim Teknolojileri
              <br />
              Dr. Gürol Başaran Sok. No:1
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-3">
              <MessageSquare size={20} aria-hidden="true" />
            </div>
            <h2 className="font-semibold text-ghost mb-1">Yanıt Süresi</h2>
            <p className="text-sm text-silver leading-relaxed">
              Talepleriniz mesai saatleri içinde aynı iş günü yanıtlanır.
              Acil teknik konularda konu satırına &quot;ACİL&quot; yazmanız yeterli.
            </p>
          </div>
        </div>

        {/* Sağ: Form */}
        <div className="glass-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}