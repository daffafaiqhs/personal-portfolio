import React from "react";
import { motion } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import { BackgroundBox } from "../BackgroundBox";
import { HeroIconSVG } from "../../assets";
import { scrollToSection } from "../../shared/utils";

type HeroComponentProps = React.ComponentProps<"div"> & {
  aboutSectionRef: React.RefObject<HTMLDivElement | null>;
};

function HeroComponent(props: HeroComponentProps, ref: React.ForwardedRef<React.ComponentRef<"div">>) {
  return (
    <BackgroundBox
      className="flex scroll-mt-40 flex-col items-center gap-2 p-6 pb-0 md:relative md:!flex-row md:items-start md:justify-around md:px-8 md:pt-7"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-8 md:items-start">
        <h1 className="text-center text-sm font-light md:hidden">
          Daffa's Software Developer Portfolio
        </h1>
        <div className="flex flex-col gap-2 text-4.5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <h1 className="font-light">
            Turning{" "}
            <span className="hidden text-xs md:inline-block lg:text-sm xl:text-base">
              Daffa's Software <br /> Engineering Portfolio
            </span>
          </h1>
          <h1 className="font-bold">Bold Ideas</h1>
          <div className="flex items-center md:gap-1">
            <div className="mx-3 aspect-[9/16] h-9 rounded-md bg-gradient-to-b from-brand-orange to-brand-yellow md:h-12 xl:h-16" />
            <h1 className="inline whitespace-nowrap font-light">
              Into <span className="font-bold">Reality!</span>
            </h1>
          </div>
        </div>
        <motion.button
          className="my-4 flex items-center justify-center gap-2 rounded-lg border border-gray-500 px-16 py-1 text-xs font-light sm:px-20 md:px-32 lg:px-40 lg:text-sm xl:px-56 xl:text-base"
          whileHover={{
            borderColor: "#FF933F",
            color: "#FF933F",
          }}
          onClick={() => {
            scrollToSection(props.aboutSectionRef, 0);
          }}
        >
          <FiArrowDown />
          Who is Daffa Faiq?
        </motion.button>
      </div>
      <HeroIconSVG />
    </BackgroundBox>
  );
}

export const HeroSection = React.forwardRef(HeroComponent);
