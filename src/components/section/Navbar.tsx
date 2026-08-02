import { AnimatePresence, motion } from "motion/react";
import { AnimatedNameLogo } from "../../assets/logo";
import { BurgerIcon } from "../../assets";
import { scrollToSection } from "../../shared/utils";

interface NavbarProps {
  refs: {
    heroSectionRef: React.RefObject<React.ComponentRef<"div"> | null>,
    aboutSectionRef: React.RefObject<React.ComponentRef<"div"> | null>,
    experiencesSectionRef: React.RefObject<React.ComponentRef<"div"> | null>,
    projectsSectionRef: React.RefObject<React.ComponentRef<"div"> | null>,
    contactSectionRef: React.RefObject<React.ComponentRef<"div"> | null>,
  },
  setNavIsOpen: (status: boolean) => void
  navIsOpen: boolean
}

export function Navbar(props: NavbarProps) {
  const navOpenDuration = 0.3;

  const navItems = [
    {
      name: "Home",
      ref: props.refs.heroSectionRef,
    },
    {
      name: "About",
      ref: props.refs.aboutSectionRef,
    },
    {
      name: "Experiences",
      ref: props.refs.experiencesSectionRef,
    },
    {
      name: "Projects",
      ref: props.refs.projectsSectionRef,
    },
    {
      name: "Contacts",
      ref: props.refs.contactSectionRef,
    },
  ];

  return (
    <>
      <div className="fixed start-0 z-50 flex w-full items-center justify-between p-4 backdrop-blur-sm sm:p-6 sm-md:start-auto sm-md:w-[415px] md:start-0 md:w-full md:p-7 2xl:start-auto 2xl:w-2xl">
        <div className="h-auto w-24 md:w-32 xl:w-36">
          <AnimatedNameLogo />
        </div>
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, i) => (
            <motion.button
              key={i}
              className="relative text-center"
              whileHover={{ color: "#FF933F" }}
              onClick={() => {
                scrollToSection(item.ref, 0);
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        <div
          className="relative flex flex-col items-end justify-center gap-1 md:!hidden cursor-pointer"
          onClick={() => props.setNavIsOpen(!props.navIsOpen)}
        >
          <BurgerIcon navIsOpen={props.navIsOpen} />
        </div>
      </div>

      <AnimatePresence>
        {props.navIsOpen &&
          <MobileNavbar
            navIsOpen={props.navIsOpen}
            setNavIsOpen={props.setNavIsOpen}
            navOpenDuration={navOpenDuration}
            navItems={navItems}
          />
        }
      </AnimatePresence>
    </>
  );
}

type MobileNavbarProps = Omit<NavbarProps, "refs"> & {
  navOpenDuration: number,
  navItems: {
    name: string;
    ref: React.RefObject<React.ComponentRef<"div"> | null>;
  }[]
}

function MobileNavbar(props: MobileNavbarProps) {
  const screenHeight = window.visualViewport
    ? window.visualViewport.height
    : Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    );

  const navItemHTML = props.navItems.map((item, index) => {
    const tagHTML = (
      <motion.button
        key={item.name}
        className="flex flex-col items-center text-white opacity-0"
        onClick={() => {
          props.setNavIsOpen(!props.navIsOpen);
          scrollToSection(item.ref, 0.5);
        }}
        animate={
          props.navIsOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
        }
        transition={{
          delay: props.navIsOpen
            ? props.navOpenDuration * 1.5 + index * 0.2
            : props.navOpenDuration,
          duration: props.navIsOpen ? 0.6 : 0,
        }}
      >
        <p className="w-fit text-lg mb-2"> {String(index + 1).padStart(2, "0")} </p>
        {item.name}
      </motion.button>
    );

    return tagHTML;
  });

  return (
    <motion.div
      className="fixed -bottom-96 left-0 right-0 top-0 z-40 h-dvh w-full flex-col gap-9 overflow-hidden bg-black text-4xl text-stone-700 sm:text-5xl sm-md:items-center md:opacity-0"
      initial={{ y: -screenHeight }}
      animate={{ y: 0 }}
      exit={{ y: -screenHeight }}
      transition={{
        duration: props.navOpenDuration,
      }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <nav className="flex flex-col gap-9">{navItemHTML}</nav>
      </div>
    </motion.div>
  );
}
