import { motion } from "motion/react";

function BurgerIcon(props) {
  return (
    <div className="flex flex-col items-end justify-center gap-1">
      <motion.div
        animate={
          props.navIsOpen
            ? { rotate: -45, y: 4, backgroundColor: "#fff" }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
        className="h-1 w-6 rounded-sm bg-black"
      />
      <motion.div
        animate={
          props.navIsOpen
            ? { rotate: 45, y: -4, width: "24px", backgroundColor: "#fff" }
            : { rotate: 0, y: 0 }
        }
        transition={{ duration: 0.3 }}
        className="h-1 w-4 rounded-sm bg-black"
      />
    </div>
  );
}
export default BurgerIcon;
