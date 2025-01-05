import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import BtnWithoutIcon from "./BtnWithoutIcon";
import useAuthStore from "../stores/authStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 py-5">
      <div className="container mx-auto px-8 lg:px-14 flex items-center justify-between">
        {/* Logo Section */}
        <div className="relative z-50">
          <a href="/">
            <img width={150} src={logo} alt="logo" />
          </a>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden lg:flex space-x-8">
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Home
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            About
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Services
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Blog
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Icon toggles */}
          </button>
        </div>

        {/* Make Appointment Button for Desktop */}

        {isAuthenticated && (
          <div className="hidden lg:block">
            <BtnWithoutIcon text="Make Appointment" />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white fixed z-20 w-full h-full sm:text-center flex flex-col space-y-4 py-4 transition-all ease-linear duration-300 px-8 lg:px-14 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#"
          className="text-primaryBlack pt-2 text-base hover:text-sky-400 capitalize"
        >
          Home
        </a>
        <a
          href="#"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          About
        </a>
        <a
          href="#"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          Services
        </a>
        <a
          href="#"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-primaryBlack text-base pb-2 hover:text-sky-400 capitalize"
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
