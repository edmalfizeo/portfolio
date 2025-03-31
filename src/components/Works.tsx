"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const projectBlocks = [
  [
    {
      title: "Project 1",
      description: "A short description of Project 1.",
      image: "/assets/images/image_1.png",
    },
    {
      title: "Project 2",
      description: "A short description of Project 2.",
      image: "/assets/images/image_1.png",
    },
  ],
  [
    {
      title: "Project 3",
      description: "A short description of Project 3.",
      image: "/assets/images/image_4.png",
    },
    {
      title: "Project 4",
      description: "A short description of Project 4.",
      image: "/assets/images/image_4.png",
    },
  ],
];

export default function Works() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  const nextBlock = () =>
    setCurrentIndex((prev) => (prev + 1) % projectBlocks.length);

  const prevBlock = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + projectBlocks.length) % projectBlocks.length
    );

  return (
    <section
      id="projects"
      className="w-full max-w-[1200px] mx-auto px-6 md:px-14 py-10 rounded-2xl bg-white/90 min-h-screen md:py-24 mt-30 shadow-[0_50px_80px_-30px_rgba(0,0,0,0.25)]"
    >
      {/* Título */}
      <div className="text-center mb-10 md:mb-15 mt-10 gap-6">
        <p className="md:text-1xl text-sm tracking-widest uppercase text-black font-public">
          Some of my recent work
        </p>
        <h2 className="md:text-6xl text-3xl mt-1 font-clash font-extrabold text-black">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#f36f5f] via-[#f76dc2] to-[#d06cfb] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* Projetos */}
      <div ref={containerRef} className="flex flex-col gap-8 items-center">
        {projectBlocks[currentIndex].map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-2 items-center md:items-start md:gap-20 ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <Image
              src={project.image}
              alt="project"
              width={720}
              height={420}
              className="rounded-xl object-cover w-[90%] md:w-90 h-60 md:h-70"
            />
            <div
              className={`  ${
                index === 1
                  ? "md:text-right text-center"
                  : "text-center md:text-left"
              }`}
            >
              <h3 className="text-lg md:text-xl font-clash font-bold text-black mt-5">
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-public text-gray-500 mt-2">
                {project.description}
              </p>
              <button
                className={`mt-4 border border-[#f36f5f] text-[#f36f5f] text-sm px-6 py-3 rounded-full hover:bg-[#f36f5f] hover:text-white transition ${
                  index === 1 ? "md:ml-auto" : ""
                }`}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <div className="flex justify-center gap-2">
        <button
          className="p-3 hover:scale-110 transition-transform mt-10"
          onClick={prevBlock}
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt="Previous"
            width={54}
            height={54}
          />
        </button>
        <button
          className="p-3 hover:scale-110 transition-transform mt-10"
          onClick={nextBlock}
        >
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="Next"
            width={54}
            height={54}
          />
        </button>
      </div>
    </section>
  );
}
