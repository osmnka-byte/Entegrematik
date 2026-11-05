"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "9a5325d2-bb4c-4551-b133-35507452d06b";

const inputClasses =
  "w-full min-h-[48px] px-4 py-3 rounded-bento bg-charcoal border border-slate-dark/40 text-ghost placeholder:text-graphite text-sm focus:outline-none focus:border-electric-cyan/60 focus:ring-1 focus:ring-electric-cyan/40 transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Entegrematik Web Sitesi - Yeni İletişim Formu");
    formData.append("from_name", "Entegrematik İletişim Formu");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-4">
          <CheckCircle2 size={32} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-ghost mb-2">Mesajınız Başarıyla Gönderildi!</h3>
        <p className="text-silver mb-6 max-w-md">
          Teşekkür ederiz. Talebiniz ekibimize ulaştı. En kısa sürede (genellikle aynı iş günü içinde) size dönüş yapacağız.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-electric-cyan hover:text-cyan-glow text-sm font-semibold transition-colors inline-flex items-center gap-2"
        >
          <Send size={16} aria-hidden="true" />
          Yeni Bir Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Spam Koruması (Honeypot) */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ghost mb-2">
            Ad Soyad *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Adınız Soyadınız"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ghost mb-2">
            Şirket Adı
          </label>
          <input
            id="company"
            name="company"
            placeholder="Şirketiniz"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ghost mb-2">
            E-posta *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ornek@sirket.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ghost mb-2">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="05xx xxx xx xx"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-ghost mb-2">
          İlgilendiğiniz Paket
        </label>
        <select id="plan" name="plan" className={inputClasses}>
          <option value="Kararsızım">Kararsızım — Bilgi almak istiyorum</option>
          <option value="GirişMatik">GirişMatik</option>
          <option value="SenkronMatik">SenkronMatik</option>
          <option value="OtomaMatik">OtomaMatik</option>
          <option value="EntegreMatik Pro">EntegreMatik Pro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ghost mb-2">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Hangi pazaryerlerinde satış yapıyorsunuz? Hangi süreçleri otomatikleştirmek istiyorsunuz?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Mesajı Gönder
          </>
        )}
      </button>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-bento bg-coral/10 border border-coral/30 text-sm text-coral">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            {errorMessage} Doğrudan{" "}
            <a href="mailto:info@entegrematik.com" className="underline underline-offset-4">
              info@entegrematik.com
            </a>{" "}
            adresine de yazabilirsiniz.
          </p>
        </div>
      )}

      <p className="text-xs text-graphite leading-relaxed">
        Formu göndererek KVKK Aydınlatma Metni&apos;ni kabul etmiş olursunuz. Bilgileriniz
        yalnızca talebinize yanıt vermek için kullanılacaktır.
      </p>
    </form>
  );
}