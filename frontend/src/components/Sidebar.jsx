// Sidebar.jsx
import React from "react";
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
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Patients", icon: <FaUserInjured /> },
    { name: "Appointments", icon: <FaCalendarAlt /> },
    { name: "Doctors", icon: <FaUserMd /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Education Content", icon: <FaBook /> },
    { name: "Medicine Inventory", icon: <FaPills /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="h-screen flex flex-col transition-all duration-300 w-20 md:w-64 bg-white p-5">
      {/* Logo */}
      <div className="logo-container mb-10">
        <img className="hidden md:block" src={logo} alt="logo" />
        <img className="md:hidden" src={MobileLogo} alt="mobile-logo" />
      </div>

      {/* Menu Items */}
      <div className="flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center gap-4 p-2 rounded-md hover:bg-blue-100 cursor-pointer mt-3 justify-center md:justify-start"
          >
            <div className="text-gray-500 text-lg flex-shrink-0">
              {item.icon}
            </div>
            <span className="text-gray-500 text-sm hidden md:block">
              {item.name}
            </span>

            {/* Tooltip only on mobile (when menu is collapsed) */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 md:hidden">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="group relative flex items-center gap-4 p-2 rounded-md hover:bg-red-100 cursor-pointer mt-2 justify-center md:justify-start">
        <div className="text-gray-500 text-lg flex-shrink-0">
          <FaSignOutAlt />
        </div>
        <span className="text-gray-500 text-sm hidden md:block">Logout</span>

        {/* Tooltip only on mobile */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 md:hidden">
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
