import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex">
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Page Content changes here */}
      <div className="flex-1 p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
