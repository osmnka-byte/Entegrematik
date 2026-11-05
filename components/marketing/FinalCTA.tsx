"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden p-8 sm:p-16 text-center"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-cyan/10 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-ghost mb-4 text-balance relative">
          E-Ticaret Operasyonunuzu{" "}
          <span className="gradient-text">Bugün Otomatikleştirin</span>
        </h2>
        <p className="text-silver max-w-xl mx-auto mb-8 relative">
          Kurulum gerektirmez. 14 gün ücretsiz deneyin, pazaryerlerinizi bağlayın,
          gerisini Entegrematik&apos;e bırakın.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <a href="/iletisim" className="btn-primary w-full sm:w-auto">
            Hemen Ücretsiz Deneyin
            <ArrowRight size={20} aria-hidden="true" />
          </a>
          <a href="/#sss" className="btn-secondary w-full sm:w-auto">
            Sorularınız mı Var?
          </a>
        </div>
      </motion.div>
    </section>
  );
}