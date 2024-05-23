/**
 * `AuthContextType` defines the structure of the authentication context.
 * It includes properties to indicate if the context is initialized, if the user is authenticated, and the user's ID.
 *
 * @interface AuthContextType
 * @property {boolean} initialized - Indicates if the authentication context has been initialized.
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {number|null} userId - The ID of the authenticated user, or `null` if not authenticated.
 *
 * @example
 * const authContext: AuthContextType = {
 *   initialized: true,
 *   isAuthenticated: false,
 *   userId: null
 * };
 *
 * @remarks
 * This interface is used to type the authentication context, ensuring it contains the necessary properties
 * for managing authentication state within the application.
 */
export interface AuthContextType {
  initialized: boolean;
  isAuthenticated: boolean;
  userId: number | null;
}
