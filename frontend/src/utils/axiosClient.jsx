import axios from "axios";
import useAuthStore from "../stores/authStore";

const BaseUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: BaseUrl,
  withCredentials: true, // Allow sending HttpOnly cookies with requests
});

// Axios request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor for token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Prevent infinite retry loops

      try {
        // Send a request to refresh the access token using the HttpOnly cookie
        const response = await axios.post(
          `${BaseUrl}/auth/jwt/refresh/`,
          {}, // Empty body because refresh token is in the cookie
          { withCredentials: true }
        );

        const newAccessToken = response.data.access;
        localStorage.setItem("accessToken", newAccessToken);

        // Update the Authorization header for the original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token error:", refreshError);
        useAuthStore.getState().logout(); // Log out if refresh fails
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
