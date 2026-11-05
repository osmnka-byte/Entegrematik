"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types/blog";

export function PostFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-ghost mb-6">Sıkça Sorulan Sorular</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full min-h-[56px] flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan/50 rounded-card"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-ghost pr-4 text-sm sm:text-base">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-electric-cyan" : "text-silver"
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-silver leading-relaxed text-sm sm:text-base">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}