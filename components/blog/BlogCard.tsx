import Link from "next/link";
import type { Post } from "@/types/blog";
import { getCategoryBySlug } from "@/data/categories";
import { getAuthorById } from "@/data/posts";
import type { AccentName } from "@/types/blog";

export const accentClasses: Record<AccentName, string> = {
  blue: "bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20",
  emerald: "bg-emerald/10 text-emerald border-emerald/20",
  amber: "bg-coral/10 text-coral border-coral/20",
  violet: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/20",
};

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function BlogCard({ post }: { post: Post }) {
  const category = getCategoryBySlug(post.categorySlug);
  const author = getAuthorById(post.authorId);

  return (
    <Link
      href={`/blog/${post.categorySlug}/${post.slug}`}
      className="glass-card glass-card-hover overflow-hidden flex flex-col group"
    >
      {/* Kapak */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-night/80 to-transparent" aria-hidden="true" />
        {category && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md ${accentClasses[category.accent]}`}
          >
            {category.shortName}
          </span>
        )}
      </div>

      {/* İçerik */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-ghost leading-snug mb-2 group-hover:text-electric-cyan transition-colors">
          {post.title}
        </h3>
        <p className="text-silver text-sm leading-relaxed mb-4 flex-1">{post.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-dark/30">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-electric-cyan to-emerald flex items-center justify-center text-[10px] font-bold text-white">
              {author.initials}
            </span>
            <span className="text-xs text-silver">{author.name}</span>
          </div>
          <div className="text-xs text-graphite">
            {formatDate(post.publishedAt)} · {post.readingTime} dk
          </div>
        </div>
      </div>
    </Link>
  );
}