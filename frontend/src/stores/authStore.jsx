// src/stores/authStore.js
// import apiClient from "../utils/axiosClient";

import { create } from "zustand";

import {
  unauthenticatedApiClient,
  authenticatedApiClient,
} from "../utils/axiosClient";

const useAuthStore = create((set) => ({
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),

  // Login action
  login: async (email, password) => {
    try {
      const response = await unauthenticatedApiClient.post(
        "/auth/jwt/create/",
        { email, password }
      );

      const accessToken = response.data.access;

      const refreshToken = response.data.refresh;

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      set({ accessToken, isAuthenticated: true });
      await useAuthStore.getState().loadUser();
      return { success: true };
    } catch (error) {
      if (error.response) {
        console.error("Login error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      set({ isAuthenticated: false, accessToken: null });

      return { success: false };
    }
  },

  // Logout action
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ user: null, accessToken: null, isAuthenticated: false });
  },

  // Fetch user details
  loadUser: async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const response = await authenticatedApiClient.get("/auth/users/me/", {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });
        set({ user: response.data, isAuthenticated: true });
        console.log("user", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        set({ user: null, isAuthenticated: false });
      }
    } else {
      set({ user: null, isAuthenticated: false });
    }
  },

  // Request password reset
  requestPasswordReset: async (email) => {
    try {
      await unauthenticatedApiClient.post("/auth/users/reset_password/", {
        email,
      });
      console.log("Password reset email sent");
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Password reset error:", errorData);
      return { success: false, error: errorData };
    }
  },

  // Confirm password reset
  confirmPasswordReset: async (uid, token, new_password, re_new_password) => {
    try {
      await unauthenticatedApiClient.post(
        "/auth/users/reset_password_confirm/",
        {
          uid,
          token,
          new_password,
          re_new_password,
        }
      );
      console.log("Password successfully reset");
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Password reset confirmation error:", errorData);
      return { success: false, error: errorData };
    }
  },

  // Signup action
  signup: async (first_name, last_name, email, password, re_password) => {
    try {
      await unauthenticatedApiClient.post("/auth/users/", {
        first_name,
        last_name,
        email,
        password,
        re_password,
      });
      console.log("Signup successful, verification email sent");
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Signup error:", errorData);
      return { success: false, error: errorData };
    }
  },

  // Verify user account
  verifyAccount: async (uid, token) => {
    try {
      await unauthenticatedApiClient.post("/auth/users/activation/", {
        uid,
        token,
      });
      console.log("Account successfully verified");
      set({ isAuthenticated: false });
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Verification error:", errorData);
      set({ isAuthenticated: false });
      return { success: false, error: errorData };
    }
  },

  // Resend activation email
  resendActivationEmail: async (email) => {
    try {
      await unauthenticatedApiClient.post("/auth/users/resend_activation/", {
        email,
      });
      console.log("Activation email resent");
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Resend activation email error:", errorData);
      return { success: false, error: errorData };
    }
  },
}));

export default useAuthStore;
