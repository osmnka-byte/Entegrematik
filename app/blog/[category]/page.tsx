import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/data/posts";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { BlogCard, accentClasses } from "@/components/blog/BlogCard";
import { Store, Receipt, BookOpen, Rocket, ChevronRight } from "lucide-react";
import type { CategoryIconName } from "@/types/blog";

const iconMap: Record<CategoryIconName, typeof Store> = {
  store: Store,
  receipt: Receipt,
  book: BookOpen,
  rocket: Rocket,
};

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat.name} | Entegrematik Blog`,
    description: cat.description,
    alternates: {
      canonical: `/blog/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.name} | Entegrematik Blog`,
      description: cat.description,
      type: "website",
      locale: "tr_TR",
      url: `https://entegrematik.com/blog/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = POSTS.filter((p) => p.categorySlug === cat.slug).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const Icon = iconMap[cat.icon];

  // Breadcrumb ve CollectionPage JSON-LD Yapısal Verisi
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://entegrematik.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://entegrematik.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": cat.name,
            "item": `https://entegrematik.com/blog/${cat.slug}`
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": `${cat.name} Rehberleri`,
        "description": cat.description,
        "url": `https://entegrematik.com/blog/${cat.slug}`,
        "hasPart": posts.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "url": `https://entegrematik.com/blog/${cat.slug}/${post.slug}`
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-graphite">
            <li>
              <Link href="/blog" className="hover:text-electric-cyan transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="text-silver">{cat.name}</li>
          </ol>
        </nav>

        {/* Kategori Başlığı */}
        <div className="mb-12">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border mb-4 ${accentClasses[cat.accent]}`}
          >
            <Icon size={14} aria-hidden="true" />
            {cat.name}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ghost mb-4">{cat.name}</h1>
          <p className="text-silver max-w-2xl leading-relaxed">{cat.description}</p>
          <p className="text-graphite text-sm mt-3">{posts.length} yazı</p>
        </div>

        {/* Yazılar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Diğer Kategoriler */}
        <div className="mt-16 pt-10 border-t border-slate-dark/20">
          <h2 className="text-lg font-bold text-ghost mb-5">Diğer Kategoriler</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/blog/${c.slug}`}
                className="min-h-[44px] px-4 py-2 rounded-bento bg-charcoal border border-slate-dark/40 text-silver hover:text-ghost hover:border-electric-cyan/40 transition-all inline-flex items-center text-sm font-medium"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}