import { mainTechStack, techStack } from "../../content";
import { ReactMarques } from "react-marques";


export function TechStackSection() {
  return (
    <section className="z-0 my-2 rounded-xl bg-gradient-to-r from-brand-yellow/70 to-brand-orange/70 py-2 md:my-6 md:max-w-full 2xl:max-w-[1533px]">
      <ReactMarques
        className="overflow-hidden rounded bg-white"
        fade={true}
        pauseOnHover
      >
        {mainTechStack.map((stackName, index) => {
          const Logo = techStack[stackName].logo;

          return (
            <div key={index} className="mr-10 text-[3rem] md:mr-14">
              <Logo className="my-4 h-10 lg:h-11 xl:h-12 2xl:h-14" />
            </div>
          );
        })}
      </ReactMarques>
    </section>
  );
}
