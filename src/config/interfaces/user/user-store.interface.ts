import { ProfileSchema } from '@/config/zod-schemas/profileSchema';
import { GenericResponse } from '../common.interface';
import { User } from './user-type.interface';
import { PaginationParams } from '../common/pagination-params.interface';
/**
 * `UserActions` defines the structure of the actions related to user management.
 * It includes properties for user values, user list, selected user, error, total number of users, and loading state.
 * It also includes methods for fetching and updating user data.
 *
 * @interface UserActions
 * @property {User[]} usersValues - An array of user values.
 * @property {User[]} users - An array of users.
 * @property {User|null} selectedUser - The currently selected user, or null if no user is selected.
 * @property {string|null} error - An error message, or null if no error is present.
 * @property {number} total - The total number of users.
 * @property {boolean} loading - Indicates if a user action is in progress.
 * @property {function} fetchAllUsersFiltered - Method to fetch all users with filtering and pagination.
 * @property {function} fetchAllUsersValues - Method to fetch all user values.
 * @property {function} fetchUserById - Method to fetch a user by their ID.
 * @property {function} updateUser - Method to update a user's profile.
 * @property {function} makeInactive - Method to make a user inactive.
 *
 * @example
 * const userActions: UserActions = {
 *   usersValues: [],
 *   users: [],
 *   selectedUser: null,
 *   error: null,
 *   total: 0,
 *   loading: false,
 *   fetchAllUsersFiltered: async (params) => { / implementation / },
 *   fetchAllUsersValues: async () => { / implementation / },
 *   fetchUserById: async (userId) => { / implementation / },
 *   updateUser: async (userId, updateData) => { / implementation / },
 *   makeInactive: async (userId) => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the actions related to user management, ensuring they contain the necessary methods
 * for managing user data within the application.
 */
export interface UserStore {
  usersValues: User[];
  users: User[];
  selectedUser: User | null;
  error: string | null;
  total: number;
  loading: boolean;

  /**
   * Method to fetch all users with filtering and pagination.
   *
   * @param {PaginationParams} params - The pagination and filtering parameters.
   * @returns {Promise<void>} A promise that resolves when the users are fetched.
   */
  fetchAllUsersFiltered: (params: PaginationParams) => Promise<void>;

  /**
   * Method to fetch all user values.
   *
   * @returns {Promise<void>} A promise that resolves when the user values are fetched.
   */
  fetchAllUsersValues: () => Promise<void>;

  /**
   * Method to fetch a user by their ID.
   *
   * @param {number} userId - The ID of the user to fetch.
   * @returns {Promise<void>} A promise that resolves when the user is fetched.
   */
  fetchUserById: (userId: number) => Promise<void>;

  /**
   * Method to update a user's profile.
   *
   * @param {number} userId - The ID of the user to update.
   * @param {ProfileSchema} updateData - The updated profile data.
   * @returns {Promise<Response>} A promise that resolves to the response of the update operation.
   */
  updateUser: (userId: number, updateData: ProfileSchema) => Promise<GenericResponse>;

  /**
   * Method to make a user inactive.
   *
   * @param {number} userId - The ID of the user to make inactive.
   * @returns {Promise<Response>} A promise that resolves to the response of the make inactive operation.
   */
  makeInactive: (userId: number) => Promise<GenericResponse>;
}
