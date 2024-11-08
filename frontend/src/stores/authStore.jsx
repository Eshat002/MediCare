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
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
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
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  },
}));

export default useAuthStore;
