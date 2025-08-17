import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import BtnWithoutIcon from "./BtnWithoutIcon";
import useAuthStore from "../stores/authStore";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import AppointmentBtn from "./AppointmentBtn";
import { TiArrowRight } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const goToForm = () => {
    const pagesWithoutForm = ["/blog", "/contact"];

    if (pagesWithoutForm.includes(location.pathname)) {
      // Go to the default form page, e.g. /services
      navigate("/#appointment-form");
    } else {
      // Same page - just scroll to the form section
      navigate(`${location.pathname}#appointment-form`);
    }
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
          <Link
            to="/"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-primaryBlack text-base hover:text-sky-400 capitalize"
          >
            Blog
          </Link>
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
            <AppointmentBtn
              text="Make Appointment"
              onClick={() => console.log("dog")}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white fixed z-20 w-full h-full sm:text-center flex flex-col space-y-4 py-4 transition-all ease-linear duration-300 px-8 lg:px-14 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="text-primaryBlack pt-2 text-base hover:text-sky-400 capitalize"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-primaryBlack text-base hover:text-sky-400 capitalize"
        >
          Contact
        </Link>
        <Link
          to="/blog"
          className="text-primaryBlack text-base pb-2 hover:text-sky-400 capitalize"
        >
          Blog
        </Link>
        {isAuthenticated && (
          <div className="lg:hidden block">
            <BtnWithoutIcon onClick={goToForm} text="Make Appointment" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
