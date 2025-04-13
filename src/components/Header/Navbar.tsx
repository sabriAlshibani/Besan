"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import List from "./List";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="py-10 relative">
      <div className="container mx-auto flex justify-between items-center text-lg h-[72px]">
        {/* Logo */}
        <a href="" className="text-primary font-bold text-[30px] max-sm:text-[30px]">
          بيسان
        </a>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="max-md:block md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Menu Links */}
        <ul
          className={`flex justify-end flex-1 font-cairo items-center gap-12 z-[9999] max-md:text-[#7e9019] max-md:absolute max-md:flex-col max-md:right-2 max-md:top-[100%] max-md:shadow-lg p-[20px] max-md:bg-white transition-opacity duration-300 ${
            isMenuOpen ? "max-md:opacity-100" : "max-md:opacity-0"
          }`}
        >
          <List isOpen={isMenuOpen}/>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
