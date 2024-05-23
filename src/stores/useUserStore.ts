import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';
import { UserStore } from '@/config/interfaces/user/user-store.interface';
import { ProfileSchema } from '@/config/zod-schemas/profileSchema';
import { UserService } from '@/services/UserService';
import { create } from 'zustand';

/**
 * `useUserStore` is a Zustand store for managing user state and actions.
 *
 * @constant
 *
 * @example
 * const { users, fetchAllUsersFiltered, updateUser } = useUserStore();
 *
 * @remarks
 * This store handles user operations such as fetching, updating, and managing users.
 */
export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  usersValues: [],
  selectedUser: null,
  error: null,
  loading: false,
  total: 0,

  /**
   * Fetch all users with pagination and filtering.
   *
   * @param {PaginationParams} params - Pagination and filtering parameters.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * await useUserStore.getState().fetchAllUsersFiltered(params);
   * console.log('Users fetched');
   */
  fetchAllUsersFiltered: async (params: PaginationParams) => {
    set({ loading: true, error: null });
    try {
      const result = await UserService.getAllUsers(params);
      set({
        users: result.data.users,
        loading: false,
        total: result.data.total
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch Users' });
    }
  },

  /**
   * Fetch all user values.
   *
   *
   * @example
   * await useUserStore.getState().fetchAllUsersValues();
   * console.log('User values fetched');
   */
  fetchAllUsersValues: async () => {
    set({ loading: true, error: null });
    try {
      const result = await UserService.getAllValuesUsers();
      set({
        usersValues: result.data,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch Users' });
    }
  },

  /**
   * Fetch a user by their ID.
   *
   * @param {number} userId - The ID of the user.
   *
   * @example
   * await useUserStore.getState().fetchUserById(1);
   * console.log('User fetched');
   */
  fetchUserById: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      const result = await UserService.getUserById(userId);
      set({
        selectedUser: result.data,
        loading: false
      });
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch User' });
    }
  },

  /**
   * Update a user by their ID.
   *
   * @param {number} userId - The ID of the user.
   * @param {ProfileSchema} updateData - The data to update the user with.
   *
   * @example
   * const updateData: ProfileSchema = { firstName: 'John', lastName: 'Doe', email: 'john@example.com' };
   * const response = await useUserStore.getState().updateUser(1, updateData);
   * console.log(response.message);
   */
  updateUser: async (userId: number, updateData: ProfileSchema) => {
    set({ loading: true, error: null });
    try {
      const result = await UserService.updateUser(userId, updateData);
      set({
        selectedUser: result.data,
        loading: false
      });
      // Optionally update the local list of users
      if (get().users.length > 0) {
        set(state => ({
          users: state.users.map(user => (user.id === userId ? { ...user, ...updateData } : user))
        }));
      }
      return { success: true, message: 'Le profil a bien été mis à jour.' };
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to update User' });
      return {
        success: false,
        message: 'Update profile failed, incorrect value or that email should already exist'
      };
    }
  },

  /**
   * Make a user inactive by their ID.
   *
   * @param {number} userId - The ID of the user.
   *
   * @example
   * const response = await useUserStore.getState().makeInactive(1);
   * console.log(response.message);
   */
  makeInactive: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      const result = await UserService.makeInInactive(userId);
      set({
        selectedUser: result.data,
        loading: false
      });
      // Optionally update the local list of users
      if (get().users.length > 0) {
        set(state => ({
          users: state.users.map(user => (user.id === userId ? { ...user, isActive: false } : user))
        }));
      }
      return { success: true, message: 'Le compte a bien été supprimé.' };
    } catch (error: any) {
      const errorMessage = error.response?.data.message || 'An error occurred';
      return { success: false, message: errorMessage };
    }
  }
}));
