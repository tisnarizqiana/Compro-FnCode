import React from "react";
import { PROJECTS } from "../../constants";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  return (
    /* bg-blue-50/30 memberikan perbedaan halus antar section */
    <section
      id="portofolio"
      className="py-24 bg-blue-50/30 dark:bg-transparent transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Karya & Dampak Nyata
          </h2>
          <div className="w-20 h-1.5 bg-fn-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-900/5 border border-blue-50 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 bg-slate-100 dark:bg-slate-800/50 overflow-hidden flex items-center justify-center">
                <div className="text-center group-hover:opacity-0 transition-opacity absolute">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2 text-fn-blue font-bold text-2xl">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-fn-blue/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <button className="bg-white text-fn-blue font-bold px-6 py-2 rounded-full flex items-center gap-2">
                    Detail <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
