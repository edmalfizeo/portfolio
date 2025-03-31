"use client";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/assets/icons/developer.svg",
      title: "Fullstack Development",
      description:
        "I build complete digital solutions, from frontend interfaces to backend APIs.",
    },
    {
      icon: "/assets/icons/illustration.svg",
      title: "Illustration & Design",
      description:
        "Creating impactful visuals and illustrations that elevate your brand.",
    },
    {
      icon: "/assets/icons/videomaker.svg",
      title: "Video Production",
      description:
        "Producing cinematic video content with a creative and narrative approach.",
    },
    {
      icon: "/assets/icons/photographer.svg",
      title: "Photography & Editing",
      description:
        "Capturing authentic visuals and delivering polished edits with storytelling.",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center text-center min-h-screen md:min-h-fit py-20 px-6"
    >
      {/* Título */}
      <div className="md:mb-10 mb-5">
        <p className="text-xs tracking-widest uppercase text-white font-public">
          WHAT I DO
        </p>
        <h2 className="text-4xl md:text-5xl mt-4 font-clash font-extrabold text-white">
          <span className="bg-gradient-to-r from-[#f36f5f] via-[#f76dc2] to-[#d06cfb] bg-clip-text text-transparent">
            My Creative{" "}
          </span>
          <span className="text-white">Services</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[720px] w-full text-left">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1f1b2e] text-white p-8 rounded-xl transition-transform duration-300 md:hover:scale-110 md:hover:bg-gradient-to-br md:hover:from-[#f52e0b] md:hover:to-[#c451fa]"
          >
            <div className="bg-white/10 rounded-xl p-3 w-fit">
              <Image
                src={service.icon}
                alt="icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold text-lg mt-3 font-clash">
              {service.title}
            </h3>
            <p className="text-sm opacity-80 mt-2 font-public">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
