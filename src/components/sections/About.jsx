import React from "react";
import { Layers, Calendar, Users } from "lucide-react";

const About = () => {
  return (
    <section
      id="tentang"
      className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background Grid tipis agar tidak kosong */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-40 dark:opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-blue-900/20 text-fn-blue mb-8 shadow-xl shadow-blue-900/5 animate-float border border-blue-50 dark:border-blue-800">
          <Layers size={32} />
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
          Small Key,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fn-blue to-indigo-600">
            Big Function
          </span>
        </h2>

        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
          <p>
            Didirikan pada{" "}
            <span className="font-semibold text-fn-blue bg-blue-50 dark:bg-blue-900/50 px-3 py-1 rounded-lg">
              13 Februari 2026
            </span>
            , FNCode adalah mitra teknologi strategis yang berfokus pada
            rekayasa perangkat lunak presisi.
          </p>
          <p>
            Kami percaya setiap bisnis memiliki{" "}
            <span className="italic font-medium text-slate-800 dark:text-white">
              "fungsi tersembunyi"
            </span>{" "}
            yang dapat diaktifkan melalui teknologi yang tepat. Misi kami adalah
            membuka potensi tersebut untuk pertumbuhan Anda.
          </p>
        </div>

        {/* Stats Cards dengan background putih agar "Pop" di atas gradasi biru */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-8 bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 hover:border-fn-blue transition-all group">
            <Calendar className="w-10 h-10 text-blue-200 group-hover:text-fn-blue mb-4 mx-auto transition-colors" />
            <h4 className="font-bold text-slate-900 dark:text-white text-xl">
              Future Ready
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Menggunakan standar teknologi terkini & scalable.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-blue-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 hover:border-fn-blue transition-all group">
            <Users className="w-10 h-10 text-blue-200 group-hover:text-fn-blue mb-4 mx-auto transition-colors" />
            <h4 className="font-bold text-slate-900 dark:text-white text-xl">
              Client Focus
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Mitra jangka panjang yang berorientasi pada dampak bisnis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
