"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  return (
    <header className="w-full py-5 px-5 md:px-10">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <h2 className="text-white text-3xl font-bold font-clash">EDEV</h2>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-11">
          {["Home", "About", "Projects", "Contact"].map((label, index) => (
            <a
              key={index}
              href={`#${label.toLowerCase()}`}
              className="text-white text-base font-public transition-transform duration-300 hover:scale-110 hover:font-semibold hover:text-transparent hover:bg-[linear-gradient(90deg,_#f8a55f_0%,_#e43345_50%,_#cb4cc4_100%)] hover:bg-clip-text"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden z-10"
        >
          <Image
            src="/assets/icons/menu_burguer.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </button>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#0e0e10] flex flex-col items-center justify-center gap-10 z-30 overflow-hidden">
            {/* Gradiente com blur */}
            <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] md:w-[40vw] md:h-[40vh] gradiente-primary blur-super rounded-full opacity-80" />

            {/* Botão de fechar */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl z-40"
            >
              &times;
            </button>

            {/* Links */}
            <nav className="relative z-40 flex flex-col items-center gap-10">
              {["home", "about", "projects", "contact"].map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-light text-white font-public inline-block transition-transform duration-300 hover:scale-110 hover:font-semibold border-b-2 border-[#6e6e6eb0] pb-6 w-80 text-center"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
