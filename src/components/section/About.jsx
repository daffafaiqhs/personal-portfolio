import { BackgroundBox } from "../BackgroundBox";
import PotraitIMG from "../../assets/PotraitIMG.png";
import { IoMailOpen, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { motion } from "motion/react";
import React, { useState } from "react";

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
          href="mailto:daffafaiqhs@gmail.com"
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
          href="https://github.com/daffafaiqhs"
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
          href="https://linkedin.com/in/daffafaiqhs"
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

  const introductionMessage = [
    <>
      I'm just here to make websites that{" "}
      <span className="font-bold text-brand-orange">don't crash</span> (too
      often) and figure out why my{" "}
      <span className="font-bold text-brand-orange">React useEffect</span> is
      running{" "}
      <span className="font-bold text-brand-orange">too many times</span> when I
      only wanted it <span className="font-bold text-brand-orange">once</span>.
    </>,
    <>
      Most of the times, I'm caught between{" "}
      <span className="font-bold text-brand-orange">JavaScript</span> telling me
      my function is{" "}
      <span className="font-bold text-brand-orange">not defined</span>—even
      though I <span className="font-bold text-brand-orange">defined</span> it a
      minute ago and <span className="font-bold text-brand-orange">Go</span>{" "}
      complaining because a function returned{" "}
      <span className="font-bold text-brand-orange">two values</span> when I
      only asked for <span className="font-bold text-brand-orange">one</span>.
    </>,
    <>
      Hey there! I'm a{" "}
      <span className="font-bold text-brand-orange">
        3rd-year Informatics student
      </span>{" "}
      from UPN Veteran Jawa Timur who's diving headfirst into the world of web
      development. My journey has been a rollercoaster of{" "}
      <span className="font-bold text-brand-orange">
        exciting projects and endless learning
      </span>
      . My dream is to create web applications that are as reliable as my matcha
      addiction.
    </>,
    <>
      Hiyaa! I'm a{" "}
      <span className="font-bold text-brand-orange">
        3rd-year Informatics student
      </span>{" "}
      from UPN Veteran Jawa Timur exploring the exciting world of web
      development. The journey of becoming a fullstack developer is{" "}
      <span className="font-bold text-brand-orange">never linear</span>, but
      it's always <span className="font-bold text-brand-orange">rewarding</span>
      . Fueled by curiosity, creativity, and an occasional cup of mathca, I'm
      excited to keep learning, building, and hopefully avoiding those
      late-night{" "}
      <span className="font-bold text-brand-orange">debugging marathons!</span>
    </>,
    <>
      Greetings! I'm a{" "}
      <span className="font-bold text-brand-orange">
        3rd-year Informatics student
      </span>{" "}
      from UPN Veteran Jawa Timur on an adventure through the world of web
      development. I'm passionate about creating{" "}
      <span className="font-bold text-brand-orange">web applications</span> that
      are both{" "}
      <span className="font-bold text-brand-orange">
        functional and enjoyable
      </span>{" "}
      to use. Whether it's{" "}
      <span className="font-bold text-brand-orange">
        designing interactive user interfaces
      </span>
      , building{" "}
      <span className="font-bold text-brand-orange">efficient backends</span>,
      or spending way too long trying to figure out why my{" "}
      <span className="font-bold text-brand-orange">API</span> insists on
      returning a <span className="font-bold text-brand-orange">404</span> when
      the resource is definitely there, I'm always up for the challenge. For me,
      development isn't just about writing code; it's about creating tools and
      experiences that{" "}
      <span className="font-bold text-brand-orange">
        genuinely make a difference
      </span>{" "}
      for users while making new friends along the way.
    </>,
  ];

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
        {introductionMessage[intoductionSelector]}
      </p>
    </BackgroundBox>
  );
}
