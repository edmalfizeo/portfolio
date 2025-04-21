import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  reverse = false,
  link,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 mb-16`}
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full md:w-1/2 rounded-xl shadow-xl"
      />
      <div
        className={`w-full md:w-1/2 text-left ${
          reverse ? "md:text-right" : "md:text-left"
        }`}
      >
        <h3 className="text-4xl font-bold font-title mb-4">{title}</h3>
        <h2 className="text-gray-600 text-xl mb-6 font-subtitle">
          {description}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-6 py-3 border border-red-400 text-red-600 rounded-full hover:bg-pink-50 transition inline-block"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
};
