const partners = [
  { name: "Trendyol", color: "bg-orange-400" },
  { name: "Hepsiburada", color: "bg-orange-600" },
  { name: "N11", color: "bg-red-500" },
  { name: "Amazon", color: "bg-yellow-500" },
  { name: "Pazarama", color: "bg-blue-600" },
  { name: "Çiçeksepeti", color: "bg-cyan-500" },
  { name: "WooCommerce", color: "bg-purple-500" },
  { name: "OpenCart", color: "bg-blue-400" },
  { name: "PrestaShop", color: "bg-pink-500" },
  { name: "Ticimax", color: "bg-green-500" },
  { name: "IdeaSoft", color: "bg-indigo-500" },
  { name: "T-Soft", color: "bg-teal-500" },
];

export function LogoBar() {
  return (
    <section id="uyumluluk" className="px-4 sm:px-6 lg:px-8 py-16 border-y border-slate-dark/20 bg-charcoal/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs sm:text-sm font-semibold tracking-wider text-silver uppercase mb-8">
          Tüm pazaryerleri, e-ticaret altyapıları ve kargo sistemleriyle %100 uyumlu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-bento bg-charcoal border border-slate-dark/30 min-h-[44px] hover:border-electric-cyan/40 transition-colors"
            >
              <span className={`w-2.5 h-2.5 rounded-full ${partner.color}`} aria-hidden="true" />
              <span className="text-sm font-medium text-ghost">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}