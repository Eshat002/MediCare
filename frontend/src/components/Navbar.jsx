import React from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-10 md:px-20 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <img width={150} src={logo} alt="logo" />
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Home
          </a>
          <a
            href="#"
            className="text-link-color text-base hover:text-sky-400 capitalize"
          >
            About
          </a>
          <a
            href="#"
            className="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Services
          </a>
          <a
            href="#"
            className="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-link-color text-base hover:text-sky-400 capitalize"
          >
            blog
          </a>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Icon toggles */}
          </button>
        </div>
        {/* Make Appointment button */}
        <div className="hidden md:block">
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-sky-500">
            Make Appointment
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white flex flex-col space-y-4 p-4 transition ease-linear duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="text-link-color text-base hover:text-sky-400 capitalize"
        >
          Home
        </a>
        <a
          href="#"
          className="text-link-color text-base hover:text-sky-400 capitalize"
        >
          About
        </a>
        <a
          href="#"
          className="text-link-color text-base hover:text-sky-400 capitalize"
        >
          Services
        </a>
        <a
          href="#"
          className="text-link-color text-base hover:text-sky-400 capitalize"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-link-color text-base hover:text-sky-400 capitalize"
        >
          Blog
        </a>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-sky-500">
          Make Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
