// Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} />

      {/* Main Content */}
      <div className="flex-1 p-7">
        <h1 className="text-2xl font-bold">JHC Clinic Dashboard</h1>
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
