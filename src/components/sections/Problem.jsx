import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    "Administrasi menumpuk & berantakan",
    "Data tersebar di berbagai file excel",
    "Laporan tidak real-time & lambat",
    "Keputusan bisnis sering terlambat",
  ];

  return (
    /* Menggunakan bg-transparent agar mengikuti gradasi body */
    <section className="py-24 transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="relative z-10 text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Masih Mengelola Bisnis <br />
              <span className="text-red-600 underline decoration-red-200 dark:decoration-red-900/50 decoration-4 underline-offset-8">
                Secara Manual?
              </span>
            </h2>

            <div className="space-y-4 mb-8 relative z-10">
              {problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-lg shadow-blue-900/5 border border-blue-50 dark:border-slate-800 hover:border-red-200 transition-all"
                >
                  <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-full text-red-500">
                    <XCircle size={20} />
                  </div>
                  <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                    {prob}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Dekorasi Gradient khusus untuk menonjolkan card solusi */}
            <div className="absolute inset-0 bg-gradient-to-br from-fn-blue/20 to-purple-600/20 rounded-3xl blur-3xl opacity-50"></div>

            <div className="relative bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-700">
              <div className="w-14 h-14 bg-fn-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 animate-bounce-slow">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Solusi Digital Terpadu
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Kami hadir untuk mentransformasi cara Anda bekerja. Sistem yang
                kami bangun bukan sekadar alat, tapi{" "}
                <span className="text-fn-blue font-bold">
                  mesin pertumbuhan
                </span>{" "}
                untuk bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
