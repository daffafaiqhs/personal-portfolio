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
} from "./components";

import "react-photo-view/dist/react-photo-view.css";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <div
        className={`sm-md:flex sm-md:flex-col sm-md:items-center md:block 2xl:flex 2xl:flex-col 2xl:items-center ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
      >
        <div className="mx-3 xl:mx-5">
          <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
          <div className="flex flex-col gap-4 sm-md:w-sm-md md:w-auto 2xl:w-2xl">
            <Hero />
            <About />
            <Experiences />
            <TechStack />
            <Projects />
          </div>
        </div>
        <Contact />
        <Footer className="mx-3 xl:mx-5" />
      </div>
    </>
  );
}

export default App;
