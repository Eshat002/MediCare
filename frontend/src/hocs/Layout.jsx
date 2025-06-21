// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current route

  // Define routes where the footer should be hidden
  const hideFooterRoutes = [
    "/login",
    // "/activate/:uid/:token",
    "/signup",
     "/reset-password",
  ];

  return (
    <div>
      <Navbar />
      {children}
      {/* Render Footer only if the current route is not in the hideFooterRoutes */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
