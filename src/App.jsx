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

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

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
            <Hero ref={heroRef} scrollTo={scrollTo} aboutRef={aboutRef} />
            <About ref={aboutRef} />
            <Experiences ref={experiencesRef} />
            <TechStack />
            <Projects ref={projectsRef} />
          </div>
        </div>
        <Contact ref={contactRef} />
        <Footer className="mx-3 xl:mx-5" />
      </div>
    </>
  );
}

export default App;
