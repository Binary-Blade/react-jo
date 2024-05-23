import axiosClient from '@/config/axiosConfig';
import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';

/**
 * `UserService` provides methods for managing user-related operations.
 * It includes methods for fetching all users, fetching all user values, fetching a user by ID, updating a user, and making a user inactive.
 *
 * @class UserService
 */
export class UserService {
  /**
   * Get all users with optional pagination parameters.
   *
   * @param {PaginationParams} [params] - Optional pagination and filtering parameters.
   * @returns {Promise<{ success: boolean; data: any }>} The response from the server.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * const response = await UserService.getAllUsers(params);
   * console.log(response);
   */
  static async getAllUsers(params?: PaginationParams): Promise<{ success: boolean; data: any }> {
    try {
      const response = await axiosClient.get('/users/get-all', { params });
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all users error:', error);
      throw new Error('Failed to fetch users');
    }
  }

  /**
   * Get all user values.
   *
   * @returns {Promise<{ success: boolean; data: any }>} The response from the server.
   *
   * @example
   * const response = await UserService.getAllValuesUsers();
   * console.log(response);
   */
  static async getAllValuesUsers(): Promise<{ success: boolean; data: any }> {
    try {
      const response = await axiosClient.get('/users/get-all-values');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all users error:', error);
      throw new Error('Failed to fetch users');
    }
  }

  /**
   * Get a user by their ID.
   *
   * @param {number} userId - The ID of the user.
   * @returns {Promise<{ success: boolean; data: any }>} The response from the server.
   *
   * @example
   * const response = await UserService.getUserById(1);
   * console.log(response);
   */
  static async getUserById(userId: number): Promise<{ success: boolean; data: any }> {
    try {
      const response = await axiosClient.get(`/users/${userId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Get user by ID error: ${userId}`, error);
      throw new Error('Failed to fetch user');
    }
  }

  /**
   * Update a user by their ID.
   *
   * @param {number} userId - The ID of the user.
   * @param {Object} updateData - The data to update the user with.
   * @returns {Promise<{ success: boolean; data: any }>} The response from the server.
   *
   * @example
   * const updateData = { firstName: 'John', lastName: 'Doe' };
   * const response = await UserService.updateUser(1, updateData);
   * console.log(response);
   */
  static async updateUser(
    userId: number,
    updateData: Object
  ): Promise<{ success: boolean; data: any }> {
    try {
      const response = await axiosClient.patch(`/users/${userId}`, updateData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Update user error: ${userId}`, error);
      throw new Error('Failed to update user');
    }
  }

  /**
   * Make a user inactive by their ID.
   *
   * @param {number} userId - The ID of the user.
   * @returns {Promise<{ success: boolean; data: any }>} The response from the server.
   *
   * @example
   * const response = await UserService.makeInInactive(1);
   * console.log(response);
   */
  static async makeInInactive(userId: number): Promise<{ success: boolean; data: any }> {
    try {
      const response = await axiosClient.patch(`/users/make-inactive/${userId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Update user error: ${userId}`, error);
      throw new Error('Failed to update user');
    }
  }
}
