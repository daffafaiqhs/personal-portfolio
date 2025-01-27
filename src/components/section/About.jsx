import React, { useState } from "react";
import { motion } from "motion/react";
import { IoMailOpen, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import {
  personalInfo,
  about_IntroductionMessage,
} from "../../portfolioContent";
import { BackgroundBox } from "../BackgroundBox";
import { PotraitIMG } from "../../assets/";

function AboutComponent(props, ref) {
  return (
    <section
      ref={ref}
      className="grid-rows-[1fr, auto] grid gap-4 md:grid-cols-2 md:grid-rows-1"
    >
      <SelfPotrait />
      <Description />
    </section>
  );
}

export const About = React.forwardRef(AboutComponent);

function SelfPotrait() {
  return (
    <BackgroundBox className="relative flex h-full flex-col justify-between md:w-auto lg:justify-end">
      <div className="px-6 pt-6 lg:absolute lg:right-5 lg:top-0 lg:self-start xl:top-5">
        <div className="inline-block text-3xl font-medium leading-8 lg:text-3xl xl:text-4xl 2xl:text-5xl">
          <h2 className="text-sm font-light lg:text-base xl:text-lg">
            Hello there! My name is
          </h2>
          <h1 className="block">Mochammad</h1>
          <h1 className="block">Daffa Faiq</h1>
          <hr className="mt-4 h-1 rounded border-0 bg-gradient-to-r from-brand-yellow to-brand-orange" />
        </div>
      </div>
      <div className="absolute end-5 top-5 flex flex-col gap-3 text-brand-orange lg:bottom-5 lg:end-10 lg:top-auto">
        <motion.a
          className="rounded-full border border-gray-500 bg-transparent p-1 text-xl sm:p-2 sm:text-xl lg:text-3xl"
          href={personalInfo.email}
          whileHover={{
            backgroundColor: "#FF933F",
            borderColor: "#FF933F",
            color: "#FFF",
          }}
        >
          <IoMailOpen />
        </motion.a>
        <motion.a
          className="rounded-full border border-gray-500 bg-transparent p-1 text-xl sm:p-2 sm:text-xl lg:text-3xl"
          href={personalInfo.github}
          target="_blank"
          whileHover={{
            backgroundColor: "#FF933F",
            borderColor: "#FF933F",
            color: "#FFF",
          }}
        >
          <IoLogoGithub />
        </motion.a>
        <motion.a
          className="rounded-full border border-gray-500 bg-transparent p-1 text-xl sm:p-2 sm:text-xl lg:text-3xl"
          href={personalInfo.linkedin}
          target="_blank"
          whileHover={{
            backgroundColor: "#FF933F",
            borderColor: "#FF933F",
            color: "#FFF",
          }}
        >
          <IoLogoLinkedin />
        </motion.a>
      </div>
      <img
        src={PotraitIMG}
        alt="daffa's profile"
        width={"360px"}
        className="sm:w-auto lg:w-10/12 lg:max-w-[480px] xl:max-w-[550px] 2xl:max-h-[860px]"
      />
    </BackgroundBox>
  );
}

function Description() {
  const [intoductionSelector, setIntroductionSelector] = useState(2);

  return (
    <BackgroundBox className="flex min-h-[500px] flex-col items-center gap-4 p-6">
      <h1 className="text-sm font-light">Adjust my introduction length</h1>
      <div className="w-fit">
        <div className="flex gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`rounded-full ${intoductionSelector === index ? "bg-gradient-to-t from-brand-yellow to-brand-orange" : "bg-gray-200"} cursor-pointer p-3`}
              onClick={() => setIntroductionSelector(index)}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs font-light">
          <p>shortest</p>
          <p>longest</p>
        </div>
      </div>
      <p className="mt-5 text-justify text-sm font-light leading-loose xl:text-base xl:leading-loose">
        {about_IntroductionMessage[intoductionSelector]}
      </p>
    </BackgroundBox>
  );
}
