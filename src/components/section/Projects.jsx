import { BackgroundBox } from "../BackgroundBox";
import * as AssetsLogo from "../../assets/logo";
import { GoCodeReview } from "react-icons/go";
import IonsIMG from "../../assets/IONS.png";
import { motion } from "motion/react";
import React, { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

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

function ProjectsComponent(props, ref) {
  return (
    <BackgroundBox
      ref={ref}
      className="flex flex-col items-center gap-10 px-5 py-8"
    >
      <div className="flex w-fit flex-col text-center">
        <h1 className="mb-2 text-xl font-bold lg:text-2xl">
          My Latest Projects!
        </h1>
        <h2 className="text-sm font-light sm-md:text-base xl:text-lg">
          This is some of the project that i have worked on
        </h2>
      </div>
      <div className="grid h-fit w-full gap-12 md:grid-cols-6 lg:gap-4">
        {projectList.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </div>
    </BackgroundBox>
  );
}

export const Projects = React.forwardRef(ProjectsComponent);

function ProjectItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { project } = props;

  return (
    <motion.div
      className="col-span-6 flex flex-col gap-4 rounded md:col-span-3 lg:p-5 xl:col-span-2"
      animate={{
        outline: isHovered ? "2px solid #FF933F" : "none",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.imageALT}
        className="aspect-video w-full object-cover"
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold xl:text-xl">{project.title}</h1>
        <h2 className="mb-3 font-light xl:text-lg">{project.description}</h2>
        {/* <div className="flex flex-wrap gap-2 gap-y-2">
          {project.tech.map((value, index) => (
            <TechTag key={index} name={value} />
          ))}
        </div> */}
      </div>
      <div className="flex items-center justify-between gap-4 text-sm">
        <motion.a
          href=""
          className="flex gap-1 rounded-lg border border-brand-orange px-3 py-2"
          whileHover={{
            backgroundColor: "#FF933F",
            borderColor: "#FF933F",
            color: "#FFF",
          }}
        >
          Live Demo
          <div className="mt-1">
            <FiArrowUpRight />
          </div>
        </motion.a>
        <motion.button
          className="flex gap-1 rounded-lg border border-brand-orange px-3 py-2"
          whileHover={{
            backgroundColor: "#FF933F",
            borderColor: "#FF933F",
            color: "#FFF",
          }}
        >
          Details
          <div className="mt-1">
            <FiArrowRight />
          </div>
        </motion.button>
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
