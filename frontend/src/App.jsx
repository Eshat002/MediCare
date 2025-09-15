import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home";
import DoctorPage from "./screens/DoctorPage";
import Layout from "./hocs/Layout";
import useAuthStore from "./stores/authStore";
import Login from "./screens/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./screens/SaaS/Dashboard";
import { useEffect } from "react";
import TestLogin from "./screens/TestLogin";
import ResetPassword from "./screens/ResetPassword";
import ResetPasswordConfirm from "./screens/ResetPasswordConfirm";
import Signup from "./screens/Signup";
import Activate from "./screens/Activate";
import ResendActivation from "./screens/ResendActivation";
import Logout from "./screens/Logout";
import PublicRoute from "./components/PublicRoute";
import ServicePage from "./screens/ServicePage";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import ScrollToHashElement from "./components/ScrollToHashElement";
import Patients from "./screens/SaaS/Patients";
import Appointments from "./screens/SaaS/Appoitments";
import Doctors from "./screens/SaaS/Doctors";
import Messages from "./screens/SaaS/Messages";
import Education from "./screens/SaaS/MedicalContent";
import Inventory from "./screens/SaaS/MedicalInventory";
import Settings from "./screens/SaaS/Settings";
import Main from "./screens/SaaS/main";

const App = () => {
  const { loadUser, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      loadUser();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <Layout>
        <ScrollToHashElement />
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Auth pages */}
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/resend/activation-url" element={<ResendActivation />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/test-login" element={<TestLogin />} />

          {/* SaaS section (with Sidebar always visible) */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Dashboard />}
              handle={{ title: "Dashboard" }}
            />
            <Route
              path="patients"
              element={<Patients />}
              handle={{ title: "Patients" }}
            />
            <Route
              path="appointments"
              element={<Appointments />}
              handle={{ title: "Appointments" }}
            />
            <Route
              path="doctors"
              element={<Doctors />}
              handle={{ title: "Doctors" }}
            />
            <Route
              path="messages"
              element={<Messages />}
              handle={{ title: "Messages" }}
            />
            <Route
              path="education"
              element={<Education />}
              handle={{ title: "Education" }}
            />
            <Route
              path="inventory"
              element={<Inventory />}
              handle={{ title: "Inventory" }}
            />
            <Route
              path="settings"
              element={<Settings />}
              handle={{ title: "Settings" }}
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
