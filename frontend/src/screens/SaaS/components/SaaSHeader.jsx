import { FaBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const SaaSHeader = () => {
  const location = useLocation();

  // Map pathnames to titles
  const titles = {
    "/app": "Dashboard",
    "/app/patients": "Patients",
    "/app/appointments": "Appointments",
    "/app/doctors": "Doctors",
    "/app/messages": "Messages",
    "/app/education": "Education",
    "/app/inventory": "Inventory",
    "/app/settings": "Settings",
  };

  const title = titles[location.pathname] || "Untitled";

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-gray-600 w-6 h-6 cursor-pointer hover:text-gray-800" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Author"
            className="w-10 h-10 rounded-full border"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SaaSHeader;
