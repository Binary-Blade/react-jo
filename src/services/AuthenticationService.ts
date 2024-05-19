import axiosClient from '@/config/axiosConfig';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import {
  Response,
  LoginResponse,
  TokenResponse,
  GenericResponse
} from '@/config/types/Auth/AuthResponse';
import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';

/**
 * A service class for handling authentication-related requests.
 * This class contains static methods for signup, login, logout, token refresh,
 * and accessing protected routes. Each method interacts with the backend
 * via HTTP requests using the configured axios client.
 *
 * @class AuthenticationService
 */
export class AuthenticationService {
  /**
   * Sends a signup request to the server with the provided user data.
   *
   * @param {SignupFormData} userData - The data to be sent in the signup request.
   * @returns {Promise<Response>} - A promise that resolves to the server's response.
   */
  static async signup(userData: SignupFormData): Promise<Response> {
    const response = await axiosClient.post('/auth/signup', userData);
    return response.data;
  }

  /**
   * Sends a login request to the server with the provided user data.
   *
   * @param {LoginFormData} userData - The data to be sent in the login request.
   * @returns {Promise<LoginResponse>} - A promise that resolves to the server's response.
   * @throws Will throw an error if no access token is received.
   */
  static async login(userData: LoginFormData): Promise<LoginResponse> {
    const response = await axiosClient.post('/auth/login', userData);
    if (response.data) {
      return {
        success: true,
        data: response.data
      };
    }
    throw new Error('Login failed: No access token received');
  }

  static async changePassword(userData: ChangePasswordSchema): Promise<LoginResponse> {
    const response = await axiosClient.patch('/auth/change-password', userData);
    if (response.data) {
      return {
        success: true,
        data: response.data
      };
    }
    throw new Error('Login failed: No access token received');
  }

  /**
   * Sends a logout request to the server.
   *
   * @returns {Promise<GenericResponse>} - A promise that resolves to the server's response.
   * @throws Will throw an error if the logout process fails.
   */
  static async logout(): Promise<GenericResponse> {
    const response = await axiosClient.post('/auth/logout');
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Logout failed');
  }

  /**
   * Sends a token refresh request to the server.
   *
   * @returns {Promise<TokenResponse>} - A promise that resolves to the new access token and user ID.
   */
  static async refreshToken(): Promise<TokenResponse> {
    const response = await axiosClient.post('/auth/refresh-token');
    return response.data;
  }

  /**
   * Sends a request to access a protected route.
   *
   * @returns {Promise<TokenResponse>} - A promise that resolves to the access token and user ID.
   */
  static async accessProtectedRoute(): Promise<TokenResponse> {
    const response = await axiosClient.post('/auth/access-token');
    return response.data;
  }
}
