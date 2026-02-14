import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      q: "Apa itu FNCode?",
      a: "FNCode adalah perusahaan rekayasa perangkat lunak yang menyediakan solusi digital terintegrasi untuk membantu bisnis meningkatkan efisiensi operasional.",
    },
    {
      q: "Layanan apa saja yang ditawarkan?",
      a: "Kami menyediakan pengembangan software kustom, aplikasi web enterprise, integrasi sistem API, dan konsultasi transformasi digital.",
    },
    {
      q: "Berapa lama waktu pengerjaan proyek?",
      a: "Durasi bergantung pada kompleksitas. Proyek kecil memakan waktu 1-2 bulan, sementara sistem enterprise bisa 3-6 bulan.",
    },
    {
      q: "Apakah ada layanan maintenance?",
      a: "Ya, kami menyediakan dukungan teknis berkelanjutan untuk memastikan sistem tetap aman dan berjalan optimal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-24 bg-transparent transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-blue-900/20 text-fn-blue mb-4 shadow-sm">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            FAQ
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-300 border ${openIndex === idx ? "bg-white dark:bg-slate-900 border-fn-blue shadow-xl shadow-blue-900/10" : "bg-white/50 dark:bg-slate-900/50 border-blue-100 dark:border-slate-800"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span
                  className={`font-bold text-lg ${openIndex === idx ? "text-fn-blue" : "text-slate-800 dark:text-slate-200"}`}
                >
                  {faq.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="text-fn-blue" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
