import { Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-none flex mt-9">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            className="text-base font-semibold leading-6 text-white"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="text-base font-semibold leading-6 text-white"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-base font-semibold leading-6 text-white"
            to="/work"
          >
            Work
          </NavLink>
          <NavLink
            className="text-base font-semibold leading-6 text-white"
            to="/fun"
          >
            Fun
          </NavLink>
          <NavLink
            className="text-base font-semibold leading-6 text-white"
            to="/contact"
          >
            Contact
          </NavLink>
        </Popover.Group>
      </nav>
    </header>
  );
};
