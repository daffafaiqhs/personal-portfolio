import Marquee from "react-fast-marquee";
import {
  HtmlLogo,
  CssLogo,
  JavascriptLogo,
  TailwindLogo,
  ChakraUiLogo,
  BootstrapLogo,
  GolangLogo,
  PostgreLogo,
  VscLogo,
  GithubLogo,
  PostmanLogo,
  FigmaLogo,
  LaravelLogo,
} from "../../assets";
import React from "react";

export function TechStack() {
  const icons = [
    <HtmlLogo />,
    <CssLogo />,
    <JavascriptLogo />,
    <TailwindLogo />,
    <ChakraUiLogo />,
    <BootstrapLogo />,
    <GolangLogo />,
    <LaravelLogo />,
    <PostgreLogo />,
    <VscLogo />,
    <GithubLogo />,
    <PostmanLogo />,
    <FigmaLogo />,
  ];

  return (
    <section className="my-2 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-orange py-2 sm-md:max-w-[415px] md:my-6 md:max-w-full 2xl:max-w-[1533px]">
      <Marquee
        className="overflow-hidden rounded bg-white"
        pauseOnHover
        autoFill
        gradient
        gradientColor="#f4f4f4"
        gradientWidth={100}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="mr-10 text-[3rem] md:mr-14"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {React.cloneElement(icon, {
              className: "h-10 my-4 lg:h-11 xl:h-12 2xl:h-14",
            })}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
