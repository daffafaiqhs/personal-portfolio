import { motion } from "motion/react";

import { AnimatedNameLogo } from "../../assets/logo";
import { BurgerIcon } from "../../assets/";

const scrollTo = (itemName, itemRef, delaySecond) => {
  // if (itemRef.current) {
  const itemRefOffsetTop = itemName === "Home" ? 0 : itemRef.current?.offsetTop;
  const offset = itemName === "Home" ? 0 : 100;

  setTimeout(() => {
    window.scrollTo({
      top: itemRefOffsetTop - offset,
      behavior: "smooth",
    });
  }, delaySecond * 1000);
  // }
};

export function Navbar(props) {
  const navOpenDuration = 0.3;

  const navItems = [
    {
      name: "Home",
      ref: props.listRef.heroRef,
    },
    {
      name: "About",
      ref: props.listRef.aboutRef,
    },
    {
      name: "Experiences",
      ref: props.listRef.experiencesRef,
    },
    {
      name: "Projects",
      ref: props.listRef.projectsRef,
    },
    {
      name: "Contacts",
      ref: props.listRef.contactRef,
    },
  ];

  const setNavState = () => {
    if (!props.navIsOpen) {
      scrollTo("Home", 0, 0);
    }

    setTimeout(
      () => {
        props.setNavIsOpen(!props.navIsOpen);
      },
      props.navIsOpen || window.scrollY === 0 ? 0 : 1000,
    );
  };

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
                scrollTo(item.name, item.ref, 0);
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        <div
          className="relative flex flex-col items-end justify-center gap-1 md:hidden"
          onClick={setNavState}
        >
          <BurgerIcon navIsOpen={props.navIsOpen} />
        </div>
      </div>

      <MobileNavbar
        navIsOpen={props.navIsOpen}
        setNavIsOpen={props.setNavIsOpen}
        navOpenDuration={navOpenDuration}
        navItems={navItems}
      />
    </>
  );
}

function MobileNavbar(props) {
  let screenHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );

  let i = 0;

  const navItemHTML = props.navItems.map((item, index) => {
    const tagHTML = (
      <motion.button
        key={item.name}
        className="flex flex-col text-white opacity-0"
        onClick={() => {
          props.setNavIsOpen(!props.navIsOpen);
          scrollTo(item.name, item.ref, 0.5);
        }}
        animate={
          props.navIsOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
        }
        transition={{
          delay: props.navIsOpen
            ? props.navOpenDuration * 1.5 + i
            : props.navOpenDuration,
          duration: props.navIsOpen ? 0.6 : 0,
        }}
      >
        <p className="w-fit text-lg"> {String(index + 1).padStart(2, "0")} </p>
        {item.name}
      </motion.button>
    );

    i += 0.2;

    return tagHTML;
  });

  return (
    <motion.div
      className="absolute -bottom-96 left-0 right-0 top-0 z-40 hidden h-full w-full flex-col gap-9 overflow-hidden bg-black text-4xl text-stone-700 sm:text-5xl sm-md:items-center md:opacity-0"
      initial={{ y: -1 * screenHeight }}
      animate={
        props.navIsOpen
          ? {
              y: 0,
              display: "block",
            }
          : { y: -1 * screenHeight }
      }
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
