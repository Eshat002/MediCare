// src/stores/authStore.js
import { create } from "zustand";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_API_URL;

const useAuthStore = create((set) => ({
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),

  // Login action
  login: async (email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/auth/jwt/create/`,
        { email, password },
        config // Pass the config object here
      );

      const accessToken = response.data.access;
      console.log("access", accessToken);
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

      return { success: false, error: error.response.data };
    }
  },

  // Logout action
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ user: null, accessToken: null, isAuthenticated: false });
  },

  // Fetch user details
  loadUser: async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const response = await axios.get(`${BaseUrl}/auth/users/me/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        set({ user: response.data });
        console.log("user", response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  },
}));

export default useAuthStore;
