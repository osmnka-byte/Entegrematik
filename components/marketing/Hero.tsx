"use client";

import { motion } from "framer-motion";
import { Check, BarChart3, ShieldCheck, ShoppingCart, Building2, Store } from "lucide-react";

const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95];

// Orijinal dashboard verileri
const donutData = [
  { label: "N11", value: 25, color: "#FF6B35" },
  { label: "Trendyol", value: 35, color: "#EA580C" },
  { label: "Hepsiburada", value: 15, color: "#00D9FF" },
  { label: "Çiçeksepeti", value: 25, color: "#0A0E27" },
];

function DonutChart() {
  const circumference = 2 * Math.PI * 40;
  let currentOffset = 0;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
      {donutData.map((item, i) => {
        const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;
        const element = (
          <circle
            key={i}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={item.color}
            strokeWidth="20"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={currentOffset}
          />
        );
        currentOffset -= (item.value / 100) * circumference;
        return element;
      })}
    </svg>
  );
}

function DonutLegend() {
  return (
    <div className="flex-1 space-y-2">
      {donutData.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
          <span className="text-silver">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-28 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px] -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="badge mb-6">
          <span aria-hidden="true">🚀</span>
          <span>Pazaryeri ve Ön Muhasebe Yönetiminde Yeni Nesil Dönem</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ghost mb-6 leading-tight text-balance">
          Pazaryerleri ve Ön Muhasebe Yönetimi{" "}
          <span className="gradient-text">Tek Ekranda</span>
        </h1>

        <p className="text-lg sm:text-xl text-silver mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Entegrematik ile ürünlerinizi tüm pazaryerlerinde ve e-ticaret
          sitelerinizde listeleyin, siparişlerinizi ve faturalarınızı tek tıkla
          yönetin.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="/#fiyatlandirma" className="btn-primary w-full sm:w-auto">
            Hemen Ücretsiz Deneyin
            <Check size={20} aria-hidden="true" />
          </a>
          <a href="/#ozellikler" className="btn-secondary w-full sm:w-auto">
            Özellikleri İncele
            <BarChart3 size={20} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      {/* Dashboard Mockup 1 — Ciro + Sipariş + Entegrasyonlar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-5xl mx-auto mb-4"
      >
        <div className="glass-card p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-xs text-silver font-mono">
              app.entegrematik.com/dashboard
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ciro kartı — vurgulu */}
            <div className="glass-card p-6 border-electric-cyan/30">
              <div className="text-silver text-sm mb-1">Günlük Ciro</div>
              <div className="text-3xl font-bold text-ghost">₺142.500</div>
              <div className="text-emerald text-sm mt-2">
                ↑ %12,5 <span className="text-silver">geçen haftaya göre</span>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="text-silver text-sm mb-1">Bekleyen Sipariş</div>
              <div className="text-3xl font-bold text-ghost">84</div>
              <div className="text-electric-cyan text-sm mt-2">
                12 yeni <span className="text-silver">son 1 saatte</span>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center mb-3 text-emerald">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div className="text-ghost font-semibold">Tüm Entegrasyonlar Aktif</div>
              <div className="text-silver text-xs mt-1">Son senkronizasyon: az önce</div>
            </div>

            {/* Chart */}
            <div className="md:col-span-3 glass-card p-6 h-48 flex items-end justify-between gap-2">
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-sm transition-colors duration-300 ${
                    i === chartBars.length - 1
                      ? "bg-emerald/70 hover:bg-emerald"
                      : "bg-electric-cyan/30 hover:bg-electric-cyan/60"
                  }`}
                  style={{ height: `${h}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-4 bg-gradient-to-r from-electric-cyan to-emerald rounded-3xl blur-3xl opacity-15 -z-10"
          aria-hidden="true"
        />
      </motion.div>

      {/* Dashboard Mockup 2 — Orijinal Dashboard (Uyarlanmış) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="glass-card p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center text-xs text-silver font-mono">
              app.entegrematik.com/operations
            </div>
          </div>

          {/* 3 Stat Kartı */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="glass-card p-6 bg-emerald/10 border-emerald/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-ghost">2 Adet</div>
                <ShoppingCart size={32} className="text-emerald" aria-hidden="true" />
              </div>
              <div className="text-silver text-sm">Yeni Siparişiniz Var</div>
              <div className="mt-3 flex gap-2">
                <button className="text-xs px-3 py-1.5 rounded-md bg-emerald/20 text-emerald hover:bg-emerald/30 transition-colors">
                  Yeni Siparişleri Kontrol Et
                </button>
                <button className="text-xs px-3 py-1.5 rounded-md bg-charcoal text-silver hover:bg-slate-dark transition-colors">
                  Sipariş Listesi
                </button>
              </div>
            </div>

            <div className="glass-card p-6 bg-electric-cyan/10 border-electric-cyan/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-ghost">1 Adet</div>
                <Building2 size={32} className="text-electric-cyan" aria-hidden="true" />
              </div>
              <div className="text-silver text-sm">Kayıtlı Şirketiniz</div>
              <button className="mt-3 text-xs px-3 py-1.5 rounded-md bg-charcoal text-silver hover:bg-slate-dark transition-colors">
                Şirketleri Gör
              </button>
            </div>

            <div className="glass-card p-6 bg-coral/10 border-coral/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-ghost">6 Adet</div>
                <Store size={32} className="text-coral" aria-hidden="true" />
              </div>
              <div className="text-silver text-sm">Kayıtlı Pazaryerleri</div>
              <button className="mt-3 text-xs px-3 py-1.5 rounded-md bg-charcoal text-silver hover:bg-slate-dark transition-colors">
                Pazaryerlerini Gör
              </button>
            </div>
          </div>

          {/* 2 Donut Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Adet Bazında */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-ghost">Genel Sipariş Durumu (Adet Bazında)</h3>
                <div className="flex gap-2">
                  <button className="text-silver hover:text-ghost" aria-label="Bilgi">
                    ℹ
                  </button>
                  <button className="text-silver hover:text-ghost" aria-label="Küçült">
                    −
                  </button>
                  <button className="text-silver hover:text-ghost" aria-label="Kapat">
                    ×
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-32">
                  <DonutChart />
                </div>
                <DonutLegend />
              </div>
            </div>

            {/* Tutar Bazında */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-ghost">Genel Sipariş Durumu (Tutar Bazında TL)</h3>
                <div className="flex gap-2">
                  <button className="text-silver hover:text-ghost" aria-label="Bilgi">
                    ℹ
                  </button>
                  <button className="text-silver hover:text-ghost" aria-label="Küçült">
                    −
                  </button>
                  <button className="text-silver hover:text-ghost" aria-label="Kapat">
                    ×
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-32">
                  <DonutChart />
                </div>
                <DonutLegend />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute -inset-4 bg-gradient-to-r from-emerald to-coral rounded-3xl blur-3xl opacity-10 -z-10"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}