import { motion } from "motion/react";
import BackgroundBox from "./BackgroundBox";
import HeroIconSVG from "./HeroIconSVG";

function Hero() {
  return (
    <BackgroundBox className="flex flex-col items-center gap-2 pb-0 md:relative md:flex-row md:items-start md:justify-around md:pb-0">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <h1 className="text-center text-xs font-light md:hidden">
          Daffa's 3rd Year Informatics Student's Portfolio
        </h1>
        <div className="text-4.5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <h1 className="font-light">
            Coding{" "}
            <span className="hidden text-xs md:inline-block lg:text-sm xl:text-base">
              Daffa's 3rd Year Informatics <br /> Student's Portfolio
            </span>
          </h1>
          <h1 className="font-bold">Tommorow's</h1>
          <div className="flex items-center md:gap-1">
            <div className="mx-3 aspect-[9/16] h-9 rounded-md bg-gradient-to-b from-brand-orange to-brand-yellow md:h-12 xl:h-16" />
            <h1 className="inline font-light">
              Web <span className="font-bold">Today!</span>
            </h1>
          </div>
        </div>
        <motion.button
          className="my-4 flex items-center justify-center gap-1 rounded-lg border border-gray-500 px-16 py-1 text-xs font-light sm:px-20 md:px-32 lg:px-40 lg:text-sm xl:px-56 xl:text-base"
          whileHover={{ borderColor: "#FF933F", color: "#FF760B" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 5v12.25L17.25 12l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 17.25V5z"
            />
          </svg>
          Who is Daffa Faiq?
        </motion.button>
      </div>
      <HeroIconSVG />
    </BackgroundBox>
  );
}
export default Hero;
