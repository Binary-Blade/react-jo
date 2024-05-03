import axiosClient from '@/utils/axiosConfig';
import { LoginFormData } from '@/utils/zod-schemas/loginSchema';
import { SignupFormData } from '@/utils/zod-schemas/signupSchema';

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
}
