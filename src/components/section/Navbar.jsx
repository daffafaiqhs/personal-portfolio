import { BurgerIcon, LogoDaffaFaiqSVG } from "../../assets";
import { motion } from "motion/react";

export function Navbar(props) {
  const navOpenDuration = 0.3;

  const navItems = [
    {
      name: "Home",
      href: "",
    },
    {
      name: "About",
      href: "",
    },
    {
      name: "Projects",
      href: "",
    },
    {
      name: "Contacts",
      href: "",
    },
  ];

  return (
    <>
      <div className="sm-md:w-[415px] flex w-full items-center justify-between p-4 md:w-auto md:p-8 2xl:w-2xl">
        <div className="h-auto w-24 md:w-32 xl:w-36">
          <LogoDaffaFaiqSVG />
        </div>
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className={`text-center ${i === 0 ? "font-bold" : ""}`.trim()}
              whileHover={{ color: "#FF933F" }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div
          className="relative z-50 flex flex-col items-end justify-center gap-1 md:hidden"
          onClick={() => props.setNavIsOpen(!props.navIsOpen)}
        >
          <BurgerIcon navIsOpen={props.navIsOpen} />
        </div>
      </div>

      <MobileNavbar
        navIsOpen={props.navIsOpen}
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
      <motion.a
        key={item.name}
        href={item.href}
        className={`${index === 0 ? "text-white" : ""} opacity-0 active:text-white`.trim()}
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
        <p className="text-lg"> {String(index + 1).padStart(2, "0")} </p>
        {item.name}
      </motion.a>
    );

    i += 0.2;

    return tagHTML;
  });

  return (
    <motion.div
      className="absolute -bottom-96 left-0 right-0 top-0 z-40 hidden h-full w-full flex-col gap-9 bg-black px-14 pt-28 text-5xl text-stone-700"
      initial={{ y: -1 * screenHeight }}
      animate={
        props.navIsOpen ? { y: 0, display: "flex" } : { y: -1 * screenHeight }
      }
      transition={{
        duration: props.navOpenDuration,
      }}
    >
      <nav className="flex flex-col gap-9">{navItemHTML}</nav>
    </motion.div>
  );
}
