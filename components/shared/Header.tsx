"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

const navLinks: NavLink[] = [
  { name: "Özellikler", href: "/#ozellikler" },
  { name: "Entegrasyonlar", href: "/#entegrasyonlar" },
  { name: "Fiyatlandırma", href: "/#fiyatlandirma" },
  { name: "Blog", href: "/blog" },
  { name: "SSS", href: "/#sss" },
  { name: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-deep-night/80 border-b border-slate-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" prefetch={false}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan to-emerald flex items-center justify-center shadow-glow-cyan group-hover:scale-110 transition-transform">
              <span className="font-bold text-white text-xl">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-ghost whitespace-nowrap">
              Entegrematik
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-7" aria-label="Ana menü">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-silver hover:text-ghost transition-colors duration-200 text-sm font-medium min-h-[48px] flex items-center whitespace-nowrap"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  className="text-silver hover:text-ghost transition-colors duration-200 text-sm font-medium min-h-[48px] flex items-center whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block shrink-0">
            <Link href="/iletisim" className="btn-primary text-sm lg:text-base" prefetch={false}>
              Ücretsiz Deneyin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-h-[48px] min-w-[48px] flex items-center justify-center text-ghost rounded-lg hover:bg-charcoal/60 transition-colors"
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-charcoal border-b border-slate-dark/20 p-4 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-2" aria-label="Mobil menü">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[48px] px-4 py-3 text-ghost hover:bg-slate-dark/30 rounded-lg transition-colors font-medium flex items-center"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[48px] px-4 py-3 text-ghost hover:bg-slate-dark/30 rounded-lg transition-colors font-medium flex items-center"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/iletisim"
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 btn-primary w-full"
            >
              Ücretsiz Deneyin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}