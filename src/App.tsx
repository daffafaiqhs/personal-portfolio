import {
  Navbar,
  HeroSection,
  AboutSection,
  ExperiencesSection,
  TechStackSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "./components/section";
import "react-photo-view/dist/react-photo-view.css";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";


function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroSectionRef = useRef<React.ComponentRef<"div"> | null>(null);
  const aboutSectionRef = useRef<React.ComponentRef<"div"> | null>(null);
  const experiencesSectionRef = useRef<React.ComponentRef<"div"> | null>(null);
  const projectsSectionRef = useRef<React.ComponentRef<"div"> | null>(null);
  const contactSectionRef = useRef<React.ComponentRef<"div"> | null>(null);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navIsOpen]);

  return (
    <>
      <div
        className={`sm-md:flex sm-md:flex-col sm-md:items-center md:block 2xl:flex 2xl:flex-col 2xl:items-center`.trim()}
      >
        <div className="mx-3 xl:mx-5">
          <Navbar
            navIsOpen={navIsOpen}
            setNavIsOpen={setNavIsOpen}
            refs={{
              heroSectionRef,
              aboutSectionRef,
              experiencesSectionRef,
              projectsSectionRef,
              contactSectionRef,
            }}
          />
          <div className="flex flex-col gap-4 pt-16 sm:pt-20 sm-md:w-sm-md md:w-auto md:pt-24 2xl:w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.2 }}
              transition={{ duration: 0.6, delay: hasAnimated ? 0 : 1.5 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <HeroSection ref={heroSectionRef} aboutSectionRef={aboutSectionRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.08 : 0.3 }}
              transition={{ duration: 0.4, delay: hasAnimated ? 0 : 1.7 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <AboutSection ref={aboutSectionRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.3 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <ExperiencesSection ref={experiencesSectionRef} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.7 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <TechStackSection />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: isSmallScreen ? 0.05 : 0.1 }}
              transition={{ duration: 0.4 }}
              onViewportEnter={() => setHasAnimated(true)}
            >
              <ProjectsSection ref={projectsSectionRef} />
            </motion.div>
          </div>
        </div>
        <ContactSection ref={contactSectionRef} />
        <Footer className="mx-3 xl:mx-5" />
      </div>
    </>
  );
}

export default App;
