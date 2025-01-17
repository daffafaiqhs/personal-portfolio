import { useState } from "react";
import { Navbar, Hero, About } from "./components";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div
      className={`mx-3 h-screen sm-md:flex sm-md:flex-col sm-md:items-center md:block xl:mx-5 2xl:flex 2xl:flex-col 2xl:items-center ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
    >
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <div className="flex flex-col gap-8">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
