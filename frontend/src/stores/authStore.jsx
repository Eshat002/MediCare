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

      return { success: false };
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
  // Request password reset
  requestPasswordReset: async (email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BaseUrl}/auth/users/reset_password/`,
        { email },
        config
      );
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BaseUrl}/auth/users/reset_password_confirm/`,
        {
          uid,
          token,
          new_password,
          re_new_password,
        },
        config
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BaseUrl}/auth/users/`,
        {
          first_name,
          last_name,
          email,
          password,
          re_password,
        },
        config
      );
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BaseUrl}/auth/users/activation/`,
        { uid, token },
        config
      );
      console.log("Account successfully verified");
      return { success: true };
    } catch (error) {
      const errorData = error.response ? error.response.data : error.message;
      console.error("Verification error:", errorData);
      return { success: false, error: errorData };
    }
  },

  // Resend activation email
  resendActivationEmail: async (email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BaseUrl}/auth/users/resend_activation/`,
        { email },
        config
      );
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
