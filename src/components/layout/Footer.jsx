import React from "react";
import { Mail, Linkedin, Instagram, MapPin, Github } from "lucide-react";

const Footer = () => {
  return (
    /* Background footer disesuaikan agar selaras dengan gradasi biru halaman */
    <footer
      id="kontak"
      className="bg-blue-50/50 dark:bg-[#050b1a] pt-16 pb-8 border-t border-blue-100 dark:border-slate-800 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Dekorasi halus di footer */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fn-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom Brand */}
          <div className="space-y-4">
            <div className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-white bg-fn-blue rounded-lg px-2 py-1 text-xl shadow-lg shadow-blue-500/20">
                Fn
              </span>
              Code
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              Mitra teknologi strategis untuk transformasi digital bisnis Anda.
              Small Key, Big Function.
            </p>
          </div>

          {/* Kolom Link Cepat */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Menu
            </h4>
            <ul className="space-y-3">
              {["Tentang", "Layanan", "Portofolio", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 dark:text-slate-400 hover:text-fn-blue dark:hover:text-fn-blue transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Layanan */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Layanan
            </h4>
            <ul className="space-y-3">
              {[
                "Custom Software",
                "Web App",
                "System Integration",
                "Maintenance",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-slate-500 dark:text-slate-400 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <MapPin
                  className="text-fn-blue flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span>Ciamis, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm">
                <Mail className="text-fn-blue flex-shrink-0" size={18} />
                <a
                  href="mailto:fncode.official@gmail.com"
                  className="hover:text-fn-blue transition-colors"
                >
                  fncode.official@gmail.com
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://github.com/fncodeofficial"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-fn-blue hover:shadow-lg transition-all border border-blue-100 dark:border-slate-700"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.instagram.com/fncode.official"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-fn-blue hover:shadow-lg transition-all border border-blue-100 dark:border-slate-700"
                >
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Baris Bawah */}
        <div className="pt-8 border-t border-blue-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-500">
          <p>&copy; 2026 FNCode. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-fn-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-fn-blue transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
