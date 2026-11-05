"use client";

import { useState } from "react";
import { Store, Globe, Truck, Receipt, MessageCircle, Check } from "lucide-react";

type Integration = { name: string; desc: string; color: string };

const groups: { id: string; label: string; icon: typeof Store; items: Integration[] }[] = [
  {
    id: "pazaryerleri",
    label: "Pazaryerleri",
    icon: Store,
    items: [
      { name: "Trendyol Entegrasyonu", desc: "Sipariş, Stok ve Fatura Senkronizasyonu", color: "#F27A1A" },
      { name: "Hepsiburada Entegrasyonu", desc: "Anlık Ürün Listeleme & Komisyon Ayarları", color: "#FF6000" },
      { name: "N11 Entegrasyonu", desc: "Toplu Ürün Güncelleme & Fiyat Eşitleme", color: "#E31F26" },
      { name: "Pazarama Entegrasyonu", desc: "Sipariş ve İade Otomasyonu", color: "#2E5BFF" },
      { name: "Çiçeksepeti Entegrasyonu", desc: "Varyantlı Ürün Yönetimi & Stok Takibi", color: "#29B6F6" },
      { name: "PTTAVM Entegrasyonu", desc: "Otomatik Barkod ve Sipariş Aktarımı", color: "#FFC400" },
      { name: "idefix Entegrasyonu", desc: "Kitap, Elektronik & Genel Ürün Yönetimi", color: "#1B2A4A" },
      { name: "Koçtaş Entegrasyonu", desc: "Yapı Market & Ev Yaşam Entegrasyonu", color: "#E31F26" },
      { name: "Turkcell Pasaj Entegrasyonu", desc: "Elektronik & Dijital Pazaryeri Otomasyonu", color: "#FFC400" },
      { name: "Vodafone Yanımda Entegrasyonu", desc: "Mobil Pazaryeri Mağaza & Sipariş Yönetimi", color: "#E60000" },
      { name: "Teknosa Entegrasyonu", desc: "Teknoloji Pazaryeri Entegrasyonu & Stok Eşitleme", color: "#F27A1A" },
      { name: "Farmazon Entegrasyonu", desc: "Medikal & Eczane Pazaryeri Sipariş ve Stok Takibi", color: "#29B6F6" },
    ],
  },
  {
    id: "e-ticaret",
    label: "E-Ticaret Siteleri",
    icon: Globe,
    items: [
      { name: "Shopier Entegrasyonu", desc: "Sosyal Medya & Butik E-Ticaret Entegrasyonu", color: "#29B6F6" },
      { name: "WooCommerce Entegrasyonu", desc: "WordPress Altyapılı Siteler İçin Çift Yönlü Aktarım", color: "#96588A" },
      { name: "PrestaShop Entegrasyonu", desc: "Gelişmiş Mağaza Stok & Sipariş Senkronizasyonu", color: "#EC008C" },
      { name: "OpenCart Entegrasyonu", desc: "Esnek XML ve Ürün Veritabanı Eşleşmesi", color: "#00C3FF" },
      { name: "Shopify Entegrasyonu", desc: "Uluslararası E-Ticaret Mağaza Senkronizasyonu", color: "#95BF47" },
      { name: "Özel XML / API Entegrasyonu", desc: "Kendi Özel E-Ticaret Siteniz İçin Entegrasyon", color: "#3B82F6" },
    ],
  },
  {
    id: "kargo",
    label: "Kargo Entegrasyonları",
    icon: Truck,
    items: [
      { name: "Aras Kargo Entegrasyonu", desc: "Otomatik Barkod Basımı ve Kargo Fişi Hazırlama", color: "#1B4B8F" },
      { name: "Yurtiçi Kargo Entegrasyonu", desc: "Anlık Kargo Takip Kodu ve Durum Güncellemesi", color: "#E31F26" },
      { name: "MNG Kargo Entegrasyonu", desc: "Toplu Kargo Çıktısı Alma ve Fiyat Eşitleme", color: "#E31F26" },
      { name: "Sürat Kargo Entegrasyonu", desc: "Hızlı Barkod ve Şablon Düzenleyici", color: "#1E62D0" },
      { name: "PTT Kargo Entegrasyonu", desc: "Sistemle Tam Entegre Kargo Gönderi Takibi", color: "#FFC400" },
      { name: "Geliver Kargo Entegrasyonu", desc: "Akıllı Kargo ve Lojistik Yönetim Entegrasyonu", color: "#3B82F6" },
      { name: "Sendeo Kargo Entegrasyonu", desc: "Yeni Nesil Teslimat & Kargo Takip Otomasyonu", color: "#E31F26" },
    ],
  },
  {
    id: "e-fatura",
    label: "E-Fatura & Muhasebe",
    icon: Receipt,
    items: [
      { name: "GİB E-Fatura / E-Arşiv", desc: "Resmi Gelir İdaresi Başkanlığı Tam Uyumlu", color: "#22C55E" },
      { name: "Uyumsoft E-Fatura Entegrasyonu", desc: "Otomatik E-Fatura Kesimi ve Pazaryerine Yükleme", color: "#2563EB" },
      { name: "Birfatura Entegrasyonu", desc: "Hızlı Ön Muhasebe ve Fatura Entegrasyonu", color: "#3B82F6" },
      { name: "QNB eFinans Entegrasyonu", desc: "Güvenli Kurumsal E-Fatura ve E-Arşiv Altyapısı", color: "#B0164E" },
      { name: "Hepsiburada E-Faturam", desc: "Hepsiburada Siparişlerine Özel Otomatik Fatura", color: "#FF6000" },
      { name: "EDM Bilişim Entegrasyonu", desc: "Entegre E-Dönüşüm ve Fatura Otomasyonu", color: "#1B4B8F" },
      { name: "N11 Faturam Entegrasyonu", desc: "N11 Mağazanıza Özel Otomatik Fatura Yükleme", color: "#E31F26" },
      { name: "Trendyol E-Faturam", desc: "Trendyol Mağazanız İçin Anında Fatura Kesimi", color: "#F27A1A" },
    ],
  },
  {
    id: "sms",
    label: "SMS & Bildirim",
    icon: MessageCircle,
    items: [
      { name: "Netgsm SMS Entegrasyonu", desc: "Müşterilerinize Otomatik Sipariş & Kargo Bilgilendirme SMS'i", color: "#3B82F6" },
      { name: "Whapı WhatsApp Entegrasyonu", desc: "WhatsApp API ile Otomatik Mesajlaşma & Bildirim", color: "#22C55E" },
      { name: "WhatsApp Bildirim Entegrasyonu", desc: "Müşterilerinize Anlık WhatsApp Bildirimi ve Takip", color: "#14B8A6" },
      { name: "İletimerkezi SMS Entegrasyonu", desc: "Toplu Müşteri Bilgilendirme Mesajları", color: "#F59E0B" },
    ],
  },
];

export function Integrations() {
  const [activeGroup, setActiveGroup] = useState(groups[0].id);
  const current = groups.find((g) => g.id === activeGroup)!;

  return (
    <section id="entegrasyonlar" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="badge mb-4">
          <span aria-hidden="true">🔗</span>
          <span>Zengin Entegrasyon Ekosistemi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-ghost mb-4 text-balance">
          Desteklenen Tüm Entegrasyonlarımız
        </h2>
        <p className="text-silver max-w-2xl mx-auto">
          Kullandığınız tüm pazaryerleri, mağaza altyapıları, kargo ve e-fatura
          sistemleri tek tıkla Entegrematik&apos;e bağlanır.
        </p>
      </div>

      {/* Sekmeler */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-bento text-sm font-medium transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                activeGroup === group.id
                  ? "bg-electric-cyan text-deep-night shadow-glow-cyan"
                  : "bg-charcoal text-silver hover:text-ghost border border-slate-dark/40"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {group.label}
            </button>
          );
        })}
      </div>

      {/* Kartlar — ANİMASYONSUZ (sekme geçişi anında) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {current.items.map((item) => (
          <div key={item.name} className="glass-card glass-card-hover p-5 flex flex-col">
            <div className="flex items-start gap-3 mb-3">
              <span
                className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <h3 className="font-semibold text-ghost leading-snug">{item.name}</h3>
            </div>
            <p className="text-silver text-sm leading-relaxed flex-1">{item.desc}</p>
            <div className="mt-4 pt-3 border-t border-slate-dark/30 flex items-center justify-between">
              <span className="text-emerald text-xs font-semibold">%100 Tam Uyumlu</span>
              <Check size={16} className="text-emerald" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}