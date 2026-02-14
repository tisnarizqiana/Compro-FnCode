import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../constants";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk efek glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll halus ke target id
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    // Jika target ada (seperti footer untuk kontak), scroll ke sana
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Tutup menu mobile setelah diklik
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-2xl tracking-tighter text-fn-dark dark:text-white flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <span className="text-white bg-fn-blue rounded-lg px-2 py-1 text-xl relative z-10">
                Fn
              </span>
              <div className="absolute inset-0 bg-fn-blue blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
            </div>
            <span className="group-hover:text-fn-blue transition-colors duration-300">
              Code
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-fn-blue dark:hover:text-fn-blue font-medium transition-colors relative group text-sm"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-fn-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            <ThemeToggle />

            {/* Tombol Konsultasi mengarah ke email/kontak */}
            <a
              href="https://wa.me/6281214111439"
              target="_blank"
              className="bg-fn-blue text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 ml-2 hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Konsultasi
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-200 hover:text-fn-blue transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden absolute w-full bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl transition-all duration-300 origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"}`}
      >
        {NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="block px-4 py-3 text-slate-700 dark:text-slate-200 hover:text-fn-blue dark:hover:text-fn-blue font-medium hover:bg-blue-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-sm"
          >
            {item.label}
          </a>
        ))}
        <div className="pt-4 px-4">
          <a
            href="https://wa.me/6281214111439"
            target="_blank"
            className="block w-full text-center bg-fn-blue text-white py-3 rounded-xl font-bold shadow-lg"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
