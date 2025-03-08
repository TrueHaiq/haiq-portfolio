import devProjects from "@/constants/dev-projects";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="hidden sm:inline my-[5rem] font-extrabold text-5xl">
        My Projects:
      </h1>

      <div
        id="projects-list"
        className="flex flex-col sm:w-full space-y-[5rem] sm:space-y-[10rem] mt-[3rem] sm:mt-0"
      >
        {devProjects.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col w-[20rem] sm:w-full space-x-5 ${
              i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse justify-end"
            } w-full lg:w-[65rem] space-y-5 items-center
            outline-[0.2rem] rounded-xl outline-primary dark:outline-primary/30
            `}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.links[0].url}
            >
              <Image
                src={project.imageSrc}
                alt={project.name}
                className={`rounded-xl max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] object-cover
                    border-primary dark:border-primary/20 border-[1px]
                    hover:max-w-[22rem] hover:md:max-w-[35rem] duration-300
                    outline outline-[0.1rem] outline-primary dark:outline-primary/30`}
              />
            </a>
            <div className="flex flex-col h-full w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] space-y-2">
              <h1 className="text-4xl font-extrabold">{project.name}</h1>
              <p className="w-full line-clamp-6">{project.description}</p>
              <div className="inline text-indigo-500 text-lg">
                {project.links.map((link, i) => (
                  <p className="inline">
                    {i == project.links.length - 1 ? " - " : " "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:font-bold"
                      href={link.url}
                    >
                      {link.title}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
