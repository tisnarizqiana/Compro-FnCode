import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Features from "./components/sections/Features";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import ScrollToTop from "./components/ui/ScrollToTop";
function App() {
  return (
    <div className="font-sans antialiased selection:bg-fn-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
