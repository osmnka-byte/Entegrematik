import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getAuthorById } from "@/data/posts";
import { getCategoryBySlug } from "@/data/categories";
import { BlogCard, accentClasses, formatDate } from "@/components/blog/BlogCard";
import { PostFaq } from "@/components/blog/PostFaq";
import { ChevronRight, Clock, Calendar, ArrowRight } from "lucide-react";

/* Lucide'dan kaldırılan marka ikonu yerine inline SVG */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function generateStaticParams() {
  return POSTS.map((post) => ({
    category: post.categorySlug,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = POSTS.find((p) => p.slug === slug && p.categorySlug === category);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
      url: `https://entegrematik.com/blog/${post.categorySlug}/${post.slug}`,
      images: [{ url: post.coverImage, width: 1600, height: 900, alt: post.coverImageAlt }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

/* İçerikten İçindekiler tablosu çıkar (H2 başlıkları) */
function extractToc(html: string): { id: string; text: string }[] {
  const regex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
  const toc: { id: string; text: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    toc.push({ id: match[1], text: match[2] });
  }
  return toc;
}

/* Makale tipografisi — Tailwind v4 arbitrary variants */
const proseClasses = [
  "[&_p]:text-silver [&_p]:leading-relaxed [&_p]:mb-5",
  "[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ghost [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:scroll-mt-28",
  "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ghost [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:scroll-mt-28",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul]:space-y-2 [&_ul]:text-silver [&_ul]:leading-relaxed",
  "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol]:space-y-2 [&_ol]:text-silver [&_ol]:leading-relaxed",
  "[&_strong]:text-ghost [&_strong]:font-semibold",
  "[&_em]:text-silver",
  "[&_a]:text-electric-cyan [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-cyan-glow",
  "[&_blockquote]:border-l-4 [&_blockquote]:border-electric-cyan/50 [&_blockquote]:bg-charcoal/40 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:rounded-r-bento [&_blockquote]:my-6 [&_blockquote]:text-silver [&_blockquote]:italic",
  "[&_blockquote_p]:mb-0",
  "[&_table]:block [&_table]:overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:text-sm",
  "[&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:bg-charcoal [&_th]:text-ghost [&_th]:font-semibold [&_th]:border [&_th]:border-slate-dark/40 [&_th]:whitespace-nowrap",
  "[&_td]:px-4 [&_td]:py-3 [&_td]:text-silver [&_td]:border [&_td]:border-slate-dark/40",
].join(" ");

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = POSTS.find((p) => p.slug === slug && p.categorySlug === category);
  if (!post) notFound();

  const category_ = getCategoryBySlug(post.categorySlug)!;
  const author = getAuthorById(post.authorId);
  const toc = extractToc(post.content);

  const related = POSTS.filter(
    (p) => p.categorySlug === post.categorySlug && p.slug !== post.slug
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.coverImage,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: { "@type": "Person", name: author.name, jobTitle: author.title },
        publisher: {
          "@type": "Organization",
          name: "Entegrematik",
          url: "https://entegrematik.com",
        },
        mainEntityOfPage: `https://entegrematik.com/blog/${post.categorySlug}/${post.slug}`,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-graphite">
            <li>
              <Link href="/blog" className="hover:text-electric-cyan transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link
                href={`/blog/${category_.slug}`}
                className="hover:text-electric-cyan transition-colors"
              >
                {category_.name}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="text-silver truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        {/* Başlık */}
        <header className="mb-8">
          <Link
            href={`/blog/${category_.slug}`}
            className={`inline-flex px-3 py-1.5 rounded-full text-xs font-bold border mb-4 ${accentClasses[category_.accent]}`}
          >
            {category_.name}
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ghost leading-tight mb-5 text-balance">
            {post.title}
          </h1>
          <p className="text-silver text-lg leading-relaxed mb-6">{post.description}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-graphite">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} aria-hidden="true" />
              {post.readingTime} dk okuma
            </span>
          </div>
        </header>

        {/* Kapak */}
        <div className="rounded-card overflow-hidden mb-10 border border-slate-dark/30">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full aspect-video object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
          {/* Makale */}
          <div
            className={`text-base ${proseClasses}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* İçindekiler (sticky sidebar) */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 glass-card p-5">
                <h2 className="text-xs font-bold text-ghost uppercase tracking-wider mb-4">
                  İçindekiler
                </h2>
                <ul className="space-y-2.5">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-silver hover:text-electric-cyan transition-colors leading-snug block"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>

        {/* Etiketler */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-dark/20">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-charcoal border border-slate-dark/40 text-xs text-silver"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Yazar Kartı */}
        <div className="glass-card p-6 sm:p-8 mt-10 flex flex-col sm:flex-row gap-5 items-start">
          <span className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-cyan to-emerald flex items-center justify-center text-lg font-bold text-white shrink-0">
            {author.initials}
          </span>
          <div className="flex-1">
            <div className="text-xs text-graphite uppercase tracking-wider mb-1">Yazar</div>
            <div className="font-bold text-ghost text-lg">{author.name}</div>
            <div className="text-electric-cyan text-sm mb-2">{author.title}</div>
            <p className="text-silver text-sm leading-relaxed">{author.bio}</p>
            {author.social.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm text-silver hover:text-electric-cyan transition-colors"
              >
                <LinkedInIcon />
                LinkedIn Profili
              </a>
            )}
          </div>
        </div>

        {/* SSS */}
        <PostFaq faqs={post.faqs} />

        {/* CTA */}
        <div className="glass-card p-8 sm:p-10 mt-12 text-center border-electric-cyan/30">
          <h2 className="text-2xl font-bold text-ghost mb-3">
            Bu Süreçleri Otomatikleştirmeye Bugün Başlayın
          </h2>
          <p className="text-silver max-w-lg mx-auto mb-6">
            Rehberde anlattığımız tüm operasyonları Entegrematik ile tek panelden yönetin.
          </p>
          <a href="/#fiyatlandirma" className="btn-primary">
            14 Gün Ücretsiz Deneyin
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </article>

      {/* İlgili Yazılar */}
      {related.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-ghost mb-6">İlgili Yazılar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}