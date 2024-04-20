import axiosClient from '@/utils/axiosConfig';

export class UserService {
  /**
   * Fetches all users from the server. This is typically restricted to admin users.
   */
  static async getAllUsers() {
    try {
      const response = await axiosClient.get('/users/get-all');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Get all users error:', error);
      throw new Error("Failed to fetch users");
    }
  }

  /**
   * Fetches a single user by ID.
   * @param {number} userId The ID of the user to fetch.
   */
  static async getUserById(userId: number) {
    try {
      const response = await axiosClient.get(`/users/${userId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Get user by ID error: ${userId}`, error);
      throw new Error("Failed to fetch user");
    }
  }

  /**
   * Updates a user's data.
   * @param {number} userId The ID of the user to update.
   * @param {Object} updateData The data to update the user with.
   */
  static async updateUser(userId: number, updateData: Object) {
    try {
      const response = await axiosClient.patch(`/users/${userId}`, updateData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Update user error: ${userId}`, error);
      throw new Error("Failed to update user");
    }
  }

  /**
   * Deletes a user.
   * @param {number} userId The ID of the user to delete.
   */
  static async deleteUser(userId: number) {
    try {
      const response = await axiosClient.delete(`/users/${userId}`);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error(`Delete user error: ${userId}`, error);
      throw new Error("Failed to delete user");
    }
  }
}
