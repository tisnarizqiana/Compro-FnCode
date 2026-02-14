import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "FNCode membantu kami menyederhanakan sistem internal secara signifikan. Efisiensi tim meningkat 200%.",
      name: "Budi Santoso",
      role: "CEO, TechLogistics",
      initial: "B",
    },
    {
      quote:
        "Pendekatan profesional dan terstruktur membuat proyek berjalan tepat waktu tanpa bug berarti.",
      name: "Siti Rahma",
      role: "Manager Operasional, RetailIndo",
      initial: "S",
    },
  ];

  return (
    /* Menghapus bg-slate-50 agar menyatu dengan gradasi biru body */
    <section
      id="testimonials"
      className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Decor halus */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007BFF_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05] dark:opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Kepercayaan Klien Adalah Prioritas
          </h2>
          <div className="w-20 h-1.5 bg-fn-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-blue-50 dark:border-slate-800 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 relative group"
            >
              {/* Quote Icon dengan aksen biru tajam */}
              <div className="absolute -top-4 -right-4 bg-fn-blue text-white p-3 rounded-xl shadow-lg shadow-blue-500/30 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Quote size={20} fill="currentColor" />
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 italic leading-relaxed mb-8">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-blue-50 dark:border-slate-800">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-fn-blue font-bold text-xl border border-blue-100 dark:border-slate-700 shadow-sm">
                  {item.initial}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
