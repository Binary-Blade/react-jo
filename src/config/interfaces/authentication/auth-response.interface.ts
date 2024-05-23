/**
 * `LoginResponse` defines the shape of a response object for login operations.
 * It includes properties for indicating success and a data object containing the access token and user ID.
 *
 * @interface LoginResponse
 * @property {boolean} success - Indicates if the login operation was successful.
 * @property {Object} data - The data object containing authentication details.
 * @property {string} data.accessToken - The access token received upon successful login.
 * @property {number} data.userId - The ID of the authenticated user.
 *
 * @example
 * const loginResponse: LoginResponse = {
 *   success: true,
 *   data: {
 *     accessToken: 'someaccesstoken',
 *     userId: 123
 *   }
 * };
 *
 * @remarks
 * This interface is used to type responses from login operations, ensuring that
 * the response includes the necessary authentication details.
 */
export interface LoginResponse {
  success: boolean;
  data: {
    accessToken: string;
    userId: number;
  };
}

/**
 * `TokenResponse` defines the shape of a response object containing a token and user ID.
 *
 * @interface TokenResponse
 * @property {string} accessToken - The access token.
 * @property {number} userId - The ID of the authenticated user.
 *
 * @example
 * const tokenResponse: TokenResponse = {
 *   accessToken: 'someaccesstoken',
 *   userId: 123
 * };
 *
 * @remarks
 * This interface is used to type responses that include authentication tokens and user information.
 */
export interface TokenResponse {
  accessToken: string;
  userId: number;
}
