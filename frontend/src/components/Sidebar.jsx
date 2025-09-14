import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaCalendarAlt,
  FaUserMd,
  FaEnvelope,
  FaBook,
  FaPills,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import MobileLogo from "../assets/logo-mobile.png";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/app" },
    { name: "Patients", icon: <FaUserInjured />, path: "/app/patients" },
    {
      name: "Appointments",
      icon: <FaCalendarAlt />,
      path: "/app/appointments",
    },
    { name: "Doctors", icon: <FaUserMd />, path: "/app/doctors" },
    { name: "Messages", icon: <FaEnvelope />, path: "/app/messages" },
    { name: "Education Content", icon: <FaBook />, path: "/app/education" },
    { name: "Medicine Inventory", icon: <FaPills />, path: "/app/inventory" },
    { name: "Settings", icon: <FaCog />, path: "/app/settings" },
  ];

  return (
    <div className="h-screen flex flex-col w-20 md:w-64 bg-white p-5 shadow">
      {/* Logo */}
      <div className="logo-container mb-10">
        <img className="hidden md:block" src={logo} alt="logo" />
        <img className="md:hidden" src={MobileLogo} alt="mobile-logo" />
      </div>

      {/* Menu */}
      <div className="flex-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/app"} // ensures /app only matches Dashboard exactly
            className={({ isActive }) =>
              `group relative flex items-center gap-4 p-2 rounded-md cursor-pointer mt-3 justify-center md:justify-start 
              ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-sky-100"
              }`
            }
          >
            <div className="text-lg">{item.icon}</div>
            <span className="text-sm hidden md:block">{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <NavLink
        to="/logout"
        className={({ isActive }) =>
          `group relative flex items-center gap-4 p-2 rounded-md cursor-pointer mt-2 justify-center md:justify-start 
          ${
            isActive
              ? "bg-red-500 text-white"
              : "text-gray-500 hover:bg-red-100"
          }`
        }
      >
        <div className="text-lg">
          <FaSignOutAlt />
        </div>
        <span className="text-sm hidden md:block">Logout</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
