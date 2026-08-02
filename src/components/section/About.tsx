import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BackgroundBox } from "../BackgroundBox";
import { contacts, introductions } from "../../content";
import { Potrait } from "../../assets";

function AboutComponent(_props: React.ComponentProps<"section">, ref: React.ForwardedRef<HTMLElement>) {
  return (
    <section
      ref={ref}
      className="grid-rows-[1fr, auto] grid scroll-mt-40 gap-4 md:grid-cols-2 md:grid-rows-1"
    >
      <SelfPotrait />
      <Description />
    </section>
  );
}

export const AboutSection = React.forwardRef(AboutComponent);

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
        {contacts.map((contact) =>
          <motion.a key={contact.name}
            className="rounded-full border border-gray-500 bg-transparent p-1 text-xl sm:p-2 sm:text-xl lg:text-3xl"
            href={contact.url}
            target="_blank"
            whileHover={{
              backgroundColor: "#FF933F",
              borderColor: "#FF933F",
              color: "#FFF",
            }}
          >
            <contact.logo />
          </motion.a>
        )}
      </div>
      <img
        src={Potrait}
        alt="Daffa's Profile"
        width={"360px"}
        className="sm:w-auto lg:w-10/12 lg:max-w-[480px] xl:max-w-[550px] 2xl:max-h-[860px]"
      />
    </BackgroundBox>
  );
}

function Description() {
  const [intoductionIndex, setIntroductionindex] = useState(2);

  return (
    <BackgroundBox className="flex min-h-[500px] flex-col items-center gap-4 p-6">
      <h1 className="text-sm font-light">Adjust my introduction length</h1>
      <div className="w-fit">
        <div className="flex gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-full bg-gray-200 p-3"
              onClick={() => setIntroductionindex(index)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-brand-yellow to-brand-orange"
                animate={{ opacity: intoductionIndex === index ? 1 : 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs font-light">
          <p>shortest</p>
          <p>longest</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={intoductionIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-5 text-justify text-xs font-light leading-loose xl:text-base xl:leading-loose"
        >
          {introductions[intoductionIndex]}
        </motion.p>
      </AnimatePresence>
    </BackgroundBox>
  );
}
