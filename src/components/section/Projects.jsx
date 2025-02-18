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
      <div className="flex h-fit w-full flex-wrap gap-12 md:justify-center lg:gap-4 xl:justify-normal">
        {projects_ProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              project={project}
              isOdd={(index + 1) % 2 === 1}
              isLastItem={index + 1 === projects_ProjectList.length}
            />
          );
        })}
      </div>
    </BackgroundBox>
  );
}

export const Projects = React.forwardRef(ProjectsComponent);

function ProjectItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { project, isOdd, isLastItem } = props;

  return (
    <motion.div
      className={`flex w-full flex-col justify-between rounded md:col-span-3 md:min-w-[calc(33.333%-1rem)] md:flex-1 lg:min-w-[calc(50%-1rem)] lg:p-5 xl:col-span-2 xl:min-w-[calc(33.333%-1rem)] ${isOdd && isLastItem ? "md:max-w-[calc(50%-1rem)] xl:max-w-none" : ""}`.trim()}
      animate={{
        outline: isHovered ? "2px solid #FF933F" : "none",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div>
        <img
          src={project.image}
          alt={project.imageALT}
          className="mb-6 aspect-video w-full rounded-lg object-cover"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold xl:text-xl">{project.title}</h1>
          <h2 className="mb-3 font-light xl:text-lg">{project.description}</h2>
          <p>Technologies used:</p>
          <div className="mb-10 flex flex-wrap gap-1 xl:mb-14">
            {project.tech.map((value, index) => (
              <TechTag key={index} name={value} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-4 text-xs sm:text-sm md:flex-row">
        {Object.keys(project.link)
          .filter((key) => project.link[key] !== "")
          .map((key) => (
            <motion.a
              key={key}
              href={project.link[key]}
              target="_blank"
              className="flex w-full justify-between gap-1 rounded-lg border border-brand-orange px-3 py-2 md:w-auto md:justify-normal"
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
          ))}
      </div>
    </motion.div>
  );
}

function TechTag(props) {
  const { name } = props;
  const logoName = name.replace(" ", "");

  const Logo = techStack_Logo[logoName + "Logo"];

  return (
    <div className="flex w-fit items-center gap-2 rounded-lg p-2 text-xs">
      <Logo className="h-4" />
      <p>{name}</p>
    </div>
  );
}
