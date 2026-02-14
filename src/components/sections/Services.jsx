import React from "react";
import { SERVICES } from "../../constants";

const Services = () => {
  return (
    /* Pakai bg-transparent agar gradasi body terlihat */
    <section
      id="layanan"
      className="py-24 bg-transparent transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fn-blue/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Solusi Digital Kami
          </h2>
          <div className="w-20 h-1.5 bg-fn-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-blue-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 hover:border-fn-blue"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-fn-blue group-hover:bg-fn-blue group-hover:text-white transition-all shadow-inner">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
