"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Entegrasyon sisteminizi test etmek veya denemek mümkün müdür?",
    answer:
      "Evet, sistemimizi herhangi bir taahhütte bulunmaksızın deneyimleyebilirsiniz. Ücretsiz üyelik oluşturarak tüm özellikleri 15 gün boyunca hiçbir ücret ödemeden test edebilirsiniz.",
  },
  {
    question: "Bütün pazaryeri entegrasyonlarını paketleriniz dahilinde kullanabilir miyim?",
    answer:
      "Evet, tüm pazaryeri entegrasyonlarımızdan, seçtiğiniz paketten bağımsız olarak ek bir ücret ödemeksizin eksiksiz bir şekilde yararlanabilirsiniz.",
  },
  {
    question: "E-ihracat entegrasyonlarını tüm paketlerinizde kullanabilir miyim?",
    answer:
      "Evet, e-ihracat entegrasyonlarımızın tamamından, tercih ettiğiniz paketten bağımsız olarak ek bir ücret ödemeksizin eksiksiz bir şekilde yararlanabilirsiniz.",
  },
  {
    question: "E-fatura entegrasyonlarının tamamını paketleriniz dahilinde kullanabilir miyim?",
    answer:
      "Evet, e-fatura entegrasyonlarımızın tamamından, tercih ettiğiniz paketten bağımsız olarak ek bir ücret ödemeksizin eksiksiz bir şekilde yararlanabilirsiniz.",
  },
  {
    question: "Sipariş bağımlılığı olmaksızın manuel olarak fatura düzenleyebilir miyim?",
    answer:
      "Evet, cari hesap işlemleri üzerinden satış faturası oluşturma modülünü kullanarak yasal (resmi) faturalarınızı manuel olarak kesebilirsiniz.",
  },
  {
    question: "Dijital ürünler için alternatif teslimat yöntemleri uygulayabilir miyim?",
    answer:
      "Evet, entegrasyon altyapımız üzerinden izin veren pazaryerleri için dijital ürün teslimatı gerçekleştirebilirsiniz.",
  },
  {
    question: "XML formatı üzerinden ürün ekleme işlemi gerçekleştirebilir miyim?",
    answer:
      "Evet, bu özelliğin desteklendiği paketlerimizde, XML altyapısı üzerinden ürün eklemesi yapabilirsiniz.",
  },
  {
    question: "XML entegrasyonu ile ürünler otomatik olarak güncellenmekte midir?",
    answer:
      "Evet, bu özelliğin desteklendiği paketlerimizde, XML kaynaklı ürün güncellemeleri otomatik olarak gerçekleştirilmekte ve entegre olduğunuz pazaryerlerine eş zamanlı olarak yansıtılmaktadır.",
  },
  {
    question: "Tüm pazaryerlerinden gelen siparişler için e-fatura düzenleyebilir miyim?",
    answer:
      "Evet, e-fatura ayarlarınızı yapılandırdıktan sonra tüm pazaryerlerinden gelen siparişleriniz için yasal faturalarınızı kesebilirsiniz.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // SEO için FAQPage Schema (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="sss" className="px-4 sm:px-6 lg:px-8 py-24 max-w-3xl mx-auto">
      {/* SEO Schema: Google botları bu yapıyı okuyarak arama sonuçlarında soruları doğrudan gösterir */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className="text-3xl sm:text-4xl font-bold text-ghost text-center mb-12">
        Sıkça Sorulan Sorular
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div
              key={faq.question}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                isOpen ? "border-electric-cyan/30" : "border-slate-dark/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full min-h-[56px] flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan/50 rounded-card"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-ghost pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-electric-cyan" : "text-silver"
                  }`}
                  aria-hidden="true"
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 text-silver leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}