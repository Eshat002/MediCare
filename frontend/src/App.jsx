import React from "react";
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
import Dashboard from "./components/Dashboard";
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
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <ProtectedRoute>
              //   <Home />
              // </ProtectedRoute>

              <Home />
            }
          />

          <Route exact path="/doctors" element={<DoctorPage />} />
          <Route exact path="/services" element={<ServicePage />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          {/* activation after signup */}
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Fallback for Invalid URLs */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
