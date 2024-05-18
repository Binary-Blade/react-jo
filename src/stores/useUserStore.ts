import { UserStore } from '@/config/types/UserTypes';
import { PaginationParams } from '@/config/types/common/PaginationTypes';
import { ProfileSchema } from '@/config/zod-schemas/profileSchema';
import { UserService } from '@/services/UserService';
import { create } from 'zustand';

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  usersValues: [],
  selectedUser: null,
  error: null,
  loading: false,
  total: 0,

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
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to update User' });
    }
  },

  deleteUser: async (userId: number) => {
    set({ loading: true, error: null });
    try {
      await UserService.deleteUser(userId);
      set(state => ({
        users: state.users.filter(user => user.id !== userId),
        selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser
      }));
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to delete User' });
    }
  }
}));
