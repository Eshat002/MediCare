import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav class="px-20 py-5">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white">
          <img src={logo} alt="logo" />
        </div>

        <div class="hidden md:flex space-x-8">
          <a
            href="#"
            class="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Home
          </a>
          <a
            href="#"
            class="text-link-color text-base hover:text-sky-400 capitalize"
          >
            About
          </a>
          <a
            href="#"
            class="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Services
          </a>
          <a
            href="#"
            class="text-link-color text-base hover:text-sky-400 capitalize"
          >
            Contact
          </a>
          <a
            href="#"
            class="text-link-color text-base hover:text-sky-400 capitalize"
          >
            blog
          </a>
        </div>

        <div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Make Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
