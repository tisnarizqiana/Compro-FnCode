import React from "react";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Analisis",
      desc: "Memahami akar masalah dan kebutuhan bisnis.",
    },
    {
      num: "02",
      title: "Desain",
      desc: "Merancang arsitektur sistem dan UI/UX.",
    },
    {
      num: "03",
      title: "Develop",
      desc: "Penulisan kode (coding) yang presisi.",
    },
    { num: "04", title: "Testing", desc: "Uji coba menyeluruh bebas bug." },
    {
      num: "05",
      title: "Launch",
      desc: "Implementasi sistem ke lingkungan produksi.",
    },
    { num: "06", title: "Support", desc: "Pemeliharaan dan update berkala." },
  ];

  return (
    /* Menggunakan bg-transparent agar selaras dengan gradasi biru body */
    <section
      id="proses"
      className="py-24 bg-transparent transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Bagaimana Kami Bekerja
          </h2>
          <div className="w-20 h-1.5 bg-fn-blue mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Proses terstruktur untuk hasil yang presisi dan tepat waktu.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) - Dibuat sedikit lebih kontras di atas biru */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-blue-200 dark:bg-slate-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Number Circle - Dengan Glassmorphism halus */}
                <div className="w-20 h-20 rounded-2xl bg-white/80 dark:bg-slate-900 border-2 border-white dark:border-slate-800 text-slate-500 dark:text-slate-600 font-bold text-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/5 group-hover:border-fn-blue group-hover:text-fn-blue group-hover:scale-110 group-hover:shadow-blue-500/20 backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">{step.num}</span>
                  {/* Fill Effect saat hover */}
                  <div className="absolute inset-0 bg-fn-blue/5 dark:bg-fn-blue/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-fn-blue transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug px-2 font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
