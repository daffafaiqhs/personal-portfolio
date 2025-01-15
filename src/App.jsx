import { useState } from "react";
import { Navbar, Hero, About } from "./components";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div
      className={`mx-3 h-screen xl:mx-5 2xl:flex 2xl:flex-col 2xl:items-center ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
    >
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <Hero />
      <About />
    </div>
  );
}

export default App;
