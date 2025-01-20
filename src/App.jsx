import { useState } from "react";
import { Navbar, Hero, About, TechStack, Projects } from "./components";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div
      className={`mx-3 h-screen sm-md:flex sm-md:flex-col sm-md:items-center md:block xl:mx-5 2xl:flex 2xl:flex-col 2xl:items-center ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
    >
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <div className="sm-md:w-sm-md flex flex-col gap-4 md:w-auto 2xl:w-2xl">
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
