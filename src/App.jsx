import { useState } from "react";
import Navbar from "./components/navbar/NavigationBar";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <div
      className={`mx-3 xl:mx-5 ${navIsOpen ? "h-screen overflow-hidden" : ""}`.trim()}
    >
      <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
    </div>
  );
}

export default App;
