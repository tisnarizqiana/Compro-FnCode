import React from "react";
import { CheckCircle, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Analisis Bisnis Mendalam",
      desc: "Kami tidak asal coding. Kami pelajari alur bisnis Anda dulu.",
    },
    {
      title: "Rekayasa Presisi",
      desc: "Kode bersih, terstruktur, dan mudah dikembangkan (scalable).",
    },
    {
      title: "User Experience (UX) Prioritas",
      desc: "Sistem canggih percuma jika sulit digunakan. Kami buat simpel.",
    },
    {
      title: "Keamanan Standar Industri",
      desc: "Data Anda aset berharga. Kami melindunginya dengan enkripsi.",
    },
    {
      title: "Mitra Jangka Panjang",
      desc: "Kami tidak lari setelah proyek selesai. Support terus berjalan.",
    },
  ];

  return (
    /* Menggunakan bg-transparent agar gradasi biru dari body terlihat jelas */
    <section
      id="features"
      className="py-24 bg-transparent transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8">
              Mengapa Memilih <span className="text-fn-blue">FNCode?</span>
            </h2>
            <div className="space-y-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle
                      className="text-fn-blue group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-fn-blue transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-100/50 dark:bg-blue-900/10 rounded-xl border-l-4 border-fn-blue backdrop-blur-sm">
              <p className="text-fn-blue dark:text-blue-300 font-semibold text-lg italic">
                "Kami membangun sistem yang bekerja untuk Anda, bukan membebani
                Anda."
              </p>
            </div>
          </div>

          {/* RIGHT: Abstract Visual Representation (Kembali ke Layout Dinamis Asli) */}
          <div className="order-1 lg:order-2 relative">
            {/* Background Blob untuk memperkuat nuansa gradasi biru */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>

            {/* Glassmorphism Card Stack dengan Efek Translate Asli */}
            <div className="relative z-10 grid gap-6">
              {/* Card 1: Performance */}
              <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-50 dark:border-slate-800 transform translate-x-8 hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      System Speed
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      0.2s Latency
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[95%] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                </div>
              </div>

              {/* Card 2: Security */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl shadow-blue-900/10 border border-blue-50 dark:border-slate-800 transform -translate-x-4 hover:translate-x-0 transition-transform duration-500 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-fn-blue">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Security Level
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Enterprise Grade
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-1.5 w-full bg-fn-blue rounded-full shadow-[0_0_5px_rgba(0,123,255,0.4)]"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Card 3: Growth */}
              <div className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-50 dark:border-slate-800 transform translate-x-4 hover:translate-x-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                      Scalability
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Unlimited Users
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
