import axiosClient from "@/config/axiosConfig";
import { LoginFormData } from "@/config/zod-schemas/loginSchema";
import { SignupFormData } from "@/config/zod-schemas/signupSchema";

export class AuthenticationService {
  static async signup(userData: SignupFormData) {
    const response = await axiosClient.post('/auth/signup', userData);
    return response.data;
  }

  static async login(userData: LoginFormData) {
    const response = await axiosClient.post('/auth/login', userData);
    if (response.data) {
      return {
        success: true,
        data: response.data
      };
    }
    throw new Error("Login failed: No access token received");
  }

  static async logout() {
    const response = await axiosClient.post('/auth/logout');
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Logout failed");
  }

  static async refreshToken() {
    const response = await axiosClient.post('/auth/refresh-token');
    return response.data;
  }

  static async accessProtectedRoute() {
    const response = await axiosClient.get('/auth/access-token');
    return response.data;
  }
}
