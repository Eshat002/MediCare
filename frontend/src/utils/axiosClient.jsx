// final
import axios from "axios";
import useAuthStore from "../stores/authStore";

const BaseUrl = import.meta.env.VITE_API_URL;

// Create an Axios instance for unauthenticated requests
const unauthenticatedApiClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create an Axios instance for authenticated requests
const authenticatedApiClient = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Token refresh and interceptors
let isRefreshing = false;
let refreshQueue = [];

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axios.post(
      `${BaseUrl}/auth/jwt/refresh/`,
      { refresh: refreshToken },
      { withCredentials: true }
    );

    const { access: newAccessToken, refresh: newRefreshToken } = response.data;

    // Save new tokens
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);

    console.log("Token refreshed successfully");
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    useAuthStore.getState().logout();
    return null;
  }
};

const retryFailedRequests = (newAccessToken) => {
  refreshQueue.forEach((callback) => callback(newAccessToken));
  refreshQueue = [];
};

// Add token to requests
authenticatedApiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Refresh token on 401 errors
authenticatedApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        const newAccessToken = await refreshToken();
        isRefreshing = false;

        if (newAccessToken) {
          retryFailedRequests(newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return authenticatedApiClient(originalRequest);
        }
      } else {
        return new Promise((resolve) => {
          refreshQueue.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(authenticatedApiClient(originalRequest));
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export { unauthenticatedApiClient, authenticatedApiClient };

// import axios from "axios";
// import useAuthStore from "../stores/authStore";

// const BaseUrl = import.meta.env.VITE_API_URL;

// const apiClient = axios.create({
//   baseURL: BaseUrl,
//   withCredentials: true, // Allow sending HttpOnly cookies with requests
// });

// // Function to refresh the token
// async function refreshToken() {
//   try {
//     // Get the refresh token from cookies or localStorage
//     const refreshToken = localStorage.getItem("refreshToken");
//     console.log("newR", refreshToken);

//     if (!refreshToken) {
//       console.error("No refresh token found");
//       useAuthStore.getState().logout(); // Log out user if refresh token is missing
//       return null;
//     }

//     const response = await axios.post(
//       `${BaseUrl}/auth/jwt/refresh/`,
//       { refresh: refreshToken }, // Send refresh token in the request body
//       { withCredentials: true }
//     );

//     const newAccessToken = response.data.access;
//     const newRefreshToken = response.data.refresh;
//     localStorage.setItem("accessToken", newAccessToken);
//     localStorage.setItem("refreshToken", newRefreshToken);

//     console.log("Token refreshed successfully");
//     return newAccessToken;
//   } catch (error) {
//     console.error(
//       "Failed to refresh token:",
//       error.response?.data || error.message
//     );
//     // Logout user if refresh fails
//     useAuthStore.getState().logout();
//     return null;
//   }
// }

// // Function to start token refresh on an interval
// function startTokenRefreshInterval() {
//   // Refresh token every 2 minutes (adjust timing based on token expiration)
//   const intervalTime = 2 * 60 * 1000;

//   setInterval(async () => {
//     console.log("Refreshing token...");
//     await refreshToken();
//   }, intervalTime);
// }

// // Initialize token refresh when the app starts
// startTokenRefreshInterval();

// // Axios request interceptor to attach access token
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default apiClient;
// diff;
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import useAuthStore from "../stores/authStore";

// const BaseUrl = import.meta.env.VITE_API_URL;

// const apiClient = axios.create({
//   baseURL: BaseUrl,
//   withCredentials: true, // Allow sending HttpOnly cookies with requests
// });

// // Function to refresh the token
// async function refreshToken() {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) {
//       console.error("No refresh token found");
//       useAuthStore.getState().logout(); // Log out user if refresh token is missing
//       return null;
//     }

//     // Call refresh endpoint
//     const response = await axios.post(
//       `${BaseUrl}/auth/jwt/refresh/`,
//       { refresh: refreshToken },
//       { withCredentials: true }
//     );

//     const { access: newAccessToken, refresh: newRefreshToken } = response.data;

//     // Save new tokens
//     localStorage.setItem("accessToken", newAccessToken);
//     localStorage.setItem("refreshToken", newRefreshToken);

//     console.log("Token refreshed successfully");
//     scheduleTokenRefresh(newAccessToken); // Schedule the next refresh
//     return newAccessToken;
//   } catch (error) {
//     console.error(
//       "Failed to refresh token:",
//       error.response?.data || error.message
//     );
//     useAuthStore.getState().logout(); // Log out on failure
//     return null;
//   }
// }

// // Function to schedule the token refresh dynamically
// function scheduleTokenRefresh(token) {
//   if (!token) return;

//   // Decode the token to get expiration time
//   const decoded = jwtDecode(token);
//   const expTime = decoded.exp * 1000; // Expiration time in milliseconds
//   const currentTime = Date.now();

//   // Calculate refresh time (5 seconds before expiration)
//   const refreshTime = expTime - currentTime - 5000;

//   if (refreshTime > 0) {
//     console.log(`Next token refresh in ${refreshTime / 1000} seconds`);
//     setTimeout(async () => {
//       console.log("Refreshing token...");
//       await refreshToken();
//     }, refreshTime);
//   }
// }

// // Function to initialize the token refresh logic
// function initializeTokenRefresh() {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     scheduleTokenRefresh(token); // Schedule refresh for existing token
//   }
// }

// // Axios request interceptor to attach access token
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Initialize token refresh logic when the app starts
// initializeTokenRefresh();

// export default apiClient;
// diff
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import useAuthStore from "../stores/authStore";

// const BaseUrl = import.meta.env.VITE_API_URL;

// const apiClient = axios.create({
//   baseURL: BaseUrl,
//   withCredentials: true,
// });

// // Function to refresh the token
// async function refreshToken() {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) throw new Error("No refresh token available");

//     const response = await axios.post(
//       `${BaseUrl}/auth/jwt/refresh/`,
//       { refresh: refreshToken },
//       { withCredentials: true }
//     );

//     const { access: newAccessToken, refresh: newRefreshToken } = response.data;

//     localStorage.setItem("accessToken", newAccessToken);
//     localStorage.setItem("refreshToken", newRefreshToken);

//     console.log("Token refreshed successfully");
//     return newAccessToken;
//   } catch (error) {
//     console.error(
//       "Failed to refresh token:",
//       error.response?.data || error.message
//     );
//     useAuthStore.getState().logout(); // Log out user on failure
//     return null;
//   }
// }

// // Request interceptor: Check and refresh token before each request
// apiClient.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       const decoded = jwtDecode(accessToken);
//       const currentTime = Date.now() / 1000; // Current time in seconds

//       // Check if the token is about to expire (buffer of 5 seconds)
//       if (decoded.exp - currentTime < 5) {
//         console.log("Access token about to expire, refreshing...");
//         const newAccessToken = await refreshToken();
//         if (newAccessToken) {
//           config.headers.Authorization = `Bearer ${newAccessToken}`;
//         }
//       } else {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor to retry requests after refreshing the token
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log("Received 401 error, attempting token refresh...");

//       const newAccessToken = await refreshToken();
//       if (newAccessToken) {
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return apiClient(originalRequest); // Retry the original request
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;

// night

// import axios from "axios";
// import useAuthStore from "../stores/authStore";

// const BaseUrl = import.meta.env.VITE_API_URL;

// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: BaseUrl,
//   withCredentials: true, // Send HttpOnly cookies
// });

// let isRefreshing = false; // Flag to track token refresh status
// let refreshQueue = []; // Queue to store failed requests during token refresh

// // Function to refresh the token
// const refreshToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) throw new Error("No refresh token available");

//     const response = await axios.post(
//       `${BaseUrl}/auth/jwt/refresh/`,
//       { refresh: refreshToken },
//       { withCredentials: true }
//     );

//     const { access: newAccessToken, refresh: newRefreshToken } = response.data;

//     // Save new tokens
//     localStorage.setItem("accessToken", newAccessToken);
//     localStorage.setItem("refreshToken", newRefreshToken);

//     console.log("Token refreshed successfully");
//     return newAccessToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//     useAuthStore.getState().logout(); // Log out the user
//     return null;
//   }
// };

// // Helper to retry failed requests
// const retryFailedRequests = (newAccessToken) => {
//   refreshQueue.forEach((callback) => callback(newAccessToken));
//   refreshQueue = [];
// };

// // Request Interceptor: Attach the token to each request
// apiClient.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor: Handle 401 errors and retry failed requests
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Mark request as retried

//       if (!isRefreshing) {
//         isRefreshing = true;
//         const newAccessToken = await refreshToken();
//         isRefreshing = false;

//         if (newAccessToken) {
//           retryFailedRequests(newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return apiClient(originalRequest);
//         }
//       } else {
//         // Wait until the refresh completes
//         return new Promise((resolve) => {
//           refreshQueue.push((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             resolve(apiClient(originalRequest));
//           });
//         });
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;

// skipAuth
// import axios from "axios";
// import useAuthStore from "../stores/authStore";

// const BaseUrl = import.meta.env.VITE_API_URL;

// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: BaseUrl,
//   withCredentials: true, // Send HttpOnly cookies
// });

// let isRefreshing = false; // Flag to track token refresh status
// let refreshQueue = []; // Queue to store failed requests during token refresh

// // Function to refresh the token
// const refreshToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");
//     if (!refreshToken) throw new Error("No refresh token available");

//     const response = await axios.post(
//       `${BaseUrl}/auth/jwt/refresh/`,
//       { refresh: refreshToken },
//       { withCredentials: true }
//     );

//     const { access: newAccessToken, refresh: newRefreshToken } = response.data;

//     // Save new tokens
//     localStorage.setItem("accessToken", newAccessToken);
//     localStorage.setItem("refreshToken", newRefreshToken);

//     console.log("Token refreshed successfully");
//     return newAccessToken;
//   } catch (error) {
//     console.error("Failed to refresh token:", error);
//     useAuthStore.getState().logout(); // Log out the user
//     return null;
//   }
// };

// // Helper to retry failed requests
// const retryFailedRequests = (newAccessToken) => {
//   refreshQueue.forEach((callback) => callback(newAccessToken));
//   refreshQueue = [];
// };

// // Request Interceptor: Attach the token only if skipAuth is not true
// apiClient.interceptors.request.use(
//   (config) => {
//     if (!config.skipAuth) {
//       const accessToken = localStorage.getItem("accessToken");
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor: Handle 401 errors and retry failed requests
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Mark request as retried

//       if (!isRefreshing) {
//         isRefreshing = true;
//         const newAccessToken = await refreshToken();
//         isRefreshing = false;

//         if (newAccessToken) {
//           retryFailedRequests(newAccessToken);
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return apiClient(originalRequest);
//         }
//       } else {
//         // Wait until the refresh completes
//         return new Promise((resolve) => {
//           refreshQueue.push((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             resolve(apiClient(originalRequest));
//           });
//         });
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;
// example
// apiClient.get("/public-endpoint", { skipAuth: true }); // No Authorization header
// apiClient.get("/protected-endpoint"); // Adds Auth
