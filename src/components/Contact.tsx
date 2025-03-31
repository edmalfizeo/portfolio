import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-6 md:px-14 md:py-15 rounded-2xl text-white mt-5 md:mt-5"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-24">
        {/* Esquerda: Título e descrição */}
        <div>
          <p className="text-xs tracking-widest uppercase font-public text-white/60">
            Let’s connect
          </p>
          <h2 className="text-4xl md:text-5xl font-clash font-extrabold mt-4 leading-tight">
            Feel free to{" "}
            <span className="bg-gradient-to-r from-[#f36f5f] via-[#f76dc2] to-[#d06cfb] text-transparent bg-clip-text">
              contact me
            </span>
            <br />
            and start a project
          </h2>
          <p className="text-sm mt-4 text-white/70 max-w-md font-public">
            Whether it’s design, code, video or illustration — I’m always ready
            for the next challenge. Let’s talk!
          </p>
          <a
            href="mailto:dudumafez1@hotmail.com?subject=Contato%20via%20Portfólio&body=Olá, gostaria de entrar em contato com você!"
            className="inline-block mt-6 py-3 px-6 bg-gradient-to-r from-[#f36f5f] via-[#f76dc2] to-[#d06cfb] text-white font-medium rounded-full hover:opacity-90 transition"
          >
            Send a Message →
          </a>
        </div>

        {/* Direita: Imagem ilustrativa */}
        <div>
          <Image
            src="/assets/images/contact-illustration.png"
            alt="Contact illustration"
            width={320}
            height={320}
            className="md:w-[20rem] md:h-[20rem] w-[18rem] h-[18rem] rounded-2xl mx-auto md:mx-0 mt-20 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
