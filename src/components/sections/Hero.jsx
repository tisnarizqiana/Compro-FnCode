import React from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[mask-image:linear-gradient(to_bottom,black,transparent)] -z-20" />

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-400/30 dark:bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* KIRI: Text Content */}
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-fn-blue dark:text-blue-400 text-sm font-semibold mb-6 animate-[fadeIn_1s_ease-out]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fn-blue"></span>
              </span>
              Small Key, Big Function
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
              Aktifkan Potensi <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-fn-blue via-blue-600 to-indigo-600 pb-2">
                Tersembunyi Bisnis.
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              Ubah proses yang rumit menjadi sistem digital yang{" "}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-fn-blue/30 decoration-2">
                sederhana
              </span>
              ,{" "}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-fn-blue/30 decoration-2">
                presisi
              </span>
              , dan berdampak nyata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* TOMBOL 1: KONSULTASI (Link ke Kontak/Footer) */}
              <a
                href="https://wa.me/6281214111439"
                target="_blank"
                className="group bg-fn-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
              >
                Konsultasi Gratis
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* TOMBOL 2: DEMO (Link ke Portofolio) */}
              <a
                href="#portofolio"
                className="group border-2 border-white dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-bold text-lg hover:border-fn-blue hover:text-fn-blue bg-white/40 dark:bg-slate-800/50 backdrop-blur-sm transition-all flex items-center justify-center gap-3 shadow-sm cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/80 dark:bg-slate-700 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Play size={14} fill="currentColor" />
                </div>
                Lihat Demo
              </a>
            </div>
          </div>

          {/* KANAN: Visual Cards */}
          <div className="relative hidden lg:block h-[500px] w-full">
            {/* Card Utama */}
            <div className="absolute top-10 right-10 w-80 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-white dark:border-slate-700 animate-float z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-fn-blue font-bold">
                  FN
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-slate-100 dark:bg-slate-700 rounded">
                    Code
                  </div>
                  <div className="h-2 w-16 bg-slate-50 dark:bg-slate-800 rounded"></div>
                </div>
              </div>
              <div className="h-20 w-full bg-blue-50/50 dark:bg-slate-900/50 rounded-lg border border-dashed border-blue-100 dark:border-slate-700"></div>
            </div>

            {/* Card Efficiency */}
            <div
              className="absolute bottom-20 left-10 w-72 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/50 dark:border-slate-700 z-30"
              style={{ animation: "float 7s ease-in-out infinite 1s" }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-slate-800 dark:text-white">
                  Efficiency
                </span>
                <span className="text-fn-blue text-sm font-bold">+128%</span>
              </div>
              <div className="w-full bg-slate-200/50 dark:bg-slate-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-fn-blue to-indigo-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
