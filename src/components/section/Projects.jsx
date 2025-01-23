import React, { useState } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import { projects_ProjectList, techStack_Logo } from "../../portfolioContent";
import { BackgroundBox } from "../BackgroundBox";

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
        {projects_ProjectList.map((project, index) => {
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
        <div className="mb-5 flex flex-wrap gap-1">
          {project.tech.map((value, index) => (
            <TechTag key={index} name={value} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 text-sm">
        {Object.keys(project.link).map((key) => {
          if (project.link[key] !== "") {
            return (
              <motion.a
                key={key}
                href={project.link[key]}
                className="flex gap-1 rounded-lg border border-brand-orange px-3 py-2"
                whileHover={{
                  backgroundColor: "#FF933F",
                  borderColor: "#FF933F",
                  color: "#FFF",
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <div className="mt-1">
                  <FiArrowUpRight />
                </div>
              </motion.a>
            );
          }
        })}
      </div>
    </motion.div>
  );
}

function TechTag(props) {
  const { name } = props;

  const Logo = techStack_Logo[name + "Logo"];

  return (
    <div className="flex w-fit items-center gap-2 rounded-lg p-2 text-xs">
      <Logo className="h-4" />
      <p>{name}</p>
    </div>
  );
}
