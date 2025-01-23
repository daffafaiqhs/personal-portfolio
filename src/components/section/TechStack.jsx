import React from "react";
import Marquee from "react-fast-marquee";

import { techStack_Logo } from "../../portfolioContent";

export function TechStack() {
  return (
    <section className="z-0 my-2 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-orange py-2 md:my-6 md:max-w-full 2xl:max-w-[1533px]">
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
        {Object.keys(techStack_Logo).map((key) => (
          <div key={key} className="mr-10 text-[3rem] md:mr-14">
            {React.createElement(techStack_Logo[key], {
              className: "my-4 h-10 lg:h-11 xl:h-12 2xl:h-14",
            })}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
