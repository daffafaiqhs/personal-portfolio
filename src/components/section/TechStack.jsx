import Marquee from "react-fast-marquee";
import * as AssetsLogo from "../../assets/logo";
import React from "react";

export function TechStack() {
  const icons = [
    <AssetsLogo.HtmlLogo />,
    <AssetsLogo.CssLogo />,
    <AssetsLogo.JavascriptLogo />,
    <AssetsLogo.ReactLogo />,
    <AssetsLogo.TailwindLogo />,
    <AssetsLogo.ChakraUiLogo />,
    <AssetsLogo.BootstrapLogo />,
    <AssetsLogo.GolangLogo />,
    <AssetsLogo.LaravelLogo />,
    <AssetsLogo.PostgreLogo />,
    <AssetsLogo.VscLogo />,
    <AssetsLogo.GithubLogo />,
    <AssetsLogo.PostmanLogo />,
    <AssetsLogo.FigmaLogo />,
  ];

  return (
    <section className="my-2 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-orange py-2 md:my-6 md:max-w-full 2xl:max-w-[1533px]">
      <Marquee
        className="overflow-hidden rounded bg-white"
        pauseOnHover
        pauseOnClick
        autoFill
        gradient
        gradientColor="#f4f4f4"
        gradientWidth={100}
        speed={25}
      >
        {icons.map((icon, index) => (
          <div key={index} className="mr-10 text-[3rem] md:mr-14">
            {React.cloneElement(icon, {
              className: "h-10 my-4 lg:h-11 xl:h-12 2xl:h-14",
            })}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
