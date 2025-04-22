"use client";

import ProjectCard from "@/components/ProjectCards";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function RecentWorks() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // % da section visível pra ativar
  });

  // Gera um key diferente cada vez que a section entra em view
  const animationKey = inView ? `visible-${Date.now()}` : "hidden";

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-8 md:px-16 items-center bg-gradient-to-b from-[#200011] via-[#0d0010] to-black"
    >
      <div className="bg-white text-black rounded-lg shadow-lg p-15">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-sm tracking-widest font-subtitle uppercase text-gray-500 mb-2">
            My Portfolio
          </h2>
          <h1 className="text-2xl md:text-4xl font-title font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[#f8a55f] via-[#e43345] to-[#cb4cc4] bg-clip-text text-transparent">
              Recent Work
            </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <ProjectCard
            title="TaskManager Landing Page"
            description="A landing page for a task management application."
            image="/images/image1.png"
            link="https://taskmanagerlandingpage.vercel.app/"
            animationKey={animationKey + "-1"}
          />
          <ProjectCard
            title="Patins Shop"
            description="An e-commerce website for a skate shop."
            image="/images/image2.png"
            reverse
            link="https://patins-ladingpage.vercel.app/"
            animationKey={animationKey + "-2"}
          />
        </div>
      </div>
    </section>
  );
}
