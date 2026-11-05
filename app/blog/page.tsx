import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, getAuthorById } from "@/data/posts";
import { CATEGORIES } from "@/data/categories";
import { BlogCard, formatDate } from "@/components/blog/BlogCard";
import { Store, Receipt, BookOpen, Rocket, ArrowRight } from "lucide-react";
import type { CategoryIconName } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog | E-Ticaret Operasyon Rehberi",
  description:
    "Pazaryeri entegrasyonları, e-fatura, ön muhasebe ve e-ticaret SEO rehberleri. Trendyol, Hepsiburada ve N11 satışlarınızı büyütecek uzman içerikler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Entegrematik Blog | E-Ticaret Operasyon Rehberi",
    description:
      "Pazaryeri entegrasyonlarından e-faturaya, komisyon analizlerinden ürün güncellemelerine kadar uzman rehberler.",
    type: "website",
    locale: "tr_TR",
    url: "https://entegrematik.com/blog",
  },
};

const iconMap: Record<CategoryIconName, typeof Store> = {
  store: Store,
  receipt: Receipt,
  book: BookOpen,
  rocket: Rocket,
};

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.slug !== featured.slug);
  const featuredAuthor = getAuthorById(featured.authorId);

  // Kurşungeçirmez (Bulletproof) JSON-LD Schema Yapısı
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Entegrematik E-Ticaret Operasyon Rehberi",
    "description": "Pazaryeri entegrasyonları, e-fatura ve e-ticaret operasyon rehberleri.",
    "url": "https://entegrematik.com/blog",
    "blogPost": sorted.map((post) => {
      const imageUrl = post.coverImage.startsWith("http")
        ? post.coverImage
        : `https://entegrematik.com${post.coverImage.startsWith("/") ? "" : "/"}${post.coverImage}`;

      return {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "url": `https://entegrematik.com/blog/${post.categorySlug}/${post.slug}`,
        "datePublished": post.publishedAt,
        "image": imageUrl,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <div className="badge mb-4">
            <span aria-hidden="true">✍️</span>
            <span>E-Ticaret Operasyon Rehberi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-ghost mb-4 text-balance">
            E-Ticaretinizi Büyüten <span className="gradient-text">Operasyon Rehberi</span>
          </h1>
          <p className="text-silver max-w-2xl mx-auto">
            Pazaryeri entegrasyonlarından e-faturaya, komisyon analizlerinden ürün
            güncellemelerine kadar; Entegrematik uzmanlarından işletmenizi
            ölçeklendirecek güncel rehberler.
          </p>
        </div>

        {/* Kategori Çipleri */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            const count = POSTS.filter((p) => p.categorySlug === category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="min-h-[44px] px-4 py-2 rounded-bento bg-charcoal border border-slate-dark/40 text-silver hover:text-ghost hover:border-electric-cyan/40 transition-all inline-flex items-center gap-2 text-sm font-medium"
              >
                <Icon size={16} aria-hidden="true" />
                {category.name}
                <span className="text-graphite">({count})</span>
              </Link>
            );
          })}
        </div>

        {/* Öne Çıkan Yazı */}
        <Link
          href={`/blog/${featured.categorySlug}/${featured.slug}`}
          className="glass-card glass-card-hover overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 mb-14 group"
        >
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <img
              src={featured.coverImage}
              alt={featured.coverImageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-night/60 to-transparent" aria-hidden="true" />
          </div>
          <div className="p-6 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge">Öne Çıkan</span>
              <span className="text-xs text-graphite">{formatDate(featured.publishedAt)}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ghost mb-4 leading-snug group-hover:text-electric-cyan transition-colors">
              {featured.title}
            </h2>
            <p className="text-silver leading-relaxed mb-6">{featured.description}</p>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-electric-cyan to-emerald flex items-center justify-center text-xs font-bold text-white">
                {featuredAuthor.initials}
              </span>
              <div>
                <div className="text-sm font-semibold text-ghost">{featuredAuthor.name}</div>
                <div className="text-xs text-graphite">
                  {featuredAuthor.title} · {featured.readingTime} dk okuma
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Son Yazılar */}
        <h2 className="text-2xl font-bold text-ghost mb-6">Son Yazılar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 glass-card p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ghost mb-3">
            Tüm Satış Kanallarınızı Tek Panelden Yönetin
          </h2>
          <p className="text-silver max-w-xl mx-auto mb-6">
            Sipariş, stok, fatura ve kargo süreçlerinizi otomatikleştirin; siz
            büyümeye odaklanın.
          </p>
          <Link href="/#fiyatlandirma" className="btn-primary">
            14 Gün Ücretsiz Deneyin
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}