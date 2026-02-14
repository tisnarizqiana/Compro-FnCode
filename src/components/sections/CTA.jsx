import React from "react";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    /* Menggunakan bg-transparent agar mengikuti gradasi body */
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card CTA dengan gradasi biru yang dalam (Deep Blue) */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-fn-blue to-blue-800 px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-blue-500/40">
          {/* Aksen visual (bulatan cahaya) di dalam card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Siap Mengaktifkan <br /> Potensi Bisnis Anda?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Jangan biarkan sistem manual menghambat pertumbuhan. Diskusikan
              kebutuhan Anda bersama kami sekarang.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-fn-blue px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-2 group">
                Jadwalkan Konsultasi
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="https://wa.me/6281214111439"
                target="_blank"
                className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Mail size={20} /> Hubungi Kami
              </a>
            </div>

            <p className="mt-8 text-blue-200 text-sm font-medium">
              Konsultasi awal 100% Gratis & Tanpa Komitmen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
