"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative bg-[#0e0e10] min-h-screen overflow-hidden text-white">
      {/* Luz com gradiente + blur */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] md:w-[40vw] md:h-[40vh] gradiente-primary blur-super rounded-full opacity-80" />

      {/* Header */}
      <div className="relative z-20 py-5">
        <Header />
      </div>

      {/* Conteúdo das seções */}
      <div className="relative z-10 p-5 max-w-[1440px] mx-auto">
        <Hero />
        <Works />
        <About />
        <Services />
      </div>
    </div>
  );
}
