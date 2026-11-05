"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  FileText,
  Truck,
  RefreshCw,
  Store,
  Building2,
  ShoppingCart,
  Type,
  FileCode,
  Coins,
  Boxes,
  BarChart3,
  MessagesSquare,
  Undo2,
  Receipt,
  Calculator,
  FileDown,
  FileUp,
  Tags,
  Users,
  Wallet,
  FileCheck,
  Sparkles,
  Settings,
  Inbox,
  Hash,
  Layers,
  Printer,
  ListChecks,
  Headphones,
  BadgeCheck,
  Percent,
  AlertTriangle,
  Warehouse,
} from "lucide-react";

type Category =
  | "Pazaryeri & Ürün"
  | "Finans & E-Fatura"
  | "Stok & Kargo"
  | "Müşteri & Raporlama";

const bentoCards = [
  {
    icon: Package,
    title: "Pazaryerlerinde Saniyeler İçinde Listeleyin",
    description:
      "Tüm ürünlerinizi tek tıkla mağazalara aktarın. Sipariş, müşteri soruları ve iade/değişim yönetimini tek panelden, eşzamanlı olarak yönetin.",
    accent: "bg-electric-cyan/15 text-electric-cyan",
    wide: true,
  },
  {
    icon: FileText,
    title: "Tek Tıkla Otomatik Faturalandırma",
    description:
      "Gelen siparişleri vakit kaybetmeden e-faturaya dönüştürün ve muhasebeleştirin.",
    accent: "bg-emerald/15 text-emerald",
    wide: false,
  },
  {
    icon: Truck,
    title: "Kendi Anlaşmalı Kargolarınız Hizmetinizde",
    description:
      "Kargo entegrasyonlarınızı bağlayın, kargo fişi ve barkodları tek tıkla bastırın.",
    accent: "bg-coral/15 text-coral",
    wide: false,
  },
  {
    icon: RefreshCw,
    title: "Otomatik XML İçe Aktarımı",
    description:
      "Tedarikçi XML'lerini içeri aktarın, stok ve fiyat güncellemelerini anlık olarak otomatikleştirin.",
    accent: "bg-emerald/15 text-emerald",
    wide: true,
  },
];

const modules: { icon: typeof Package; title: string; desc: string; category: Category }[] = [
  { icon: Store, title: "Tüm Entegrasyonlar", desc: "Entegrasyon panelimizde bulunan tüm pazaryeri entegrasyonlarını kullanabilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: ShoppingCart, title: "Sınırsız Sipariş", desc: "Tüm pazaryerlerinden sınırsız olarak sipariş işlemleri yapabilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: Type, title: "Ürün Adı Sihirbazı", desc: "Her pazaryeri için BUL/DEĞİŞTİR/EKLE özelliği ile farklı ürün ismi oluşturabilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: FileCode, title: "Ürün Açıklama Sihirbazı", desc: "Her pazaryeri için özel açıklama ve içerik sihirbazı ile özgün ürün detayları oluşturun.", category: "Pazaryeri & Ürün" },
  { icon: Package, title: "Ürün Ekleme & Güncelleme", desc: "Paket limitinize göre ürün ekleme yapabilir ve anlık güncelleyebilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: FileUp, title: "XML Dışa Aktarma", desc: "Ürünlerinizi XML formatında istediğiniz zaman dışa aktarıp kullanabilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: FileDown, title: "XML İçe Aktarma", desc: "Tedarikçi XML dosyalarınızı panelle eşleştirip pazaryerlerinde hemen listeleyin.", category: "Pazaryeri & Ürün" },
  { icon: Tags, title: "Toplu Fiyatlandırma", desc: "Filtreler kullanarak ürünlerinizi toplu olarak fiyatlandırabilir ve güncelleyebilirsiniz.", category: "Pazaryeri & Ürün" },
  { icon: Sparkles, title: "Öncü Pazaryerleri", desc: "Yeni eklenen tüm pazaryerleri ve entegrasyonlar ücretsiz olarak hesabınıza tanımlanır.", category: "Pazaryeri & Ürün" },
  { icon: Percent, title: "Komisyon ve Kargo", desc: "Her mağaza ve kategorize özel farklı komisyon ve kargo ücreti belirleyin.", category: "Pazaryeri & Ürün" },
  { icon: Settings, title: "Ürün Ayarları", desc: "Her ürün için özel komisyon, kargo ücreti ve muafiyet tanımlaması yapın.", category: "Pazaryeri & Ürün" },
  { icon: Layers, title: "Toplu İşlemler", desc: "Ürünleri toplu olarak eşleştirin, iade veya güncellemeleri tek tıkla yapın.", category: "Pazaryeri & Ürün" },
  { icon: ListChecks, title: "Çoklu Sipariş İşlemi", desc: "Seçtiğiniz çoklu siparişleri tek tıkla onaylayın, faturaya veya kargoya dönüştürün.", category: "Pazaryeri & Ürün" },

  { icon: Building2, title: "Sınırsız Şirket", desc: "Sınırsız olarak şirket mağazalarınızı ekleyebilir, farklı logo ve bilgiler verebilirsiniz.", category: "Finans & E-Fatura" },
  { icon: Coins, title: "Çoklu Para Birimi ($ € ₺)", desc: "Ürünlerinizi USD, EUR ya da TL olarak ekleyin, kurlar değiştikçe fiyatlar otomatik güncellensin.", category: "Finans & E-Fatura" },
  { icon: Users, title: "Sınırsız Tedarikçi", desc: "Sınırsız tedarikçi ekleyebilir ve ürünleriniz ile cari takip yapabilirsiniz.", category: "Finans & E-Fatura" },
  { icon: Wallet, title: "Hesap Yönetimi", desc: "Sınırsız kasa ve banka hesabı açarak tüm masraf ve ödemelerinizi takip edin.", category: "Finans & E-Fatura" },
  { icon: Calculator, title: "Cari Hesap Takibi", desc: "Alış, satış, fatura ve tahsilat işlemlerinizi cari kartlar üzerinden yönetin.", category: "Finans & E-Fatura" },
  { icon: Receipt, title: "Mağaza Masraf Takibi", desc: "Masraf grupları açarak firmanızın giderlerini ve mağaza masraflarını kontrol edin.", category: "Finans & E-Fatura" },
  { icon: FileCheck, title: "E-Arşiv / E-Fatura", desc: "Tüm siparişlerinizi tek tıkla sınırsız ve hızlı bir şekilde e-faturaya dönüştürün.", category: "Finans & E-Fatura" },
  { icon: FileUp, title: "Fatura Yükleme", desc: "Panelinizden kesilen faturalarınız otomatik olarak pazaryerlerine yüklenir.", category: "Finans & E-Fatura" },
  { icon: Hash, title: "Fiyat Yuvarlama Özelliği", desc: "Küsüratlı fiyatları istediğiniz matematiksel seçeneğe göre otomatik yuvarlayın.", category: "Finans & E-Fatura" },

  { icon: Warehouse, title: "Depo Takibi", desc: "Deponuzdaki ürünleri kolayca takip edin, ürün hareketlerini detaylıca raporlayın.", category: "Stok & Kargo" },
  { icon: Boxes, title: "Stok Takibi", desc: "Her mağazanız ve kategoriniz için özel stok takibi seçeneğini aktif/pasif yapın.", category: "Stok & Kargo" },
  { icon: AlertTriangle, title: "Stok Risk Seçeneği", desc: "Stok risk limiti belirleyerek kritik seviyelerde otomatik stok düşümü yapın.", category: "Stok & Kargo" },
  { icon: Printer, title: "Düzenli Kargo Çıktıları", desc: "Sipariş kargo çıktılarını ve barkodları her pazaryeri için özel şablonla basın.", category: "Stok & Kargo" },

  { icon: MessagesSquare, title: "Hazır Cevaplar", desc: "Önceden kaydettiğiniz şablon mesajlar ile müşteri sorularına anında yanıt verin.", category: "Müşteri & Raporlama" },
  { icon: Undo2, title: "Müşteri Talepleri", desc: "İade ve değişim taleplerini tek ekrandan görün, onaylayın veya yönetin.", category: "Müşteri & Raporlama" },
  { icon: Inbox, title: "Müşteri Mesajları", desc: "Tüm mağaza mesajlarınızı tek kutuda toplayın ve hızla cevaplandırın.", category: "Müşteri & Raporlama" },
  { icon: BarChart3, title: "Raporlama Sayfası", desc: "Şirket, pazaryeri ve tarih bazlı detaylı ciro ve sipariş raporları alın.", category: "Müşteri & Raporlama" },
  { icon: Headphones, title: "Hızlı Destek", desc: "Ücretsiz eğitimler ve canlı destek ekibimiz ihtiyaç duyduğunuz her an yanınızda.", category: "Müşteri & Raporlama" },
  { icon: BadgeCheck, title: "Mutlu Müşteriler", desc: "%99.8 kesintisiz çalışma garantisi ile e-ticaretinizi güvenle büyütün.", category: "Müşteri & Raporlama" },
];

const tabs = ["Tüm Özellikler", "Pazaryeri & Ürün", "Finans & E-Fatura", "Stok & Kargo", "Müşteri & Raporlama"] as const;

export function Features() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Tüm Özellikler");

  const visibleModules =
    activeTab === "Tüm Özellikler"
      ? modules
      : modules.filter((m) => m.category === activeTab);

  return (
    <section id="ozellikler" className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="badge mb-4">
          <span aria-hidden="true">✨</span>
          <span>32+ Güçlü Modül Tek Panelde</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-ghost mb-4 text-balance">
          E-Ticaret Operasyonunuzun Tam Otomasyonu
        </h2>
        <p className="text-silver max-w-2xl mx-auto">
          Tüm pazaryerlerini, e-faturayı, kargoları ve stoku sıfır hatayla yönetin.
        </p>
      </div>

      {/* Bento Grid (yalnızca ilk görünümde animasyon — sekme ile ilgisi yok) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
        {bentoCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card glass-card-hover p-6 sm:p-8 ${card.wide ? "lg:col-span-2" : ""}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.accent}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ghost mb-3">{card.title}</h3>
              <p className="text-silver leading-relaxed text-sm sm:text-base">{card.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Sekmeler */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-bento text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab
                ? "bg-electric-cyan text-deep-night shadow-glow-cyan"
                : "bg-charcoal text-silver hover:text-ghost border border-slate-dark/40"
            }`}
          >
            {tab}
            {tab === "Tüm Özellikler" && <span className="ml-1.5">({modules.length})</span>}
          </button>
        ))}
      </div>

      {/* Modül Grid — ANİMASYONSUZ (sekme geçişi anında, göz yormaz) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleModules.map((module) => {
          const Icon = module.icon;
          return (
            <div key={module.title} className="glass-card glass-card-hover p-5">
              <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 text-electric-cyan flex items-center justify-center mb-3">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-ghost mb-1">{module.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{module.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}