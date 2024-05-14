import { UserStore } from '@/config/types/UserTypes';
import { PaginationParams } from '@/services/EventService';
import { UserService } from '@/services/UserService';
import { create } from 'zustand';

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  usersValues: [],
  selectedUser: null,
  error: null,
  total: 0,

  fetchAllUsersFiltered: async (params: PaginationParams) => {
    try {
      const result = await UserService.getAllUsers(params);
      set({ users: result.data.users, total: result.data.total });
    } catch (error: any) {
      console.error('Failed to fetch all users:', error.message);
      set({ error: error.message });
    }
  },
  fetchAllUsersValues: async () => {
    try {
      const result = await UserService.getAllValuesUsers();
      set({ usersValues: result.data });
    } catch (error: any) {
      console.error('Failed to fetch all users:', error.message);
      set({ error: error.message });
    }
  },

  fetchUserById: async (userId: number) => {
    try {
      const result = await UserService.getUserById(userId);
      set({ selectedUser: result.data });
    } catch (error: any) {
      console.error(`Failed to fetch user ${userId}:`, error.message);
      set({ error: error.message });
    }
  },

  updateUser: async (userId: number, updateData) => {
    try {
      const result = await UserService.updateUser(userId, updateData);
      set({ selectedUser: result.data });
      // Optionally update the local list of users
      if (get().users.length > 0) {
        set(state => ({
          users: state.users.map(user => (user.id === userId ? { ...user, ...updateData } : user))
        }));
      }
    } catch (error: any) {
      console.error(`Failed to update user ${userId}:`, error.message);
      set({ error: error.message });
    }
  },

  deleteUser: async (userId: number) => {
    try {
      await UserService.deleteUser(userId);
      set(state => ({
        users: state.users.filter(user => user.id !== userId),
        selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser
      }));
    } catch (error: any) {
      console.error(`Failed to delete user ${userId}:`, error.message);
      set({ error: error.message });
    }
  },

  setError: message => {
    set({ error: message });
  },

  clearError: () => {
    set({ error: null });
  }
}));
