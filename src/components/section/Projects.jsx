import { BackgroundBox } from "../BackgroundBox";
import * as AssetsLogo from "../../assets/logo";
import { ArrowIcon } from "../../assets";
import IonsIMG from "../../assets/IONS.png";
import { motion } from "motion/react";
import { useState } from "react";

const projectList = [
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "Helping households to manage their energy consumption more wisely and effectively with the help of Artificial Intelligent.",
    tech: ["HTML", "React", "ChakraUI", "PostgreSQL", "Golang"],
    image: IonsIMG,
    imageALT: "IONS",
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "Helping households to manage their energy consumption more wisely and effectively with the help of Artificial Intelligent.",
    tech: ["HTML", "React", "ChakraUI", "PostgreSQL", "Golang"],
    image: IonsIMG,
    imageALT: "IONS",
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "Helping households to manage their energy consumption more wisely and effectively with the help of Artificial Intelligent.",
    tech: ["HTML", "React", "ChakraUI", "PostgreSQL", "Golang"],
    image: IonsIMG,
    imageALT: "IONS",
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "Helping households to manage their energy consumption more wisely and effectively with the help of Artificial Intelligent.",
    tech: ["HTML", "React", "ChakraUI", "PostgreSQL", "Golang"],
    image: IonsIMG,
    imageALT: "IONS",
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "Helping households to manage their energy consumption more wisely and effectively with the help of Artificial Intelligent.",
    tech: ["HTML", "React", "ChakraUI", "PostgreSQL", "Golang"],
    image: IonsIMG,
    imageALT: "IONS",
  },
];

export function Projects() {
  return (
    <BackgroundBox className="flex flex-col items-center gap-16 px-5 py-14">
      <div className="flex w-fit flex-col text-center">
        <h1 className="text-xl font-bold lg:text-2xl">My Latest Projects!</h1>
        <h2 className="text-sm font-light sm-md:text-base xl:text-lg">
          This is some of the project that i have worked on
        </h2>
      </div>
      <div className="grid h-fit w-full gap-8 gap-y-12 md:grid-cols-6">
        {projectList.map((project, index) => {
          const row = index % 5 === 0 || index % 5 === 1 ? 1 : 2;
          return <ProjectItem key={index} row={row} project={project} />;
        })}
      </div>
    </BackgroundBox>
  );
}

function ProjectItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { row, project = {} } = props;

  return (
    <motion.div
      className={`col-span-6 cursor-pointer rounded-lg md:col-span-3 ${row === 2 && "xl:col-span-2"}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-40 md:h-64 lg:h-72 xl:h-80 2xl:h-96"
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute right-5 top-5 z-10 size-12"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: isHovered ? 0.5 : 0.3,
            delay: isHovered ? 0.4 : 0,
          }}
        >
          <ArrowIcon />
        </motion.div>
        <motion.div
          className="absolute h-full w-full rounded-lg border-brand-yellow"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(0, 0, 0, 0)",
            borderWidth: isHovered ? "4px" : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.p
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl text-brand-yellow md:text-xl 2xl:text-2xl ${row === 2 && "lg:text-lg xl:text-xl"}`}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: isHovered ? 0.5 : 0.3,
            delay: isHovered ? 0.4 : 0,
          }}
        >
          Click to see more
        </motion.p>
        <img
          src={project.image}
          alt={project.imageALT}
          className="h-full w-full rounded-lg object-cover"
        />
      </motion.div>
      <h1 className="mt-4 text-lg font-semibold xl:text-xl">{project.title}</h1>
      <h2 className="mt-2 font-light xl:text-lg">{project.description}</h2>
      <div className="mt-4 flex flex-wrap gap-2 gap-y-2">
        {project.tech.map((value, index) => (
          <TechTag key={index} name={value} />
        ))}
      </div>
    </motion.div>
  );
}

function TechTag(props) {
  const { name } = props;

  const logos = {
    ChakraUI: AssetsLogo.ChakraUiLogo,
    Golang: AssetsLogo.GolangLogo,
    HTML: AssetsLogo.HtmlLogo,
    PostgreSQL: AssetsLogo.PostgreLogo,
    React: AssetsLogo.ReactLogo,
  };

  const Logo = logos[name];

  return (
    <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-200 p-2 text-xs">
      <Logo className="h-4" />
      <h3>{name}</h3>
    </div>
  );
}
