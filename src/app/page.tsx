"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-[#0e0e10] min-h-screen  text-white">
      {/* Luz com gradiente + blur */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] md:w-[40vw] md:h-[40vh] gradiente-primary blur-super rounded-full opacity-80" />

      {/* Conteúdo das seções */}
      <div className="relative">
        {/* Header fora da estrutura de z-10 */}
        <div className="relative z-50 py-5">
          <Header />
        </div>

        {/* Seções da página */}
        <div className="relative z-10 p-5 max-w-[1440px] mx-auto">
          <Hero />
          <Works />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
        {/* Glow decorativo (pode ficar no fundo) */}
        <div className="mx-auto w-[40vw] h-[5vh] gradiente-primary blur-super rounded-full opacity-100 pointer-events-none" />
      </div>
    </div>
  );
}
