import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home";
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
          <Route exact path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          {/* activation after signup */}
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/resend/activation-url" element={<ResendActivation />} />
          {/* <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          /> */}
          <Route path="/login" element={<Login />} />
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
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
