"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, Sparkles } from "lucide-react";

type FeatureRow = { label: string; included: boolean };

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearlyPerMonth: number;
  yearlyTotal: number;
  popular?: boolean;
  features: FeatureRow[];
};

const plans: Plan[] = [
  {
    id: "giris",
    name: "GirişMatik",
    tagline: "Başlangıç Paketi",
    monthly: 1099,
    yearlyPerMonth: 879,
    yearlyTotal: 10548,
    features: [
      { label: "Tüm Pazaryeri Entegrasyonları", included: true },
      { label: "Tüm E-İhracat Entegrasyonları", included: true },
      { label: "Tüm E-Ticaret Entegrasyonları", included: true },
      { label: "Tüm Kargo Entegrasyonları", included: false },
      { label: "Tüm E-Fatura Entegrasyonları", included: true },
      { label: "Tüm SMS Entegrasyonları", included: false },
      { label: "Sınırsız Şirket", included: true },
      { label: "Sınırsız Sipariş", included: true },
      { label: "Sınırsız Mesaj", included: true },
      { label: "Manuel Dijital Teslimat", included: true },
      { label: "Otomatik Dijital Teslimat", included: false },
      { label: "Ürün Ekleme", included: false },
      { label: "Pazaryeri Ürün Listeleme", included: false },
      { label: "Sınırsız Ürün Tedarikçi", included: false },
      { label: "Cari Hesap Takibi", included: false },
      { label: "Sınırsız Tedarikçi", included: false },
      { label: "Kasa ve Banka Hesapları", included: true },
      { label: "Mağaza Masraf Takibi", included: true },
      { label: "Depo Takibi", included: false },
      { label: "Farklı Komisyon Ve Kargo", included: false },
      { label: "Stok Takibi", included: false },
      { label: "Toplu Ürün Listeleme", included: false },
      { label: "Otomatik XML", included: false },
      { label: "XML İçe Aktarma", included: false },
      { label: "XML DIŞA Aktarma", included: false },
      { label: "İade ve Değişim Talepleri", included: true },
      { label: "Pazaryerine Göre Komisyon", included: false },
      { label: "Ürüne Göre Komisyon", included: false },
      { label: "Ürüne Göre Kargo Ücreti", included: false },
      { label: "Özelleştirilebilir Kargo Çıktıları", included: false },
    ],
  },
  {
    id: "senkron",
    name: "SenkronMatik",
    tagline: "Senkronizasyon Paketi",
    monthly: 1349,
    yearlyPerMonth: 1079,
    yearlyTotal: 12948,
    popular: true,
    features: [
      { label: "Tüm Pazaryeri Entegrasyonları", included: true },
      { label: "Tüm E-İhracat Entegrasyonları", included: true },
      { label: "Tüm E-Ticaret Entegrasyonları", included: true },
      { label: "Tüm Kargo Entegrasyonları", included: true },
      { label: "Tüm E-Fatura Entegrasyonları", included: true },
      { label: "Tüm SMS Entegrasyonları", included: true },
      { label: "Sınırsız Şirket", included: true },
      { label: "Sınırsız Sipariş", included: true },
      { label: "Sınırsız Mesaj", included: true },
      { label: "Manuel Dijital Teslimat", included: true },
      { label: "Otomatik Dijital Teslimat", included: false },
      { label: "Ürün Ekleme: 10.000", included: true },
      { label: "Pazaryeri Ürün Ekleme: 20.000", included: true },
      { label: "Sınırsız Ürün Tedarikçi", included: true },
      { label: "Cari Hesap Takibi", included: true },
      { label: "Sınırsız Tedarikçi", included: true },
      { label: "Kasa ve Banka Hesapları", included: true },
      { label: "Mağaza Masraf Takibi", included: true },
      { label: "Depo Takibi", included: true },
      { label: "Farklı Komisyon Ve Kargo", included: true },
      { label: "Stok Takibi", included: true },
      { label: "Toplu Ürün Listeleme", included: true },
      { label: "Otomatik XML", included: false },
      { label: "XML İçe Aktarma", included: false },
      { label: "XML DIŞA Aktarma", included: false },
      { label: "İade ve Değişim Talepleri", included: true },
      { label: "Pazaryerine Göre Komisyon", included: true },
      { label: "Ürüne Göre Komisyon", included: true },
      { label: "Ürüne Göre Kargo Ücreti", included: true },
      { label: "Özelleştirilebilir Kargo Çıktıları", included: true },
    ],
  },
  {
    id: "otoma",
    name: "OtomaMatik",
    tagline: "Büyüyen İşletmeler",
    monthly: 1949,
    yearlyPerMonth: 1559,
    yearlyTotal: 18708,
    features: [
      { label: "Tüm Pazaryeri Entegrasyonları", included: true },
      { label: "Tüm E-İhracat Entegrasyonları", included: true },
      { label: "Tüm E-Ticaret Entegrasyonları", included: true },
      { label: "Tüm Kargo Entegrasyonları", included: true },
      { label: "Tüm E-Fatura Entegrasyonları", included: true },
      { label: "Tüm SMS Entegrasyonları", included: true },
      { label: "Sınırsız Şirket", included: true },
      { label: "Sınırsız Sipariş", included: true },
      { label: "Sınırsız Mesaj", included: true },
      { label: "Manuel Dijital Teslimat", included: true },
      { label: "Otomatik Dijital Teslimat", included: true },
      { label: "Ürün Ekleme: 40.000", included: true },
      { label: "Pazaryeri Ürün Ekleme: 80.000", included: true },
      { label: "Sınırsız Ürün Tedarikçi", included: true },
      { label: "Cari Hesap Takibi", included: true },
      { label: "Sınırsız Tedarikçi", included: true },
      { label: "Kasa ve Banka Hesapları", included: true },
      { label: "Mağaza Masraf Takibi", included: true },
      { label: "Depo Takibi", included: true },
      { label: "Farklı Komisyon Ve Kargo", included: true },
      { label: "Stok Takibi", included: true },
      { label: "Toplu Ürün Listeleme", included: true },
      { label: "Otomatik XML 4 Adet", included: true },
      { label: "XML İçe Aktarma", included: true },
      { label: "XML DIŞA Aktarma", included: true },
      { label: "İade ve Değişim Talepleri", included: true },
      { label: "Pazaryerine Göre Komisyon", included: true },
      { label: "Ürüne Göre Komisyon", included: true },
      { label: "Ürüne Göre Kargo Ücreti", included: true },
      { label: "Özelleştirilebilir Kargo Çıktıları", included: true },
    ],
  },
  {
    id: "pro",
    name: "EntegreMatik Pro",
    tagline: "Maksimum Güç",
    monthly: 2599,
    yearlyPerMonth: 2079,
    yearlyTotal: 24948,
    features: [
      { label: "Tüm Pazaryeri Entegrasyonları", included: true },
      { label: "Tüm E-İhracat Entegrasyonları", included: true },
      { label: "Tüm E-Ticaret Entegrasyonları", included: true },
      { label: "Tüm Kargo Entegrasyonları", included: true },
      { label: "Tüm E-Fatura Entegrasyonları", included: true },
      { label: "Tüm SMS Entegrasyonları", included: true },
      { label: "Sınırsız Şirket", included: true },
      { label: "Sınırsız Sipariş", included: true },
      { label: "Sınırsız Mesaj", included: true },
      { label: "Manuel Dijital Teslimat", included: true },
      { label: "Otomatik Dijital Teslimat", included: true },
      { label: "Ürün Ekleme: 60.000", included: true },
      { label: "Pazaryeri Ürün Ekleme: 120.000", included: true },
      { label: "Sınırsız Ürün Tedarikçi", included: true },
      { label: "Cari Hesap Takibi", included: true },
      { label: "Sınırsız Tedarikçi", included: true },
      { label: "Kasa ve Banka Hesapları", included: true },
      { label: "Mağaza Masraf Takibi", included: true },
      { label: "Depo Takibi", included: true },
      { label: "Farklı Komisyon Ve Kargo", included: true },
      { label: "Stok Takibi", included: true },
      { label: "Toplu Ürün Listeleme", included: true },
      { label: "Otomatik XML 6 Adet", included: true },
      { label: "XML İçe Aktarma", included: true },
      { label: "XML DIŞA Aktarma", included: true },
      { label: "İade ve Değişim Talepleri", included: true },
      { label: "Pazaryerine Göre Komisyon", included: true },
      { label: "Ürüne Göre Komisyon", included: true },
      { label: "Ürüne Göre Kargo Ücreti", included: true },
      { label: "Özelleştirilebilir Kargo Çıktıları", included: true },
    ],
  },
];

const VISIBLE_ROWS = 11;

const listScrollClasses =
  "overflow-y-auto pr-2 flex-1 [scrollbar-width:thin] [scrollbar-color:var(--color-slate-dark)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-dark [&::-webkit-scrollbar-track]:bg-transparent";

function formatTL(value: number) {
  return `₺${value.toLocaleString("tr-TR")}`;
}

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="fiyatlandirma" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-ghost mb-4 text-balance">
          Entegrasyon Paketlerimiz
        </h2>
        <p className="text-silver max-w-2xl mx-auto">
          Gizli maliyet yok. İşletmenizin büyüklüğüne en uygun paketi seçin.
        </p>
      </div>

      {/* Aylık / Yıllık Switch */}
      <div className="flex justify-center mb-14">
        <div
          className="inline-flex items-center gap-1 p-1.5 rounded-bento bg-charcoal border border-slate-dark/40"
          role="group"
          aria-label="Ödeme dönemi seçimi"
        >
          <button
            onClick={() => setBilling("monthly")}
            className={`min-h-[44px] px-5 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              billing === "monthly"
                ? "bg-electric-cyan text-deep-night shadow-glow-cyan"
                : "text-silver hover:text-ghost"
            }`}
          >
            Aylık Ödeme
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`min-h-[44px] px-5 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap inline-flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-emerald text-white shadow-glow-emerald"
                : "text-silver hover:text-ghost"
            }`}
          >
            Yıllık Ödeme
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                billing === "yearly" ? "bg-white/20 text-white" : "bg-emerald/15 text-emerald"
              }`}
            >
              %20 İNDİRİM
            </span>
          </button>
        </div>
      </div>

      {/* Paket Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => {
          const isExpanded = !!expanded[plan.id];
          const rows = isExpanded ? plan.features : plan.features.slice(0, VISIBLE_ROWS);

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card glass-card-hover p-6 flex flex-col relative h-[780px] ${
                plan.popular ? "border-electric-cyan/60 shadow-glow-cyan" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-electric-cyan text-deep-night text-xs font-bold shadow-glow-cyan whitespace-nowrap">
                  <Sparkles size={12} aria-hidden="true" />
                  ÇOK SATAN PAKET
                </div>
              )}

              <h3 className="text-lg font-bold text-ghost">{plan.name}</h3>
              <span className="mt-2 inline-flex self-start px-2.5 py-1 rounded-md bg-slate-dark/40 text-silver text-xs font-medium">
                {plan.tagline}
              </span>

              {/* Fiyat */}
              <div className="mt-5 mb-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-ghost">
                    {formatTL(billing === "monthly" ? plan.monthly : plan.yearlyPerMonth)}
                  </span>
                  <span className="text-silver text-sm">/ Ay</span>
                </div>
                {billing === "yearly" ? (
                  <div className="mt-1 space-y-0.5">
                    <div className="text-silver text-xs line-through">
                      {formatTL(plan.monthly)} / Ay yerine
                    </div>
                    <div className="text-emerald text-xs font-semibold">
                      Yıllık {formatTL(plan.yearlyTotal)} (%20 İndirimli)
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 text-silver text-xs">Aylık düzenli faturalandırılır</div>
                )}
              </div>

              <a href="/iletisim" className={plan.popular ? "btn-primary w-full" : "inline-flex items-center justify-center min-h-[48px] w-full px-6 py-3 rounded-bento font-semibold bg-electric-cyan text-deep-night hover:bg-cyan-glow transition-all duration-300 whitespace-nowrap shadow-glow-cyan"}>
                Ücretsiz Dene
              </a>

              {/* Özellik Listesi */}
              <div className="mt-6 pt-5 border-t border-slate-dark/30 flex flex-col flex-1 overflow-hidden">
                <p className="text-xs font-bold text-silver uppercase tracking-wider mb-4">
                  Paket İçeriği:
                </p>
                <ul className={`space-y-2.5 ${listScrollClasses}`}>
                  {rows.map((row) => (
                    <li key={row.label} className="flex items-start gap-2 text-sm">
                      {row.included ? (
                        <Check size={16} className="text-emerald mt-0.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <X size={16} className="text-coral mt-0.5 shrink-0" aria-hidden="true" />
                      )}
                      <span className={row.included ? "text-silver" : "text-graphite line-through"}>
                        {row.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => toggleExpand(plan.id)}
                  className="mt-4 min-h-[44px] w-full inline-flex items-center justify-center gap-1.5 text-electric-cyan hover:text-cyan-glow text-sm font-semibold transition-colors"
                  aria-expanded={isExpanded}
                >
                  {isExpanded
                    ? "Daha Az Göster"
                    : `Tüm Özellikleri Gör (${plan.features.length})`}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-center text-silver text-sm mt-12">
        Not: Fiyatlarımıza %20 KDV Dahildir
      </p>
    </section>
  );
}