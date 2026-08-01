import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { MdZoomOutMap } from "react-icons/md";

import { experiences } from "../../portfolioContent";
import { BackgroundBox } from "../BackgroundBox";

export function ExperiencesComponent(props, ref) {
  const [state, setState] = useState("work_experiences");
  const containerRef = useRef(null);
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
  }, [state]);

  useLayoutEffect(() => {
    console.log(containerRef.current);
    const el = containerRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setIsScrollable(el.scrollHeight > el.clientHeight);
    };

    checkScrollable();
  }, [state]);

  const changeState = (newState) => {
    if (state != newState) {
      setState(newState);
    }
  };

  return (
    <BackgroundBox
      ref={ref}
      className="flex h-[800px] scroll-mt-36 flex-col gap-4 p-6 lg:h-[690px] lg:gap-6"
    >
      <div>
        <h1 className="mb-2 text-xl font-bold lg:text-2xl">My Experiences!</h1>
        <p className="text-sm font-light md:text-base xl:text-lg">
          Featuring my work experiences, educations, and certifications!
        </p>
      </div>
      <select
        className="w-full rounded-md border border-gray-400 p-2 text-sm font-light lg:hidden"
        onChange={(e) => changeState(e.target.value)}
      >
        {Object.keys(experiences).map((key) => (
          <option key={key} value={key}>
            {key
              .replace("_", " ")
              .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase())}
          </option>
        ))}
      </select>
      <div className="flex min-h-0 flex-1 gap-4">
        <div className="hidden w-1/4 flex-shrink-0 lg:block lg:text-sm xl:text-base">
          {Object.keys(experiences).map((key) => (
            <div
              key={key}
              className={`mb-2 cursor-pointer text-nowrap rounded-lg border px-4 py-2 transition-all duration-300 ease-in-out ${state === key ? "border-brand-yellow font-bold text-brand-orange" : ""}`.trim()}
              onClick={() => changeState(key)}
            >
              <p>
                {key
                  .replace("_", " ")
                  .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase())}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden h-full w-3 overflow-y-hidden border-r border-gray-300 lg:block" />
        <AnimatePresence key={state} mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div
              ref={containerRef}
              className={`flex w-full flex-1 flex-col gap-10 overflow-y-scroll pr-4 pt-4 lg:h-full lg:pt-0`}
            >
              {experiences[state]?.map((value, index) => (
                <EducationalItem key={index} education={value} />
              ))}
            </div>
            {isScrollable && (
              <motion.div
                key={state}
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

export const Experiences = React.forwardRef(ExperiencesComponent);

function EducationalItem(props) {
  const { education } = props;

  const calculateDuration = (rawDate) => {
    const parseDate = (str) => {
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

  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="flex size-20 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 p-2 md:size-14">
            {education.organizationLogo}
          </div>
          <div className="text-center md:text-start">
            <p className="mb-2 md:mb-1 xl:text-lg">{education.programName}</p>
            <p className="mb-4 text-sm font-light text-gray-600 lg:mb-0 xl:text-lg">
              {education.organization}
              {education.additionalInfo && ` - ${education.additionalInfo}`}
            </p>
          </div>
        </div>
        <div>
          <p className="text-nowrap text-center text-sm font-light xl:text-base">
            {education.duration}
          </p>
          {education.duration && (
            <p className="text-nowrap text-center text-sm font-light text-gray-600 md:text-right xl:text-base">
              {education.additionalDurationInfo ||
                calculateDuration(education.duration)}
            </p>
          )}
        </div>
      </div>
      <hr className="rounded border border-brand-yellow" />
      <p className="text-justify font-light xl:text-lg">
        {education.description}
      </p>
      <li className="flex list-none flex-col gap-2 font-light">
        {education.skillsAcquired.map((skill, index) => {
          return (
            <ul key={index} className="flex gap-4">
              <FiArrowUpRight className="mt-1 flex-shrink-0" />
              <p className="text-justify xl:text-lg">{skill}</p>
            </ul>
          );
        })}
      </li>
      {education.attachments?.length > 0 && (
        <div className="grid grid-cols-2 place-items-center gap-5 md:grid-cols-4 xl:grid-cols-5">
          <PhotoProvider>
            {education.attachments.map((item, index) => (
              <CertificationsItem
                key={`${education.programName}-${index}`}
                src={item}
              />
            ))}
          </PhotoProvider>
        </div>
      )}
    </div>
  );
}

function CertificationsItem(props) {
  const { src } = props;
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
