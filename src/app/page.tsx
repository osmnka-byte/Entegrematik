'use client';

import React, { useState } from 'react';
import { 
  Menu, X, Check, FileText, Package, RefreshCw, ChevronDown, BarChart3, ShieldCheck, Zap,
  Wand2, DollarSign, Warehouse, Users, Mail, Percent, Layers, Truck, MessageSquare, Headphones,
  Store, Building2, ShoppingCart, HelpCircle, FileSpreadsheet, CreditCard, PieChart, Sparkles,
  Globe, CreditCard as InvoiceIcon, Send
} from 'lucide-react';

export default function EntegrematikLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({});
  
  // Sekme Durumları
  const [activeFeatureTab, setActiveFeatureTab] = useState<'all' | 'pazaryeri' | 'finans' | 'stok' | 'destek'>('all');
  const [activeIntegrationTab, setActiveIntegrationTab] = useState<'pazaryeri' | 'eticaret' | 'kargo' | 'efatura' | 'sms'>('pazaryeri');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const togglePlanExpand = (planName: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  // --- KAYAN BANT İÇİN ENTEGRASYON LOGOLARI / PLATFORMLAR ---
  const integrationLogos = [
    { name: "Trendyol Entegrasyonu", color: "#F27A1A" },
    { name: "Hepsiburada Entegrasyonu", color: "#FF6600" },
    { name: "N11 Entegrasyonu", color: "#E31E24" },
    { name: "Pazarama Entegrasyonu", color: "#0055FF" },
    { name: "Çiçeksepeti Entegrasyonu", color: "#00A0E6" },
    { name: "PTTAVM Entegrasyonu", color: "#FFCC00" },
    { name: "Koçtaş Entegrasyonu", color: "#EB2027" },
    { name: "Turkcell Pasaj Entegrasyonu", color: "#FFC800" },
    { name: "Vodafone Yanımda", color: "#E60000" },
    { name: "Teknosa Entegrasyonu", color: "#FF6600" },
    { name: "Farmazon Entegrasyonu", color: "#00B0FF" },
    { name: "Shopier Entegrasyonu", color: "#0088CC" },
    { name: "idefix Entegrasyonu", color: "#0F172A" },
    { name: "WooCommerce Entegrasyonu", color: "#96588A" },
    { name: "PrestaShop", color: "#DF0067" },
    { name: "OpenCart", color: "#2292D0" },
    { name: "Aras Kargo", color: "#1D3C6A" },
    { name: "Yurtiçi Kargo", color: "#EE3124" },
    { name: "Geliver", color: "#2563EB" },
    { name: "Sendeo Kargo", color: "#ED1C24" },
  ];

  // --- SEKMELİ KATEGORİZASYON İÇİN ENTEGRASYON LİSTELERİ ---
  const integrationCategories = {
    pazaryeri: [
      { name: "Trendyol Entegrasyonu", desc: "Sipariş, Stok ve Fatura Senkronizasyonu", color: "#F27A1A" },
      { name: "Hepsiburada Entegrasyonu", desc: "Anlık Ürün Listeleme & Komisyon Ayarları", color: "#FF6600" },
      { name: "N11 Entegrasyonu", desc: "Toplu Ürün Güncelleme & Fiyat Eşitleme", color: "#E31E24" },
      { name: "Pazarama Entegrasyonu", desc: "Sipariş ve İade Otomasyonu", color: "#0055FF" },
      { name: "Çiçeksepeti Entegrasyonu", desc: "Varyantlı Ürün Yönetimi & Stok Takibi", color: "#00A0E6" },
      { name: "PTTAVM Entegrasyonu", desc: "Otomatik Barkod ve Sipariş Aktarımı", color: "#FFCC00" },
      { name: "idefix Entegrasyonu", desc: "Kitap, Elektronik & Genel Ürün Yönetimi", color: "#0F172A" },
      { name: "Koçtaş Entegrasyonu", desc: "Yapı Market & Ev Yaşam Entegrasyonu", color: "#EB2027" },
      { name: "Turkcell Pasaj Entegrasyonu", desc: "Elektronik & Dijital Pazaryeri Otomasyonu", color: "#FFC800" },
      { name: "Vodafone Yanımda Entegrasyonu", desc: "Mobil Pazaryeri Mağaza ve Sipariş Yönetimi", color: "#E60000" },
      { name: "Teknosa Entegrasyonu", desc: "Teknoloji Pazaryeri Entegrasyonu & Stok Eşitleme", color: "#FF6600" },
      { name: "Farmazon Entegrasyonu", desc: "Medikal & Eczane Pazaryeri Sipariş ve Stok Takibi", color: "#00B0FF" }
    ],
    eticaret: [
      { name: "Shopier Entegrasyonu", desc: "Sosyal Medya & Butik E-Ticaret Entegrasyonu", color: "#0088CC" },
      { name: "WooCommerce Entegrasyonu", desc: "WordPress Altyapılı Siteler İçin Çift Yönlü Aktarım", color: "#96588A" },
      { name: "PrestaShop Entegrasyonu", desc: "Gelişmiş Mağaza Stok & Sipariş Senkronizasyonu", color: "#DF0067" },
      { name: "OpenCart Entegrasyonu", desc: "Esnek XML ve Ürün Veritabanı Eşleşmesi", color: "#2292D0" },
      { name: "Shopify Entegrasyonu", desc: "Uluslararası E-Ticaret Mağaza Senkronizasyonu", color: "#95BF47" },
      { name: "Özel XML / API Entegrasyonu", desc: "Kendi Özel E-Ticaret Siteniz İçin Entegrasyon", color: "#2563EB" }
    ],
    kargo: [
      { name: "Aras Kargo Entegrasyonu", desc: "Otomatik Barkod Basımı ve Kargo Fişi Hazırlama", color: "#1D3C6A" },
      { name: "Yurtiçi Kargo Entegrasyonu", desc: "Anlık Kargo Takip Kodu ve Durum Güncellemesi", color: "#EE3124" },
      { name: "MNG Kargo Entegrasyonu", desc: "Toplu Kargo Çıktısı Alma ve Fiyat Eşitleme", color: "#E31C2D" },
      { name: "Sürat Kargo Entegrasyonu", desc: "Hızlı Barkod ve Şablon Düzenleyici", color: "#003399" },
      { name: "PTT Kargo Entegrasyonu", desc: "Sistemle Tam Entegre Kargo Gönderi Takibi", color: "#FFCC00" },
      { name: "Geliver Kargo Entegrasyonu", desc: "Akıllı Kargo ve Lojistik Yönetim Entegrasyonu", color: "#2563EB" },
      { name: "Sendeo Kargo Entegrasyonu", desc: "Yeni Nesil Teslimat & Kargo Takip Otomasyonu", color: "#ED1C24" }
    ],
    efatura: [
      { name: "GİB E-Fatura / E-Arşiv", desc: "Resmi Gelir İdaresi Başkanlığı Tam Uyumlu", color: "#10B981" },
      { name: "Uyumsoft E-Fatura Entegrasyonu", desc: "Otomatik E-Fatura Kesimi ve Pazaryerine Yükleme", color: "#0052CC" },
      { name: "Birfatura Entegrasyonu", desc: "Hızlı Ön Muhasebe ve Fatura Entegrasyonu", color: "#3B82F6" },
      { name: "QNB eFinans Entegrasyonu", desc: "Güvenli Kurumsal E-Fatura ve E-Arşiv Altyapısı", color: "#8A1538" },
      { name: "Hepsiburada E-Faturam", desc: "Hepsiburada Siparişlerine Özel Otomatik Fatura", color: "#FF6600" },
      { name: "EDM Bilişim Entegrasyonu", desc: "Entegre E-Dönüşüm ve Fatura Otomasyonu", color: "#1D3C6A" },
      { name: "N11 Faturam Entegrasyonu", desc: "N11 Mağazanıza Özel Otomatik Fatura Yükleme", color: "#E31E24" },
      { name: "Trendyol E-Faturam", desc: "Trendyol Mağazanız İçin Anında Fatura Kesimi", color: "#F27A1A" }
    ],
    sms: [
      { name: "Netgsm SMS Entegrasyonu", desc: "Müşterilerinize Otomatik Sipariş & Kargo Bilgilendirme SMS'i", color: "#3B82F6" },
      { name: "Whapi WhatsApp Entegrasyonu", desc: "WhatsApp API İle Otomatik Mesajlaşma & Bildirim", color: "#25D366" },
      { name: "WhatsApp Bildirim Entegrasyonu", desc: "Müşterilerinize Anlık WhatsApp Bildirimi ve Takip", color: "#128C7E" },
      { name: "İletimerkezi SMS Entegrasyonu", desc: "Toplu Müşteri Bilgilendirme Mesajları", color: "#F59E0B" }
    ]
  };

  // --- 32 DİJİTAL GÜÇÜN TAMAMI ---
  const allFeatures = [
    { category: 'pazaryeri', icon: Store, title: "TÜM ENTEGRASYONLAR", desc: "Entegrasyon panelimizde bulunan tüm pazaryeri entegrasyonlarını kullanabilirsiniz." },
    { category: 'finans', icon: Building2, title: "SINIRSIZ ŞİRKET", desc: "Sınırsız olarak şirket mağazalarınızı ekleyebilir, farklı logo ve bilgiler verebilirsiniz." },
    { category: 'pazaryeri', icon: ShoppingCart, title: "SINIRSIZ SİPARİŞ", desc: "Tüm pazaryerlerinden sınırsız olarak sipariş işlemleri yapabilirsiniz." },
    { category: 'pazaryeri', icon: Wand2, title: "ÜRÜN ADI SİHİRBAZI", desc: "Her pazaryeri için BUL/DEĞİŞTİR/EKLE özelliği ile farklı ürün ismi oluşturabilirsiniz." },
    { category: 'pazaryeri', icon: Sparkles, title: "ÜRÜN AÇIKLAMA SİHİRBAZI", desc: "Her pazaryeri için özel açıklama ve içerik sihirbazı ile özgün ürün detayları oluşturun." },
    { category: 'finans', icon: DollarSign, title: "ÇOKLU PARA BİRİMİ ($ € ₺)", desc: "Ürünlerinizi USD, EUR ya da TL olarak ekleyin, kurlar değiştikçe fiyatlar otomatik güncellensin." },
    { category: 'pazaryeri', icon: Package, title: "ÜRÜN EKLEME & GÜNCELLEME", desc: "Paket limitinize göre ürün ekleme yapabilir ve anlık güncelleyebilirsiniz." },
    { category: 'stok', icon: Warehouse, title: "DEPO TAKİBİ", desc: "Deponuzdaki ürünleri kolayca takip edin, ürün hareketlerini detaylıca raporlayın." },
    { category: 'finans', icon: Users, title: "SINIRSIZ TEDARİKÇİ", desc: "Sınırsız tedarikçi ekleyebilir ve ürünleriniz ile cari takip yapabilirsiniz." },
    { category: 'finans', icon: CreditCard, title: "HESAP YÖNETİMİ", desc: "Sınırsız kasa ve banka hesabı açarak tüm masraf ve ödemelerinizi takip edin." },
    { category: 'finans', icon: PieChart, title: "CARİ HESAP TAKİBİ", desc: "Alış, satış, fatura ve tahsilat işlemlerinizi cari kartlar üzerinden yönetin." },
    { category: 'finans', icon: FileSpreadsheet, title: "MAĞAZA MASRAF TAKİBİ", desc: "Masraf grupları açarak firmanızın giderlerini ve mağaza masraflarını kontrol edin." },
    { category: 'finans', icon: FileText, title: "E-ARŞİV / E-FATURA", desc: "Tüm siparişlerinizi tek tıkla sınırsız ve hızlı bir şekilde e-faturaya dönüştürün." },
    { category: 'finans', icon: RefreshCw, title: "FATURA YÜKLEME", desc: "Panelinizden kesilen faturalarınız otomatik olarak pazaryerlerine yüklenir." },
    { category: 'pazaryeri', icon: RefreshCw, title: "XML DIŞA AKTARMA", desc: "Ürünlerinizi XML formatında istediğiniz zaman dışa aktarıp kullanabilirsiniz." },
    { category: 'pazaryeri', icon: Percent, title: "TOPLU FİYATLANDIRMA", desc: "Filtreler kullanarak ürünlerinizi toplu olarak fiyatlandırabilir ve güncelleyebilirsiniz." },
    { category: 'pazaryeri', icon: RefreshCw, title: "XML İÇE AKTARMA", desc: "Tedarikçi XML dosyalarınızı panelle eşleştirip pazaryerlerinde hemen listeleyin." },
    { category: 'pazaryeri', icon: Zap, title: "ÖNCÜ PAZARYERLERİ", desc: "Yeni eklenen tüm pazaryerleri ve entegrasyonlar ücretsiz olarak hesabınıza tanımlanır." },
    { category: 'stok', icon: Layers, title: "STOK TAKİBİ", desc: "Her mağazanız ve kategoriniz için özel stok takibi seçeneğini aktif/pasif yapın." },
    { category: 'destek', icon: MessageSquare, title: "HAZIR CEVAPLAR", desc: "Önceden kaydettiğiniz şablon mesajlar ile müşteri sorularına anında yanıt verin." },
    { category: 'pazaryeri', icon: Percent, title: "KOMİSYON VE KARGO", desc: "Her mağaza ve kategoriye özel farklı komisyon ve kargo ücreti belirleyin." },
    { category: 'stok', icon: ShieldCheck, title: "STOK RİSK SEÇENEĞİ", desc: "Stok risk limiti belirleyerek kritik seviyelerde otomatik stok düşümü yapın." },
    { category: 'destek', icon: HelpCircle, title: "MÜŞTERİ TALEPLERİ", desc: "İade ve değişim taleplerini tek ekrandan görün, onaylayın veya yönetin." },
    { category: 'pazaryeri', icon: Package, title: "ÜRÜN AYARLARI", desc: "Her ürün için özel komisyon, kargo ücreti ve muafiyet tanımlaması yapın." },
    { category: 'destek', icon: Mail, title: "MÜŞTERİ MESAJLARI", desc: "Tüm mağaza mesajlarınızı tek kutuda toplayın ve hızlıca cevaplandırın." },
    { category: 'finans', icon: DollarSign, title: "FİYAT YUVARLAMA ÖZELLİĞİ", desc: "Küsüratlı fiyatları istediğiniz matematiksel seçeneğe göre otomatik yuvarlayın." },
    { category: 'pazaryeri', icon: Layers, title: "TOPLU İŞLEMLER", desc: "Ürünleri toplu olarak eşleştirin, iade veya güncellemeleri tek tıkla yapın." },
    { category: 'stok', icon: Truck, title: "DÜZENLİ KARGO ÇIKTILARI", desc: "Sipariş kargo çıktılarını ve barkodları her pazaryeri için özel şablonla basın." },
    { category: 'destek', icon: BarChart3, title: "RAPORLAMA SAYFASI", desc: "Şirket, pazaryeri ve tarih bazlı detaylı ciro ve sipariş raporları alın." },
    { category: 'pazaryeri', icon: ShoppingCart, title: "ÇOKLU SİPARİŞ İŞLEMİ", desc: "Seçtiğiniz çoklu siparişleri tek tıkla onaylayın, faturaya veya kargoya dönüştürün." },
    { category: 'destek', icon: Headphones, title: "HIZLI DESTEK", desc: "Ücretsiz eğitimler ve canlı destek ekibimiz ihtiyaç duyduğunuz her an yanınızda." },
    { category: 'destek', icon: ShieldCheck, title: "MUTLU MÜŞTERİLER", desc: "%99.8 kesintisiz çalışma garantisi ile e-ticaretinizi güvenle büyütün." }
  ];

  const filteredFeatures = activeFeatureTab === 'all' 
    ? allFeatures 
    : allFeatures.filter(f => f.category === activeFeatureTab);

  // --- PAKET VERİLERİ ---
  const pricingPlans = [
    {
      name: "GirişMatik",
      badge: "Başlangıç Paketi",
      monthlyPrice: 899,
      yearlyMonthlyEquivalent: 749,
      yearlyTotal: 8988,
      isPopular: false,
      features: [
        { text: "Bütün Pazaryeri Entegrasyonları", included: true },
        { text: "Bütün E-İhracat Entegrasyonları", included: true },
        { text: "Bütün E-Ticaret Entegrasyonları", included: true },
        { text: "Bütün Kargo Entegrasyonları", included: false },
        { text: "Bütün E-Fatura Entegrasyonları", included: true },
        { text: "Bütün SMS Entegrasyonları", included: false },
        { text: "Sınırsız Şirket", included: true },
        { text: "Sınırsız Sipariş", included: true },
        { text: "Sınırsız Mesaj", included: true },
        { text: "Manuel Dijital Teslimat", included: true },
        { text: "Otomatik Dijital Teslimat", included: false },
        { text: "Ürün Ekleme", included: false },
        { text: "Pazaryeri Ürün Listeleme", included: false },
        { text: "Sınırsız Ürün Tedarikçi", included: false },
        { text: "Cari Hesap Takibi", included: true },
        { text: "Sınırsız Tedarikçi", included: false },
        { text: "Kasa ve Banka Hesapları", included: true },
        { text: "Mağaza Masraf Takibi", included: true },
        { text: "Depo Takibi", included: false },
        { text: "Farklı Komisyon Ve Kargo", included: false },
        { text: "Stok Takibi", included: false },
        { text: "Toplu Ürün Listeleme", included: false },
        { text: "Otomatik XML", included: false },
        { text: "XML İçe Aktarma", included: false },
        { text: "XML Dışa Aktarma", included: false },
        { text: "İade ve Değişim Talepleri", included: true },
        { text: "Pazaryerine Göre Komisyon", included: false },
        { text: "Ürüne Göre Komisyon", included: false },
        { text: "Ürüne Göre Kargo Ücreti", included: false },
        { text: "Özelleştirilebilir Kargo Çıktıları", included: false }
      ]
    },
    {
      name: "SenkronMatik",
      badge: "Çok Satan Paket",
      monthlyPrice: 1099,
      yearlyMonthlyEquivalent: 899,
      yearlyTotal: 10788,
      isPopular: true,
      features: [
        { text: "Bütün Pazaryeri Entegrasyonları", included: true },
        { text: "Bütün E-İhracat Entegrasyonları", included: true },
        { text: "Bütün E-Ticaret Entegrasyonları", included: true },
        { text: "Bütün Kargo Entegrasyonları", included: true },
        { text: "Bütün E-Fatura Entegrasyonları", included: true },
        { text: "Bütün SMS Entegrasyonları", included: true },
        { text: "Sınırsız Şirket", included: true },
        { text: "Sınırsız Sipariş", included: true },
        { text: "Sınırsız Mesaj", included: true },
        { text: "Manuel Dijital Teslimat", included: true },
        { text: "Otomatik Dijital Teslimat", included: false },
        { text: "Ürün Ekleme: 10.000", included: true },
        { text: "Pazaryeri Ürün Ekleme: 20.000", included: true },
        { text: "Sınırsız Ürün Tedarikçi", included: true },
        { text: "Cari Hesap Takibi", included: true },
        { text: "Sınırsız Tedarikçi", included: true },
        { text: "Kasa ve Banka Hesapları", included: true },
        { text: "Mağaza Masraf Takibi", included: true },
        { text: "Depo Takibi", included: true },
        { text: "Farklı Komisyon Ve Kargo", included: true },
        { text: "Stok Takibi", included: true },
        { text: "Toplu Ürün Listeleme", included: true },
        { text: "Otomatik XML", included: false },
        { text: "XML İçe Aktarma", included: false },
        { text: "XML Dışa Aktarma", included: false },
        { text: "İade ve Değişim Talepleri", included: true },
        { text: "Pazaryerine Göre Komisyon", included: true },
        { text: "Ürüne Göre Komisyon", included: true },
        { text: "Ürüne Göre Kargo Ücreti", included: true },
        { text: "Özelleştirilebilir Kargo Çıktıları", included: true }
      ]
    },
    {
      name: "OtomaMatik",
      badge: "Büyüyen İşletmeler",
      monthlyPrice: 1599,
      yearlyMonthlyEquivalent: 1299,
      yearlyTotal: 15588,
      isPopular: false,
      features: [
        { text: "Bütün Pazaryeri Entegrasyonları", included: true },
        { text: "Bütün E-İhracat Entegrasyonları", included: true },
        { text: "Bütün E-Ticaret Entegrasyonları", included: true },
        { text: "Bütün Kargo Entegrasyonları", included: true },
        { text: "Bütün E-Fatura Entegrasyonları", included: true },
        { text: "Bütün SMS Entegrasyonları", included: true },
        { text: "Sınırsız Şirket", included: true },
        { text: "Sınırsız Sipariş", included: true },
        { text: "Sınırsız Mesaj", included: true },
        { text: "Manuel Dijital Teslimat", included: true },
        { text: "Otomatik Dijital Teslimat", included: true },
        { text: "Ürün Ekleme: 40.000", included: true },
        { text: "Pazaryeri Ürün Ekleme: 80.000", included: true },
        { text: "Sınırsız Ürün Tedarikçi", included: true },
        { text: "Cari Hesap Takibi", included: true },
        { text: "Sınırsız Tedarikçi", included: true },
        { text: "Kasa ve Banka Hesapları", included: true },
        { text: "Mağaza Masraf Takibi", included: true },
        { text: "Depo Takibi", included: true },
        { text: "Farklı Komisyon Ve Kargo", included: true },
        { text: "Stok Takibi", included: true },
        { text: "Toplu Ürün Listeleme", included: true },
        { text: "Otomatik XML: 4 Adet", included: true },
        { text: "XML İçe Aktarma", included: true },
        { text: "XML Dışa Aktarma", included: true },
        { text: "İade ve Değişim Talepleri", included: true },
        { text: "Pazaryerine Göre Komisyon", included: true },
        { text: "Ürüne Göre Komisyon", included: true },
        { text: "Ürüne Göre Kargo Ücreti", included: true },
        { text: "Özelleştirilebilir Kargo Çıktıları", included: true }
      ]
    },
    {
      name: "EntegreMatik Pro",
      badge: "Maksimum Güç",
      monthlyPrice: 2099,
      yearlyMonthlyEquivalent: 1699,
      yearlyTotal: 20388,
      isPopular: false,
      features: [
        { text: "Bütün Pazaryeri Entegrasyonları", included: true },
        { text: "Bütün E-İhracat Entegrasyonları", included: true },
        { text: "Bütün E-Ticaret Entegrasyonları", included: true },
        { text: "Bütün Kargo Entegrasyonları", included: true },
        { text: "Bütün E-Fatura Entegrasyonları", included: true },
        { text: "Bütün SMS Entegrasyonları", included: true },
        { text: "Sınırsız Şirket", included: true },
        { text: "Sınırsız Sipariş", included: true },
        { text: "Sınırsız Mesaj", included: true },
        { text: "Manuel Dijital Teslimat", included: true },
        { text: "Otomatik Dijital Teslimat", included: true },
        { text: "Ürün Ekleme: 60.000", included: true },
        { text: "Pazaryeri Ürün Ekleme: 120.000", included: true },
        { text: "Sınırsız Ürün Tedarikçi", included: true },
        { text: "Cari Hesap Takibi", included: true },
        { text: "Sınırsız Tedarikçi", included: true },
        { text: "Kasa ve Banka Hesapları", included: true },
        { text: "Mağaza Masraf Takibi", included: true },
        { text: "Depo Takibi", included: true },
        { text: "Farklı Komisyon Ve Kargo", included: true },
        { text: "Stok Takibi", included: true },
        { text: "Toplu Ürün Listeleme", included: true },
        { text: "Otomatik XML: 6 Adet", included: true },
        { text: "XML İçe Aktarma", included: true },
        { text: "XML Dışa Aktarma", included: true },
        { text: "İade ve Değişim Talepleri", included: true },
        { text: "Pazaryerine Göre Komisyon", included: true },
        { text: "Ürüne Göre Komisyon", included: true },
        { text: "Ürüne Göre Kargo Ücreti", included: true },
        { text: "Özelleştirilebilir Kargo Çıktıları", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Entegrematik hangi pazaryerleri ve sistemler ile çalışıyor?",
      answer: "Trendyol, Hepsiburada, N11, Pazarama, Çiçeksepeti, PTTAVM, Koçtaş, Turkcell Pasaj, Vodafone Yanımda, Teknosa ve Farmazon yanı sıra Shopier, WooCommerce, PrestaShop, OpenCart ve idefix gibi tüm popüler e-ticaret altyapıları ile tam uyum sağlıyoruz."
    },
    {
      question: "E-Fatura entegrasyonu ek ücretli mi?",
      answer: "Hayır, paketlerimizin içerisinde GİB, Uyumsoft, QNB eFinans, Birfatura, EDM, Trendyol/Hepsiburada/N11 E-Faturam entegrasyon altyapısı mevcuttur."
    },
    {
      question: "Mevcut verilerimi (ürün, stok) içe aktarabilir miyim?",
      answer: "Evet, Excel, CSV veya tedarikçi XML dosyalarınızı tek tıkla sisteme dahil edebilirsiniz."
    }
  ];

  // --- SCHEMA.ORG (JSON-LD) YAPISAL VERİLERİ ---
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Entegrematik",
        "operatingSystem": "All",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TRY",
          "lowPrice": "749",
          "highPrice": "2099",
          "offerCount": "4"
        },
        "description": "Pazaryeri entegrasyonu, e-fatura ve stok takip yazılımı."
      },
      {
        "@type": "Organization",
        "name": "Entegrematik Bilişim Teknolojileri",
        "url": "https://entegrematik.com",
        "logo": "https://entegrematik.com/og-image.jpg",
        "sameAs": [
          "https://x.com/entegrematik",
          "https://www.instagram.com/entegrematik/",
          "https://www.linkedin.com/company/entegrematik"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F9FAFB] font-sans overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      
      {/* Schema.org Entegrasyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(37, 99, 235, 0.4);
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.8);
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0F17]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#" 
              className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" 
              title="Entegrematik Ana Sayfa"
              aria-label="Entegrematik Ana Sayfa"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#10B981] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="font-bold text-white text-lg">E</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">Entegrematik</span>
            </a>

            <nav className="hidden md:flex items-center gap-3 lg:gap-8">
              {[
                { name: 'Özellikler', href: '#ozellikler', title: 'Entegrematik Özellikleri', isExternal: false },
                { name: 'Entegrasyonlar', href: '#entegrasyonlar', title: 'Desteklenen Entegrasyonlar', isExternal: false },
                { name: 'Fiyatlandırma', href: '#fiyatlandirma', title: 'Fiyatlandırma ve Paketler', isExternal: false },
                { name: 'Blog', href: 'https://blog.entegrematik.com', title: 'E-Ticaret ve Entegrasyon Rehberi Blogu', isExternal: true },
                { name: 'SSS', href: '#sss', title: 'Sıkça Sorulan Sorular', isExternal: false },
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  title={item.title}
                  aria-label={item.name}
                  {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors duration-200 text-xs lg:text-sm font-medium whitespace-nowrap min-h-[48px] flex items-center gap-1 group"
                >
                  {item.name}
                  {item.isExternal && (
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                      Yeni
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden md:block shrink-0">
              <a 
                href="#fiyatlandirma" 
                title="Entegrematik Ücretsiz Deneme Başlat" 
                aria-label="Ücretsiz Deneyin"
                className="min-h-[48px] px-4 py-2.5 lg:px-6 lg:py-3 text-xs lg:text-sm font-semibold whitespace-nowrap shrink-0 bg-[#2563EB] hover:bg-[#3B82F6] text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                Ücretsiz Deneyin
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="min-h-[48px] min-w-[48px] flex items-center justify-center text-[#F9FAFB] rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Menüyü Aç/Kapat"
                title="Mobil Menü"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#161C28] border-b border-white/10 p-4 shadow-2xl">
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Özellikler', href: '#ozellikler', title: 'Entegrematik Özellikleri', isExternal: false },
                { name: 'Entegrasyonlar', href: '#entegrasyonlar', title: 'Desteklenen Entegrasyonlar', isExternal: false },
                { name: 'Fiyatlandırma', href: '#fiyatlandirma', title: 'Fiyatlandırma ve Paketler', isExternal: false },
                { name: 'Blog', href: 'https://blog.entegrematik.com', title: 'E-Ticaret Blogu', isExternal: true },
                { name: 'SSS', href: '#sss', title: 'Sıkça Sorulan Sorular', isExternal: false },
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  title={item.title}
                  aria-label={item.name}
                  {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[48px] px-4 py-3 text-[#F9FAFB] hover:bg-white/5 rounded-lg transition-colors font-medium flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {item.isExternal && (
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-semibold">
                      Blog
                    </span>
                  )}
                </a>
              ))}
              <a 
                href="#fiyatlandirma" 
                title="Entegrematik Ücretsiz Deneme Başlat" 
                aria-label="Ücretsiz Deneyin"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-4 min-h-[48px] w-full bg-[#10B981] hover:bg-[#059669] text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Ücretsiz Deneyin
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#3B82F6] text-sm font-semibold mb-6">
              <span>🚀</span> Pazaryeri ve Ön Muhasebe Yönetiminde Yeni Nesil Dönem
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Pazaryerleri ve Ön Muhasebe Yönetimi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#10B981]">Tek Ekranda</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto leading-relaxed">
              Entegrematik ile ürünlerinizi tüm pazaryerlerinde ve e-ticaret sitelerinizde listeleyin, siparişlerinizi ve faturalarınızı tek tıkla yönetin.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#fiyatlandirma" 
                title="Hemen Ücretsiz Deneyin" 
                aria-label="Hemen Ücretsiz Deneyin"
                className="min-h-[56px] w-full sm:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                Hemen Ücretsiz Deneyin <Check size={20} />
              </a>
              <a 
                href="#ozellikler" 
                title="Özellikleri İncele" 
                aria-label="Özellikleri İncele"
                className="min-h-[56px] w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Özellikleri İncele <BarChart3 size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* --- KAYAN LOGO BANDI (MARQUEE) --- */}
        <section className="border-y border-white/5 bg-[#161C28]/40 backdrop-blur-sm py-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
            <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest">
              Tüm Pazaryerleri, E-Ticaret Altyapıları ve Kargo Sistemleriyle %100 Uyumlu
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-8 sm:gap-16">
              {[...integrationLogos, ...integrationLogos].map((logo, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 flex-shrink-0 cursor-default group"
                  title={`${logo.name}`}
                >
                  <div 
                    className="w-3 h-3 rounded-full transition-transform group-hover:scale-125" 
                    style={{ backgroundColor: logo.color }}
                  />
                  <span className="text-sm font-bold text-white/80 group-hover:text-white tracking-wide">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 1. BÖLÜM: ZENGİN BENTO GRID ÖZELLİKLER (32 DİJİTAL GÜÇ) --- */}
        <section id="ozellikler" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto border-b border-white/5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-bold mb-4">
              ✨ 32+ Güçlü Modül Tek Panelde
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">E-Ticaret Operasyonunuzun Tam Otomasyonu</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">Tüm pazaryerlerini, e-faturayı, kargoları ve stoku sıfır hatayla yönetin.</p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'all', label: 'Tüm Özellikler (32)' },
                { id: 'pazaryeri', label: 'Pazaryeri & Ürün' },
                { id: 'finans', label: 'Finans & E-Fatura' },
                { id: 'stok', label: 'Stok & Kargo' },
                { id: 'destek', label: 'Müşteri & Raporlama' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFeatureTab(tab.id as any)}
                  className={`min-h-[44px] px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeFeatureTab === tab.id
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20'
                      : 'bg-[#161C28] text-[#9CA3AF] hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredFeatures.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#161C28] p-6 hover:border-[#2563EB]/50 hover:bg-[#1E2640]/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-2xl group-hover:bg-[#2563EB]/15 transition-all duration-300" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#3B82F6] group-hover:scale-110 group-hover:text-[#10B981] transition-all duration-300 mb-4">
                      <IconComp size={22} />
                    </div>
                    <span className="text-base font-bold text-white mb-2 tracking-wide uppercase block">
                      {feat.title}
                    </span>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 2. BÖLÜM: SEKMELİ ENTEGRASYONLAR BÖLÜMÜ --- */}
        <section id="entegrasyonlar" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto border-b border-white/5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#3B82F6] text-xs font-bold mb-4">
              🔗 Zengin Entegrasyon Ekosistemi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Desteklenen Tüm Entegrasyonlarımız</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">Kullandığınız tüm pazaryerleri, mağaza altyapıları, kargo ve e-fatura sistemleri tek tıkla Entegrematik'e bağlanır.</p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'pazaryeri', label: '🛍️ Pazaryerleri', icon: Store },
                { id: 'eticaret', label: '🌐 E-Ticaret Siteleri', icon: Globe },
                { id: 'kargo', label: '📦 Kargo Entegrasyonları', icon: Truck },
                { id: 'efatura', label: '🧾 E-Fatura & Muhasebe', icon: InvoiceIcon },
                { id: 'sms', label: '💬 SMS & Bildirim', icon: Send }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveIntegrationTab(tab.id as any)}
                  className={`min-h-[48px] px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    activeIntegrationTab === tab.id
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20 ring-2 ring-[#3B82F6]/30'
                      : 'bg-[#161C28] text-[#9CA3AF] hover:text-white hover:bg-white/5 border border-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {integrationCategories[activeIntegrationTab].map((item, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-[#161C28] p-6 hover:border-white/20 hover:bg-[#1E2640]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-3.5 h-3.5 rounded-full shadow-md" 
                      style={{ backgroundColor: item.color }} 
                    />
                    <h3 className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#10B981] font-semibold">
                  <span>%100 Tam Uyumlu</span>
                  <Check size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. BÖLÜM: FİYATLANDIRMA SECTION --- */}
        <section id="fiyatlandirma" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto relative">
          <div className="text-center mb-16 pt-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Entegrasyon Paketlerimiz</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto mb-8">Gizli maliyet yok. İşletmenizin büyüklüğüne en uygun paketi seçin.</p>

            <div className="inline-flex items-center gap-3 bg-[#161C28] p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`min-h-[44px] px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                Aylık Ödeme
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`min-h-[44px] px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#10B981] text-white shadow-lg shadow-emerald-500/20'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                Yıllık Ödeme
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  %20 İndirim
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPlans.map((plan, index) => {
              const isExpanded = !!expandedPlans[plan.name];
              const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 12);

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 flex flex-col justify-between h-[650px] transition-all duration-300 border ${
                    plan.isPopular
                      ? 'bg-gradient-to-b from-[#1E2640] to-[#161C28] border-[#2563EB] ring-2 ring-[#2563EB]/50 shadow-2xl shadow-blue-500/20'
                      : 'bg-[#161C28] border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg z-20">
                      <Zap size={12} /> {plan.badge}
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      {!plan.isPopular && (
                        <span className="text-xs text-[#9CA3AF] bg-white/5 px-2.5 py-1 rounded-md mt-1 inline-block">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-white">
                          ₺{billingCycle === 'monthly' 
                            ? plan.monthlyPrice.toLocaleString('tr-TR') 
                            : plan.yearlyMonthlyEquivalent.toLocaleString('tr-TR')
                          }
                        </span>
                        <span className="text-[#9CA3AF] text-sm">
                          / Ay
                        </span>
                      </div>
                      
                      {billingCycle === 'yearly' ? (
                        <div className="mt-1">
                          <p className="text-xs text-[#9CA3AF] line-through decoration-red-500/70">
                            ₺{plan.monthlyPrice.toLocaleString('tr-TR')} / Ay yerine
                          </p>
                          <p className="text-xs text-[#10B981] font-medium mt-0.5">
                            Yıllık ₺{plan.yearlyTotal.toLocaleString('tr-TR')} (%20 İndirimli)
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs text-[#9CA3AF] mt-1">
                          Aylık düzenli faturalandırılır
                        </p>
                      )}
                    </div>

                    <button
                      className={`w-full min-h-[48px] py-3 rounded-xl font-bold transition-all duration-300 mb-6 flex items-center justify-center gap-2 ${
                        plan.isPopular
                          ? 'bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/20'
                          : 'bg-[#2563EB] hover:bg-[#3B82F6] text-white'
                      }`}
                    >
                      Ücretsiz Dene
                    </button>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex-1 overflow-hidden flex flex-col">
                    <p className="text-xs font-semibold text-[#F9FAFB] uppercase tracking-wider mb-3">
                      PAKET İÇERİĞİ:
                    </p>
                    <div className="flex-1 overflow-y-auto custom-scroll pr-1">
                      <ul className="space-y-2.5">
                        {visibleFeatures.map((feat, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-xs leading-tight">
                            {feat.included ? (
                              <Check size={15} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                            ) : (
                              <X size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={feat.included ? "text-[#F9FAFB]" : "text-[#9CA3AF]/60 line-through decoration-red-500/40"}>
                              {feat.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 mt-2">
                    <button
                      onClick={() => togglePlanExpand(plan.name)}
                      className="text-xs text-[#3B82F6] hover:text-[#2563EB] font-semibold flex items-center justify-center gap-1 w-full"
                    >
                      {isExpanded ? "Daha Az Göster" : `Tüm Özellikleri Gör (${plan.features.length})`}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm font-semibold text-red-400/90 tracking-wide">
              Not: Fiyatlarımıza %20 KDV Dahildir
            </p>
          </div>
        </section>

        {/* --- 4. BÖLÜM: SSS SECTION --- */}
        <section id="sss" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Sıkça Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-xl bg-[#161C28] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full min-h-[56px] flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-[#F9FAFB]">{faq.question}</span>
                  <ChevronDown size={20} className={`text-[#9CA3AF] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-[#2563EB]' : ''}`} />
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 text-[#9CA3AF] text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#07090E] border-t border-white/10 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          
          <div className="space-y-3 md:col-span-2">
            <a 
              href="#" 
              className="flex items-center gap-2 group cursor-pointer" 
              title="Entegrematik Ana Sayfa"
              aria-label="Entegrematik Ana Sayfa"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#10B981] flex items-center justify-center">
                <span className="font-bold text-white text-sm">E</span>
              </div>
              <span className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">Entegrematik</span>
            </a>
            <p className="text-sm text-gray-400">
              Pazaryerleri ve ön muhasebe süreçlerinizi tek ekrandan yönetin.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://x.com/entegrematik" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Entegrematik Resmi X (Twitter) Hesabı"
                title="Entegrematik X (Twitter)"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/entegrematik/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Entegrematik Resmi Instagram Hesabı"
                title="Entegrematik Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#E4405F] hover:bg-white/10 hover:border-[#E4405F]/50 transition-all duration-300 group"
              >
                <svg className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/company/entegrematik" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Entegrematik Resmi LinkedIn Şirket Sayfası"
                title="Entegrematik LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#0A66C2] hover:bg-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <div className="text-xs text-gray-400 space-y-1 pt-2">
              <p className="font-semibold text-gray-300">Entegrematik Bilişim Teknolojileri</p>
              <p>Dr. Gürol Başaran Sok. No:1</p>
              <p>
                E-posta:{" "}
                <a 
                  href="mailto:info@entegrematik.com" 
                  title="Entegrematik Bilişim Teknolojileri E-posta Gönder"
                  aria-label="Entegrematik Bilişim Teknolojileri E-posta Gönder"
                  className="text-[#2563EB] hover:underline"
                >
                  info@entegrematik.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 text-sm tracking-wider uppercase block">Ürün & Çözümler</span>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#ozellikler" 
                  title="Entegrematik Özellikleri" 
                  aria-label="Entegrematik Özellikleri" 
                  className="hover:text-white transition"
                >
                  Özellikler
                </a>
              </li>
              <li>
                <a 
                  href="#entegrasyonlar" 
                  title="Desteklenen Entegrasyonlar" 
                  aria-label="Desteklenen Entegrasyonlar" 
                  className="hover:text-white transition"
                >
                  Entegrasyonlar
                </a>
              </li>
              <li>
                <a 
                  href="#fiyatlandirma" 
                  title="Fiyatlandırma ve Paketler" 
                  aria-label="Fiyatlandırma ve Paketler" 
                  className="hover:text-white transition"
                >
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 text-sm tracking-wider uppercase block">Blog & Rehber</span>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://blog.entegrematik.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="E-Ticaret ve Entegrasyon Blogu" 
                  aria-label="E-Ticaret Blogu" 
                  className="hover:text-white text-blue-400 transition font-medium flex items-center gap-1"
                >
                  <span>E-Ticaret Blogu</span>
                  <span className="text-[10px] bg-blue-500/20 px-1 rounded">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://blog.entegrematik.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Pazaryeri Entegrasyon Rehberi" 
                  aria-label="Pazaryeri Rehberi" 
                  className="hover:text-white transition"
                >
                  Pazaryeri Rehberi
                </a>
              </li>
              <li>
                <a 
                  href="https://blog.entegrematik.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="E-Fatura & Ön Muhasebe İpuçları" 
                  aria-label="E-Fatura İpuçları" 
                  className="hover:text-white transition"
                >
                  E-Fatura İpuçları
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 text-sm tracking-wider uppercase block">Yasal & Destek</span>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#sss" 
                  title="Sıkça Sorulan Sorular" 
                  aria-label="Sıkça Sorulan Sorular" 
                  className="hover:text-white transition"
                >
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a 
                  href="/gizlilik" 
                  title="Gizlilik Politikası" 
                  aria-label="Gizlilik Politikası" 
                  className="hover:text-white transition"
                >
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a 
                  href="/kullanim-kosullari" 
                  title="Kullanım Koşulları" 
                  aria-label="Kullanım Koşulları" 
                  className="hover:text-white transition"
                >
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a 
                  href="/kvkk" 
                  title="KVKK Aydınlatma Metni" 
                  aria-label="KVKK Aydınlatma Metni" 
                  className="hover:text-white transition"
                >
                  KVKK Aydınlatma Metni
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Entegrematik Bilişim Teknolojileri. Tüm hakları saklıdır.</p>
          <p className="mt-2 sm:mt-0">Türkiye'nin En Kapsamlı E-Ticaret Otomasyonu</p>
        </div>
      </footer>
    </div>
  );
}