import { useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Experiences,
  TechStack,
  Projects,
  Contact,
  Footer,
} from "./components/section";

import "react-photo-view/dist/react-photo-view.css";
import { useRef } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";

const scrollTo = (itemName, itemRef, delaySecond) => {
  // if (itemRef.current) {
  // const itemRefOffsetTop = itemName === "Home" ? 0 : itemRef.current?.offsetTop;
  // const offset = itemName === "Home" ? 0 : 120;
  // const y = itemRef.current.getBoundingClientRect().top + window.scrollY;

  setTimeout(() => {
    itemRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, delaySecond * 1000);
  // }
};

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`sm-md:flex sm-md:flex-col sm-md:items-center md:block 2xl:flex 2xl:flex-col 2xl:items-center ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
      >
        <div className="mx-3 xl:mx-5">
          <Navbar
            navIsOpen={navIsOpen}
            setNavIsOpen={setNavIsOpen}
            listRef={{
              heroRef,
              aboutRef,
              experiencesRef,
              projectsRef,
              contactRef,
            }}
            scrollTo={scrollTo}
          />
          <div className="flex flex-col gap-4 pt-16 sm:pt-20 sm-md:w-sm-md md:w-auto md:pt-24 2xl:w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.2 }}
              transition={{ duration: 0.6, delay: hasAnimated ? 0 : 1.5 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <Hero ref={heroRef} scrollTo={scrollTo} aboutRef={aboutRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.08 : 0.3 }}
              transition={{ duration: 0.4, delay: hasAnimated ? 0 : 1.7 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <About ref={aboutRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.3 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <Experiences ref={experiencesRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.7 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <TechStack />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.1 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <Projects ref={projectsRef} />
            </motion.div>
          </div>
        </div>
        <Contact ref={contactRef} />
        <Footer className="mx-3 xl:mx-5" />
      </div>
    </>
  );
}

export default App;
