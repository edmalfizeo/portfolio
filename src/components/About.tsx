"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutContainer.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutContainer.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="relative w-full max-w-[1200px] mx-auto px-6 md:px-14 py-20 rounded-2xl shadow-xl text-white overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute md:-top-40 -top-20 left-1/2 transform -translate-x-1/2 w-[40vw] h-[40vh] gradiente-primary blur-super rounded-full opacity-90" />

      {/* Conteúdo */}
      <div
        ref={aboutContainer}
        className="relative z-10 flex flex-col md:flex-row items-center gap-20 justify-center"
      >
        {/* Box Esquerda */}
        <div className="bg-white/5 p-6 md:p-10 rounded-xl w-full md:w-1/3 text-center md:text-left order-2 md:order-1">
          <h3 className="text-xl font-bold font-clash leading-snug">
            Fullstack <br />
            Illustrator & Videomaker <br />
            Are My Skills
          </h3>
          <p className="text-sm font-public text-gray-300 mt-4">
            Development, illustration and video production – all integrated into
            one creative professional.
          </p>
        </div>

        {/* Box Direita */}
        <div className="w-full md:w-1/3 text-center md:text-left order-1 md:order-2">
          <p className="uppercase tracking-widest text-sm font-public text-gray-400">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-clash leading-tight my-2">
            <span>A </span>
            <span className="bg-gradient-to-r from-[#f36f5f] via-[#f76dc2] to-[#d06cfb] bg-clip-text text-transparent">
              FullStack
            </span>{" "}
            Developer
          </h2>
          <p className="text-sm font-public text-gray-300 mt-4">
            I blend design, technology and storytelling to craft standout
            digital solutions. it doesn&apos;t matter if is coding, illustrating
            or filming – I’m always building something impactful.
          </p>
          <a href="#contact">
            <button className="mt-6 border border-[#f36f5f] text-white text-sm px-6 py-3 rounded-full hover:bg-[#f36f5f] hover:text-white transition">
              Contact Me →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
