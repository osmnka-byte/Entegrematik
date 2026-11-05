"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "9a5325d2-bb4c-4551-b133-35507452d06b");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", "Entegrematik İletişim Formu");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Form gönderimi sırasında bir hata oluştu.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen daha sonra tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ghost mb-2">
            Ad Soyad <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost placeholder-silver focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors"
            placeholder="Adınız ve soyadınız"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ghost mb-2">
            E-posta <span className="text-coral">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost placeholder-silver focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ghost mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost placeholder-silver focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors"
            placeholder="05XX XXX XX XX"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ghost mb-2">
            Şirket Adı
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost placeholder-silver focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors"
            placeholder="Şirket adı"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ghost mb-2">
          Konu <span className="text-coral">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors"
        >
          <option value="">Bir konu seçin</option>
          <option value="Pazaryeri Entegrasyonu">Pazaryeri Entegrasyonu</option>
          <option value="E-Fatura Entegrasyonu">E-Fatura Entegrasyonu</option>
          <option value="Ön Muhasebe">Ön Muhasebe</option>
          <option value="Kargo Entegrasyonu">Kargo Entegrasyonu</option>
          <option value="Fiyatlandırma">Fiyatlandırma</option>
          <option value="Teknik Destek">Teknik Destek</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ghost mb-2">
          Mesajınız <span className="text-coral">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-charcoal border border-slate-dark/40 text-ghost placeholder-silver focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/50 transition-colors resize-none"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-emerald/10 border border-emerald/30 text-emerald">
          <p className="font-medium">✓ Mesajınız başarıyla gönderildi!</p>
          <p className="text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-coral/10 border border-coral/30 text-coral">
          <p className="font-medium">✗ {errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Gönderiliyor...
          </span>
        ) : (
          "Mesaj Gönder"
        )}
      </button>

      <p className="text-xs text-silver text-center">
        * ile işaretli alanlar zorunludur. Gönderdiğiniz bilgiler KVKK kapsamında korunmaktadır.
      </p>
    </form>
  );
}