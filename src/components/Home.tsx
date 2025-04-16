"use client";

import React from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin, Behance } from "react-bootstrap-icons";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPython,
} from "react-icons/si";

export default function Home() {
  const technologies = [
    { icon: <FaReact className="text-3xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-3xl" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-3xl" />, name: "Node.js" },
    { icon: <SiTypescript className="text-3xl" />, name: "TypeScript" },
    { icon: <FaJs className="text-3xl" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-3xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-3xl" />, name: "CSS3" },
    { icon: <SiTailwindcss className="text-3xl" />, name: "Tailwind" },
    { icon: <FaGitAlt className="text-3xl" />, name: "Git" },
    { icon: <SiPython className="text-3xl" />, name: "Python" },
  ];

  function TechIcon({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
      <div className="flex flex-col items-center p-2 hover:scale-110 transition-transform min-w-[80px]">
        <div className="text-white">{icon}</div>
        <span className="text-white text-sm mt-1 font-subtitle">{name}</span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[url('/bg/gradient_background.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="flex flex-col">
        <header className="flex items-center px-6 py-6 justify-between md:px-15 md:py-8">
          <h2 className="text-2xl md:text-2xl font-title font-bold text-white w-full text-left md:text-left md:w-auto">
            EDEV
          </h2>
          <nav className="items-center hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#projects"
                  className="text-base font-subtitle font-bold text-white bg-clip-text hover:bg-gradient-to-r hover:from-[#f8a55f] hover:via-[#e43345] hover:to-[#cb4cc4] hover:[-webkit-text-fill-color:transparent] transition-all duration-300 ease-in-out"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base font-subtitle font-bold text-white bg-clip-text hover:bg-gradient-to-r hover:from-[#f8a55f] hover:via-[#e43345] hover:to-[#cb4cc4] hover:[-webkit-text-fill-color:transparent] transition-all duration-300 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base font-subtitle font-bold text-white bg-clip-text hover:bg-gradient-to-r hover:from-[#f8a55f] hover:via-[#e43345] hover:to-[#cb4cc4] hover:[-webkit-text-fill-color:transparent] transition-all duration-300 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-center w-full min-h-[80vh] gap-8 md:gap-30 px-4 md:px-0 md:-mt-10">
          <div className="flex flex-col gap-2 md:gap-4 md:-mt-30 order-1 md:order-none text-left md:text-left mt-10">
            <h2 className="text-base md:text-2xl font-extralight text-white font-subtitle tracking-widest">
              HELLO I&apos;M EDUARDO MAFEZOLI
            </h2>
            <h1 className="text-4xl md:text-7xl font-title font-bold text-white text-shadow-xl">
              WEB DEVELOPER
            </h1>
            <h2 className="text-sm md:text-lg font-subtitle font-light text-[#786D7D]">
              CREATING EXCEPTIONAL DIGITAL EXPERIENCES
            </h2>
            <div className="flex items-center gap-4 mt-2 justify-start md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Behance className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>

          <div className="order-2 md:order-none -mt-10 md:mt-0">
            <Image
              src="/images/Screens.svg"
              alt="Background Image"
              width={350}
              height={350}
              className="w-full max-w-[350px] md:w-[550px] md:max-w-none"
            />
          </div>
        </main>

        <section className="w-full py-6 md:py-3 px-4 -mt-10 md:-mt-20 mb-5 overflow-x-hidden">
          <div className="container mx-auto">
            {/* Desktop: Linha única */}
            <div className="hidden md:flex justify-center gap-10 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <TechIcon
                  key={`desktop-${index}`}
                  icon={tech.icon}
                  name={tech.name}
                />
              ))}
            </div>

            {/* Mobile: Carrossel automático */}
            <div className="md:hidden relative overflow-hidden">
              <div className="flex animate-infinite-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                  <TechIcon
                    key={`mobile-${index}`}
                    icon={tech.icon}
                    name={tech.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          display: flex;
          width: max-content;
          gap: 1rem;
        }
      `}</style>
    </div>
  );
}
