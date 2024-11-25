import { motion } from "motion/react";

function NavMenu(props) {
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
      className="absolute -bottom-96 left-0 right-0 top-0 hidden h-full w-full flex-col gap-9 bg-black px-14 pt-28 text-5xl text-stone-700"
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

export default NavMenu;
