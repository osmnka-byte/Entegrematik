import Link from "next/link";
import { ChevronRight, Scale, Mail } from "lucide-react";

const legalProse = [
  "[&_p]:text-silver [&_p]:leading-relaxed [&_p]:mb-4",
  "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ghost [&_h2]:mt-8 [&_h2]:mb-3",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:leading-relaxed",
  "[&_li]:text-silver",
  "[&_strong]:text-ghost [&_strong]:font-semibold",
  "[&_a]:text-electric-cyan [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-cyan-glow",
].join(" ");

type RelatedLink = { name: string; href: string };

export function LegalLayout({
  title,
  updated,
  children,
  related,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
  related: RelatedLink[];
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-graphite">
          <li>
            <Link href="/" className="hover:text-electric-cyan transition-colors">
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li>
            <span className="text-silver">Yasal</span>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} />
          </li>
          <li className="text-silver truncate max-w-[220px]">{title}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20 mb-4">
          <Scale size={14} aria-hidden="true" />
          Yasal Metin
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ghost mb-3 text-balance">{title}</h1>
        <p className="text-graphite text-sm">{updated} | Entegrematik Bilişim Teknolojileri</p>
      </div>

      <div className="glass-card p-6 sm:p-10">
        <div className={legalProse}>{children}</div>
      </div>

      {/* Çapraz linkler + iletişim */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="glass-card glass-card-hover p-5 text-sm font-semibold text-silver hover:text-electric-cyan transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="mt-6 glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-silver">
        <Mail size={16} className="text-electric-cyan shrink-0" aria-hidden="true" />
        <span>
          Sorularınız için:{" "}
          <a href="mailto:info@entegrematik.com" className="text-electric-cyan hover:text-cyan-glow transition-colors">
            info@entegrematik.com
          </a>
        </span>
      </div>
    </div>
  );
}