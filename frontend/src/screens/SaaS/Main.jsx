import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import SaaSHeader from "./components/SaaSHeader";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7">
        <SaaSHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
