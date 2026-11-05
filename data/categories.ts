import type { Category } from '@/types/blog';

export const CATEGORIES: Category[] = [
  {
    slug: 'pazaryeri-entegrasyonlari',
    name: 'Pazaryeri Entegrasyonları',
    shortName: 'Pazaryeri',
    description:
      'Trendyol, Hepsiburada, N11 ve Amazon TR entegrasyonları; stok, sipariş ve kargo süreçlerini otomatikleştiren adım adım teknik rehberler.',
    icon: 'store',
    accent: 'blue',
  },
  {
    slug: 'e-fatura-on-muhasebe',
    name: 'E-Fatura & Ön Muhasebe',
    shortName: 'E-Fatura',
    description:
      'E-fatura, e-arşiv ve ön muhasebe süreçlerinde mevzuata tam uyum; cezalardan koruyan pratik rehberler ve otomasyon ipuçları.',
    icon: 'receipt',
    accent: 'emerald',
  },
  {
    slug: 'e-ticaret-rehberi-seo',
    name: 'E-Ticaret Rehberi & SEO',
    shortName: 'Rehber & SEO',
    description:
      'E-ticaret operasyonlarınızı ölçeklendirecek stratejik rehberler, komisyon analizleri ve SEO optimizasyon taktikleri.',
    icon: 'book',
    accent: 'amber',
  },
  {
    slug: 'urun-guncellemeleri',
    name: 'Ürün Güncellemeleri',
    shortName: 'Güncellemeler',
    description:
      'Entegrematik platformundaki yeni özellikler, performans iyileştirmeleri ve yol haritası duyuruları.',
    icon: 'rocket',
    accent: 'violet',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}