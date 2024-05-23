import axiosClient from '@/config/axiosConfig';
import { LoginFormData } from '@/config/zod-schemas/loginSchema';
import { SignupFormData } from '@/config/zod-schemas/signupSchema';
import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';
import { GenericResponse } from '@/config/interfaces/common.interface';
import {
  LoginResponse,
  TokenResponse
} from '@/config/interfaces/authentication/auth-response.interface';

/**
 * `AuthenticationService` provides methods for user authentication-related operations.
 * It includes methods for signup, login, password change, logout, token refresh, accessing protected routes, and user deletion.
 *
 * @class AuthenticationService
 */
export class AuthenticationService {
  /**
   * Sign up a new user.
   *
   * @param {SignupFormData} userData - The data for signing up a new user.
   * @returns {Promise<GenericResponse>} The response from the server.
   *
   * @example
   * const signupData: SignupFormData = {
   *   firstName: 'John',
   *   lastName: 'Doe',
   *   email: 'john.doe@example.com',
   *   password: 'securePassword123'
   * };
   * const response = await AuthenticationService.signup(signupData);
   * console.log(response);
   */
  static async signup(userData: SignupFormData): Promise<GenericResponse> {
    const response = await axiosClient.post('/auth/signup', userData);
    return response.data;
  }

  /**
   * Log in an existing user.
   *
   * @param {LoginFormData} userData - The data for logging in a user.
   * @returns {Promise<LoginResponse>} The response from the server.
   *
   * @example
   * const loginData: LoginFormData = {
   *   email: 'john.doe@example.com',
   *   password: 'securePassword123'
   * };
   * const response = await AuthenticationService.login(loginData);
   * console.log(response);
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

  /**
   * Change the password of an existing user.
   *
   * @param {ChangePasswordSchema} userData - The data for changing the password.
   * @returns {Promise<LoginResponse>} The response from the server.
   *
   * @example
   * const changePasswordData: ChangePasswordSchema = {
   *   oldPassword: 'oldPassword123',
   *   newPassword: 'newPassword123'
   * };
   * const response = await AuthenticationService.changePassword(changePasswordData);
   * console.log(response);
   */
  static async changePassword(userData: ChangePasswordSchema): Promise<LoginResponse> {
    const response = await axiosClient.patch('/auth/change-password', userData);
    return response.data;
  }

  /**
   * Log out the current user.
   *
   * @returns {Promise<GenericResponse>} The response from the server.
   *
   * @example
   * const response = await AuthenticationService.logout();
   * console.log(response);
   */
  static async logout(): Promise<GenericResponse> {
    const response = await axiosClient.post('/auth/logout');
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Logout failed');
  }

  /**
   * Refresh the authentication token.
   *
   * @returns {Promise<TokenResponse>} The response from the server.
   *
   * @example
   * const response = await AuthenticationService.refreshToken();
   * console.log(response);
   */
  static async refreshToken(): Promise<TokenResponse> {
    const response = await axiosClient.post('/auth/refresh-token');
    return response.data;
  }

  /**
   * Access a protected route using an access token.
   *
   * @returns {Promise<TokenResponse>} The response from the server.
   *
   * @example
   * const response = await AuthenticationService.accessProtectedRoute();
   * console.log(response);
   */
  static async accessProtectedRoute(): Promise<TokenResponse> {
    const response = await axiosClient.post('/auth/access-token');
    return response.data;
  }

  /**
   * Delete a user by their ID.
   *
   * @param {number} userId - The ID of the user to delete.
   * @returns {Promise<GenericResponse>} The response from the server.
   *
   * @example
   * const response = await AuthenticationService.deleteUser(1);
   * console.log(response);
   */
  static async deleteUser(userId: number): Promise<GenericResponse> {
    const response = await axiosClient.delete(`/auth/delete/${userId}`);
    return response.data;
  }
}
