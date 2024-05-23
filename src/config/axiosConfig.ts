import { useAuthStore } from '@/stores/useAuthStore';
import { AuthenticationService } from '@/services/AuthenticationService';
import axios from 'axios';

/**
 * `axiosClient` creates an Axios instance with predefined settings.
 * It sets the base URL from the environment variables and includes JSON content type headers.
 * The client is configured to send cookies with requests.
 *
 * @constant
 *
 * @example
 * // Example usage:
 * axiosClient.get('/some-endpoint')
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 *
 * @remarks
 * This Axios instance is used for making HTTP requests within the application, ensuring consistent settings and interceptors.
 */
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

/**
 * Response interceptor to handle 401 Unauthorized errors.
 * If a 401 error is received, it attempts to refresh the token and retry the original request.
 */
axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Attempt to refresh the token
        const data = await AuthenticationService.refreshToken();
        // Update the auth store with the new token
        useAuthStore.setState({
          accessToken: data.accessToken,
          isAuthenticated: true
        });
        // Set the new token in the default headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        // Retry the original request with the new token
        return axios(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

/**
 * Request interceptor to add the Authorization header with the access token from the auth store.
 */
axiosClient.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;
