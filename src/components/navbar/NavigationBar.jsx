import LogoDaffaFaiqSVG from "./LogoDaffaFaiqSVG";
import BurgerIcon from "./BurgerIcon";
import NavMenu from "./NavMenu";

function Navbar(props) {
  const navOpenDuration = 0.3;

  const navItems = [
    {
      name: "Home",
      href: "",
    },
    {
      name: "About",
      href: "",
    },
    {
      name: "Projects",
      href: "",
    },
    {
      name: "Contacts",
      href: "",
    },
  ];

  return (
    <>
      <div className="flex w-full items-center justify-between px-4 py-6 md:px-16 md:py-8">
        <div className="h-auto w-24 md:w-32 xl:w-36">
          <LogoDaffaFaiqSVG />
        </div>
        <nav className="hidden md:flex md:gap-6">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`text-center hover:text-brand-orange ${i === 0 ? "font-bold" : ""}`.trim()}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div
          className="relative z-10 flex flex-col items-end justify-center gap-1 md:hidden"
          onClick={() => props.setNavIsOpen(!props.navIsOpen)}
        >
          <BurgerIcon navIsOpen={props.navIsOpen} />
        </div>
      </div>

      <NavMenu
        navIsOpen={props.navIsOpen}
        navOpenDuration={navOpenDuration}
        navItems={navItems}
      />
    </>
  );
}
export default Navbar;
