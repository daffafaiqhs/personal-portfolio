import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiArrowDown,
} from "react-icons/fi";
import { BackgroundBox } from "../BackgroundBox";
import { useLayoutEffect, useRef, useEffect } from "react";
import { ModalComponent } from "../Modal";
import { contacts, projects, techStack, type Project, type ProjectLink, type StackName } from "../../content";

function ProjectsComponent(_props: React.ComponentProps<"div">, ref: React.ForwardedRef<React.ComponentRef<"div">>) {
  const containerRef = useRef<React.ComponentRef<"div">>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>();
  const [showIndicator, setShowIndicator] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const hasOverflow = el.scrollHeight > el.clientHeight;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      setShowIndicator(hasOverflow && !atBottom);
    };

    update();

    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setIsScrollable(el.scrollHeight > el.clientHeight);
    };

    checkScrollable();

    const updateHeight = () => {
      if (!containerRef.current) return;

      const firstCard = containerRef.current.firstElementChild;
      if (!firstCard) return;

      const rowGap = parseFloat(getComputedStyle(containerRef.current).rowGap);
      setMaxHeight(firstCard.getBoundingClientRect().height + rowGap + 32);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <BackgroundBox
      ref={ref}
      className="flex scroll-mt-44 flex-col items-center px-5 py-8"
    >
      <div className="mb-4 flex w-fit flex-col text-center">
        <h1 className="mb-2 text-xl font-bold lg:text-2xl">
          My Latest Projects!
        </h1>
        <h2 className="text-sm font-light sm-md:text-base xl:text-lg">
          This is some of the project that i have worked on
        </h2>
      </div>
      <div
        ref={containerRef}
        className="grid max-h-[800px] w-full grid-cols-1 gap-12 overflow-y-scroll p-4 md:grid-cols-2 lg:gap-4 xl:grid-cols-3"
        style={{ maxHeight }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectItemComponent
              key={index}
              project={project}
            />
          );
        })}
      </div>
      {isScrollable && (
        <motion.div
          animate={{ opacity: showIndicator ? 1 : 0 }}
          transition={{
            duration: 0.3,
          }}
          className="mt-2"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 1.5,
            }}
            className="flex flex-row items-center gap-2 rounded-full bg-brand-yellow px-4 py-2"
          >
            <FiArrowDown size={20} />
            <span>see more</span>
          </motion.div>
        </motion.div>
      )}
    </BackgroundBox>
  );
}

export const ProjectsSection = React.forwardRef(ProjectsComponent);

function ProjectItemComponent({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedLink, setSelectedLink] = useState<ProjectLink | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        className="flex w-full flex-col justify-between rounded md:flex-1 lg:p-5"
        animate={{
          outline: isHovered && !isSmallScreen ? "2px solid #FF933F" : "none",
          boxShadow: isHovered && !isSmallScreen ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div>
          <img
            src={project.coverImage}
            alt={project.coverAltText}
            className="mb-6 aspect-video w-full rounded-lg object-cover"
          />

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold xl:text-xl">
              {project.title}
            </h1>
            <h2 className="mb-3 font-light leading-relaxed xl:text-lg">
              {project.description}
            </h2>
            <p>Technologies used:</p>
            <div className="mb-10 flex flex-wrap gap-1 xl:mb-14">
              {project.techStack.map((value, index) => (
                <TechStackTag key={index} name={value} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 text-xs sm:text-sm md:!flex-row">
          {project.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              className="flex w-full cursor-pointer justify-between gap-1 whitespace-nowrap rounded-lg border border-brand-orange px-3 py-2 md:w-auto md:justify-normal"
              whileHover={{
                backgroundColor: "#FF933F",
                borderColor: "#FF933F",
                color: "#FFF",
              }}
              onClick={(e) => {
                if (link.restriction) {
                  e.preventDefault();
                  setSelectedLink(link);
                }
              }}
            >
              {link.type}
              <div className="mt-1">
                <FiArrowUpRight />
              </div>
            </motion.a>
          ))}
          <ModalComponent
            isOpen={!!selectedLink}
            onClose={() => setSelectedLink(null)}
            title={selectedLink?.restriction?.title ?? "Whooops"}
            footer={selectedLink?.restriction?.provideContactButton ? contacts.map((contact, index) => (
              <motion.a
                key={index}
                className="flex gap-1 rounded-full border border-brand-orange bg-white px-2 py-3 text-sm font-thin sm:px-4 lg:text-base"
                href={contact.url}
                target="blank"
                whileHover={{
                  backgroundColor: "#FF933F",
                  color: "#FFF",
                }}
              >
                <p>{contact.name}</p>
                <div className="mt-1">
                  <FiArrowUpRight />
                </div>
              </motion.a>
            )) : undefined}
          >
            <p className="text-gray-800">
              {selectedLink?.restriction?.reason}
            </p>
          </ModalComponent>
        </div>
      </motion.div>
    </>
  );
}

function TechStackTag({ name }: { name: StackName }) {
  const stack = techStack.find((stack) => stack.name === name);

  if (!stack) {
    return null;
  }

  return (
    <div className="flex w-fit items-center gap-2 rounded-lg p-2 text-xs">
      <stack.logo className="h-4" />
      <p>{name}</p>
    </div>
  );
}
