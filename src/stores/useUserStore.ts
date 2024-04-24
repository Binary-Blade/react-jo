import { UserService } from '@/services/UserService';
import { UserStore } from '@/types/UserTypes';
import { create } from 'zustand';

export const useUserStore = create<UserStore>((set, get) => ({
    users: [],
    selectedUser: null,
    error: null,

    fetchAllUsers: async () => {
        try {
            const result = await UserService.getAllUsers();
            set({ users: result.data });
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
                set((state) => ({
                    users: state.users.map(user =>
                        user.id === userId ? { ...user, ...updateData } : user
                    )
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
            set((state) => ({
                users: state.users.filter(user => user.id !== userId),
                selectedUser: state.selectedUser?.id === userId ? null : state.selectedUser
            }));
        } catch (error: any) {
            console.error(`Failed to delete user ${userId}:`, error.message);
            set({ error: error.message });
        }
    },

    setError: (message) => {
        set({ error: message });
    },

    clearError: () => {
        set({ error: null });
    }
}));

