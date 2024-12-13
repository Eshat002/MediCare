// src/components/PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
