import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';
import { GenericResponse } from '../common.interface';
import { UserLoginData, UserSignupData } from '../form-type.interface';

/**
 * `AuthStoreTypes` defines the structure of the authentication store.
 * It includes properties for authentication state and methods for handling authentication actions.
 *
 * @interface AuthStoreTypes
 * @property {string|null} accessToken - The access token for authenticated requests.
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {number|null} userId - The ID of the authenticated user.
 * @property {string|null} role - The role of the authenticated user.
 * @property {boolean} loading - Indicates if an authentication action is in progress.
 * @property {string|null} error - The error message if an authentication action fails.
 * @property {function} signup - Method to handle user signup.
 * @property {function} login - Method to handle user login.
 * @property {function} logout - Method to handle user logout.
 * @property {function} changePassword - Method to handle changing the user's password.
 * @property {function} refreshToken - Method to refresh the authentication token.
 * @property {function} accessProtectedRoute - Method to access a protected route.
 * @property {function} deleteUser - Method to handle deleting a user.
 *@example
 * const authStore: AuthStoreTypes = {
 *   accessToken: null,
 *   isAuthenticated: false,
 *   userId: null,
 *   role: null,
 *   loading: false,
 *   error: null,
 *   signup: async (userData) => { },
 *   login: async (userData) => { },
 *   logout: async () => {  implementation  },
 *   changePassword: async (userData) => {  implementation  },
 *   refreshToken: async () => {  implementation  },
 *   accessProtectedRoute: async () => {  implementation  },
 *   deleteUser: async (userId) => {  implementation  }
 * };
 *
 * @remarks
 * This interface is used to type the authentication store, ensuring it contains the necessary properties
 * and methods for managing authentication state and actions within the application.
 */
export interface AuthStoreTypes {
  accessToken: string | null;
  isAuthenticated: boolean;
  userId: number | null;
  role: string | null;
  loading: boolean;
  error: string | null;

  /**
   * Method to handle user signup.
   *
   * @param {UserSignupData} userData - The user data for signup.
   * @returns {Promise<Response>} A promise that resolves to the signup response.
   */
  signup: (userData: UserSignupData) => Promise<GenericResponse>;

  /**
   * Method to handle user login.
   *
   * @param {UserLoginData} userData - The user data for login.
   * @returns {Promise<Response>} A promise that resolves to the login response.
   */
  login: (userData: UserLoginData) => Promise<GenericResponse>;

  /**
   * Method to handle user logout.
   *
   * @returns {Promise<void>} A promise that resolves when logout is complete.
   */
  logout: () => Promise<void>;

  /**
   * Method to handle changing the user's password.
   *
   * @param {ChangePasswordSchema} userData - The user data for changing the password.
   * @returns {Promise<Response>} A promise that resolves to the change password response.
   */
  changePassword: (userData: ChangePasswordSchema) => Promise<GenericResponse>;

  /**
   * Method to refresh the authentication token.
   *
   * @returns {Promise<void>} A promise that resolves when the token is refreshed.
   */
  refreshToken: () => Promise<void>;

  /**
   * Method to access a protected route.
   *
   * @returns {Promise<void>} A promise that resolves when the protected route is accessed.
   */
  accessProtectedRoute: () => Promise<void>;

  /**
   * Method to handle deleting a user.
   *
   * @param {number} userId - The ID of the user to be deleted.
   * @returns {Promise<Response>} A promise that resolves to the delete user response.
   */
  deleteUser: (userId: number) => Promise<GenericResponse>;
}
