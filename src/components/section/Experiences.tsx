import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { MdZoomOutMap } from "react-icons/md";
import { BackgroundBox } from "../BackgroundBox";
import { experiences, type ExperienceItem, type ExperienceTitle } from "../../content";
import clsx from "clsx";
import { IoCaretForwardOutline } from "react-icons/io5";
import { TechStackTag } from "../TechStackTag";

export function ExperiencesComponent(_props: React.ComponentProps<"div">, ref: React.ForwardedRef<React.ComponentRef<"div">>) {
  const [currentSection, setCurrentSection] = useState<ExperienceTitle>("Work Experiences");
  const containerRef = useRef<React.ComponentRef<"div">>(null);
  const [showIndicator, setShowIndicator] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const hasOverflow = el.scrollHeight > el.clientHeight;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      setShowIndicator(hasOverflow && !atBottom);
      setIsScrollable(el.scrollHeight > el.clientHeight);
    };

    update();

    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [currentSection]);

  useLayoutEffect(() => {
    console.log(containerRef.current);
    const el = containerRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setIsScrollable(el.scrollHeight > el.clientHeight);
    };

    checkScrollable();
  }, [currentSection]);

  return (
    <BackgroundBox
      ref={ref}
      className="flex h-[800px] scroll-mt-36 flex-col gap-4 p-6 lg:h-[690px] lg:gap-6"
    >
      <div>
        <h1 className="mb-2 text-xl font-bold lg:text-2xl">My Experiences!</h1>
        <p className="text-sm font-light md:text-base xl:text-lg leading-relaxed">
          Featuring my work experiences, educations, and certifications!
        </p>
      </div>
      <select
        className="w-full rounded-md border border-gray-400 p-2 text-sm font-light lg:hidden"
        onChange={(e) => setCurrentSection(e.target.value as ExperienceTitle)}
      >
        {experiences.map((experience) => (
          <option key={experience.title} value={experience.title}>
            {experience.title}
          </option>
        ))}
      </select>
      <div className="flex min-h-0 flex-1 gap-4">
        <div className="hidden w-1/4 shrink-0 lg:block lg:text-sm xl:text-base">
          {experiences.map((experience) => (
            <motion.div
              key={experience.title}
              className={clsx(
                "mb-2 cursor-pointer text-nowrap rounded-lg border px-4 py-2",
                currentSection === experience.title &&
                "!border-brand-yellow font-bold !text-brand-orange",
              )}
              whileHover={{
                scale: 1.03,
                borderColor: "#FEDC7E",
                color: "#FF933F",
              }}
              transition={{ duration: 0.2 }}
              onClick={() => setCurrentSection(experience.title)}
            >
              <p>{experience.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="hidden h-full w-3 overflow-y-hidden border-r border-gray-300 lg:block" />
        <AnimatePresence key={currentSection} mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div
              ref={containerRef}
              className="flex w-full flex-1 flex-col gap-10 overflow-y-scroll pr-4 pt-4 lg:h-full lg:pt-0"
            >
              {experiences.find((experience) => experience.title === currentSection)?.items.map((experienceItem, index) =>
                <ExperienceItemComponent key={index + "-" + experienceItem.title} experience={experienceItem} currentSection={currentSection} />
              )}
            </div>
            {isScrollable && (
              <motion.div
                key={currentSection}
                animate={{ opacity: showIndicator ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-2 w-fit self-center"
              >
                <div className="flex w-fit flex-row items-center gap-2 rounded-full bg-brand-yellow px-4 py-2">
                  <FiArrowDown size={20} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </BackgroundBox>
  );
}

export const ExperiencesSection = React.forwardRef(ExperiencesComponent);

function ExperienceItemComponent({ experience, currentSection }: { experience: ExperienceItem, currentSection: ExperienceTitle }) {
  const calculateDuration = (rawDate: string) => {
    const parseDate = (str: string) => {
      str = str.trim();

      // Year only (e.g. "2025") → assume Jan 1
      if (/^\d{4}$/.test(str)) {
        str = `1 Jan ${str}`;
      }
      // Month + Year (e.g. "Feb 2025") → assume day = 1
      else if (!/^\d{1,2}\s/.test(str)) {
        str = `1 ${str}`;
      }

      return new Date(str);
    };

    const [start, end] = rawDate.split(" - ");

    const first = parseDate(start);
    const second = parseDate(end);

    const totalMonths = Math.abs(
      (second.getFullYear() - first.getFullYear()) * 12 +
      (second.getMonth() - first.getMonth()),
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts = [];

    if (years > 0) {
      parts.push(`${years} year${years > 1 ? "s" : ""}`);
    }

    if (months > 0 || years === 0) {
      parts.push(`${months} month${months !== 1 ? "s" : ""}`);
    }

    return parts.join(" ");
  };

  function generateTechStackIntro(currentSection: ExperienceTitle) {
    switch (currentSection) {
      case "Work Experiences":
        return "The main technologies used in this role include:"
      case "Educations":
        return "The main technologies learned during this education include:"
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col items-center justify-center gap-4 md:!flex-row md:items-start">
          <div className="flex size-20 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 p-2 md:size-14">
            <experience.organizationLogo />
          </div>
          <div className="text-center md:text-start">
            <p className="md:mb-1 xl:text-base">{experience.title}</p>
            <div className="flex flex-col items-center gap-1 md:!flex-row text-sm mb-2 md:mb-4 lg:mb-0 xl:text-base">
              <p className="font-light text-gray-600 ">
                {experience.organizationName}
              </p>
              {experience.additionalTitleInformation && (
                <>
                  <IoCaretForwardOutline className="hidden md:block text-gray-400" />
                  <p className="font-light text-gray-600">
                    {experience.additionalTitleInformation}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <p className="text-nowrap text-center text-sm font-light xl:text-base">
            {experience.duration}
          </p>
          {experience.duration && (
            <p className="text-nowrap text-center text-sm font-light text-gray-600 md:text-right xl:text-base">
              {experience.additionalDurationInformation ||
                `(${calculateDuration(experience.duration)})`}
            </p>
          )}
        </div>
      </div>
      <hr className="rounded border border-brand-yellow" />
      <p className="text-sm !leading-relaxed text-justify font-light xl:text-base">
        {experience.description}
      </p>
      {experience.skillsAcquired.length > 0 &&
        <li className="flex list-none flex-col gap-2 font-light">
          {experience.skillsAcquired.map((skill, index) => {
            return (
              <ul key={index} className="flex gap-4">
                <FiArrowUpRight className="mt-1 shrink-0" />
                <p className="text-sm leading-relaxed text-justify xl:text-base">{skill}</p>
              </ul>
            );
          })}
        </li>
      }
      {experience.techStack.length > 0 &&
        <div>
          <p className="text-xs xl:text-base leading-loose text-justify">{generateTechStackIntro(currentSection)}</p>
          <div className="flex flex-wrap">
            {experience.techStack.map((stackName, index) =>
              <TechStackTag key={index} name={stackName} logoClassName="h-5" nameClassName="text-xs xl:text-sm" />)
            }
          </div>
        </div>
      }
      {experience.attachments?.length > 0 && (
        <div className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-4 xl:grid-cols-5">
          <PhotoProvider>
            {experience.attachments.map((item, index) => (
              <AttachmentItemComponent
                key={`${experience.title}-${index}`}
                src={item}
              />
            ))}
          </PhotoProvider>
        </div>
      )}
    </div>
  );
}

function AttachmentItemComponent({ src }: { src: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PhotoView src={src}>
      <motion.div
        className="relative h-fit w-fit cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute h-full w-full"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(0, 0, 0, 0)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-2 text-center text-3xl text-white"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <MdZoomOutMap />
          <p className="text-base">View Image</p>
        </motion.div>
        <div className="aspect-[4/3] w-full">
          <img
            src={src}
            className="h-full w-full object-cover object-top"
            decoding="async"
            alt=""
          />
        </div>
      </motion.div>
    </PhotoView>
  );
}
