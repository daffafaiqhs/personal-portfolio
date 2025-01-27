import React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import { personalInfo } from "../../portfolioContent";
import { LeftContactBg, RightContactBg } from "../../assets";

function ContactComponent(props, ref) {
  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm-md:w-sm-md md:w-auto 2xl:w-2xl"
      id="Contact"
    >
      <LeftContactBg className="absolute -start-14 -top-16 size-[200px] sm:-top-20 sm:size-[220px] md:-start-40 md:size-[450px] lg:-start-56 lg:size-[600px] xl:-start-28 2xl:-start-14 2xl:-top-9" />
      <RightContactBg className="end absolute -bottom-16 -end-16 size-[250px] rotate-[60deg] sm:-bottom-20 sm:-end-20 sm:size-[270px] md:-bottom-40 md:-end-40 md:size-[500px] md:rotate-[50deg] lg:-bottom-20 lg:-end-48 lg:size-[600px] lg:rotate-0 xl:-bottom-36 xl:-end-32 xl:size-[700px] 2xl:-end-16" />
      <div className="flex flex-col items-center justify-center overflow-hidden py-40 text-center md:gap-2">
        <h1 className="text-lg font-bold sm:text-xl lg:text-2xl xl:text-3xl">
          Let's Stay Connected!
        </h1>
        <h2 className="text-sm font-thin sm:text-base lg:text-lg xl:text-xl">
          I'm open to chat, collaborate, or just say hi.
        </h2>
        <div className="flex gap-4 py-7">
          {Object.keys(personalInfo).map((key) => (
            <motion.a
              key={key}
              className="flex gap-1 rounded-full bg-white px-2 py-3 text-sm font-thin sm:px-4 lg:text-base"
              href={personalInfo[key]}
              target="blank"
              whileHover={{
                backgroundColor: "#FF933F",
                color: "#FFF",
              }}
            >
              <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <div className="mt-1">
                <FiArrowUpRight />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Contact = React.forwardRef(ContactComponent);
