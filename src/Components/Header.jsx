import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiDeleteBack2Fill } from "react-icons/ri";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans text-orange-700">
          My Real Estate
        </h1>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <RiDeleteBack2Fill size={26} /> : <RxHamburgerMenu size={26} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-[18px]">
          {["home", "about", "features", "sale", "demo", "services", "clients"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-gray-800 font-sans group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}

          <a
            href="#contact"
            className="py-2 px-4 bg-orange-700 border border-transparent rounded-lg text-white hover:bg-white hover:text-black hover:border-orange-700 transition duration-300"
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-5 pb-4">
          <nav className="flex flex-col space-y-4 text-[18px]">
            {["home", "about", "features", "sale", "demo", "services", "clients"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-800 font-sans border-b pb-1"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a
              href="#contact"
              className="py-2 px-4 bg-orange-700 rounded-lg text-white text-center hover:bg-white hover:text-black hover:border hover:border-orange-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
