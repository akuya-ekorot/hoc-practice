import NavLink from "./NavLink";
import { navLinks } from "../lib/navLinks";

const NavBar = () => {
  return (
    <nav className="flex p-4 bg-gray-100">
      <div className="flex justify-center w-screen gap-4">
        {navLinks.map((navLink) => (
          <NavLink name={navLink} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
