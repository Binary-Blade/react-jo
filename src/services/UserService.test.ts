import { describe, it, expect, vi } from 'vitest';
import axiosClient from '@/config/axiosConfig';
import { UserService } from './UserService';

// Correctly mock the axios client
vi.mock('@/config/axiosConfig', async () => {
  const actual = await vi.importActual('@/config/axiosConfig');
  return {
    ...actual,
    default: {
      get: vi.fn(() => Promise.resolve({ data: [] })), // Default response to prevent unhandled rejections
      patch: vi.fn(() => Promise.resolve({ data: [] })),
      delete: vi.fn(() => Promise.resolve({ data: [] }))
    }
  };
});

describe('UserService', () => {
  describe('getAllUsers', () => {
    it('should fetch all users successfully', async () => {
      const mockResponse = { data: [{ id: 1, name: 'John Doe' }] };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result = await UserService.getAllUsers({
        offset: 1,
        limit: 10
      });
      expect(result).toEqual({ success: true, data: mockResponse.data });
      expect(axiosClient.get).toHaveBeenCalledWith('/users/get-all', {
        params: { offset: 1, limit: 10 }
      });
    });

    it('should handle errors when fetching all users', async () => {
      vi.mocked(axiosClient.get).mockRejectedValueOnce(new Error('Network error'));
      await expect(UserService.getAllUsers()).rejects.toThrow('Failed to fetch users');
    });
  });

  describe('getAllValuesUsers', () => {
    it('should fetch all user values successfully', async () => {
      const mockResponse = { data: [{ id: 1, name: 'John Doe' }] };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result = await UserService.getAllValuesUsers();
      expect(result).toEqual({ success: true, data: mockResponse.data });
    });

    it('should handle errors when fetching user values', async () => {
      vi.mocked(axiosClient.get).mockRejectedValueOnce(new Error('Network error'));
      await expect(UserService.getAllValuesUsers()).rejects.toThrow('Failed to fetch users');
    });
  });

  describe('getUserById', () => {
    it('should fetch a user by ID successfully', async () => {
      const userId = 1;
      const mockResponse = { data: { id: userId, name: 'John Doe' } };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result = await UserService.getUserById(userId);
      expect(result).toEqual({ success: true, data: mockResponse.data });
      expect(axiosClient.get).toHaveBeenCalledWith(`/users/${userId}`);
    });

    it('should handle errors when fetching a user by ID', async () => {
      const userId = 1;
      vi.mocked(axiosClient.get).mockRejectedValueOnce(new Error('Network error'));
      await expect(UserService.getUserById(userId)).rejects.toThrow('Failed to fetch user');
    });
  });

  describe('updateUser', () => {
    it('should update a user successfully', async () => {
      const userId = 1;
      const updateData = { name: 'Jane Doe' };
      const mockResponse = { data: { id: userId, name: 'Jane Doe' } };
      vi.mocked(axiosClient.patch).mockResolvedValueOnce(mockResponse);

      const result = await UserService.updateUser(userId, updateData);
      expect(result).toEqual({ success: true, data: mockResponse.data });
      expect(axiosClient.patch).toHaveBeenCalledWith(`/users/${userId}`, updateData);
    });

    it('should handle errors when updating a user', async () => {
      const userId = 1;
      const updateData = { name: 'Jane Doe' };
      vi.mocked(axiosClient.patch).mockRejectedValueOnce(new Error('Network error'));
      await expect(UserService.updateUser(userId, updateData)).rejects.toThrow(
        'Failed to update user'
      );
    });
  });

  describe('deleteUser', () => {
    it('should delete a user successfully', async () => {
      const userId = 1;
      const mockResponse = { data: { success: true, message: 'User deleted successfully.' } };
      vi.mocked(axiosClient.delete).mockResolvedValueOnce(mockResponse);

      const result = await UserService.deleteUser(userId);
      expect(result).toEqual({ success: true, data: mockResponse.data });
      expect(axiosClient.delete).toHaveBeenCalledWith(`/users/${userId}`);
    });

    it('should handle errors when deleting a user', async () => {
      const userId = 1;
      vi.mocked(axiosClient.delete).mockRejectedValueOnce(new Error('Network error'));
      await expect(UserService.deleteUser(userId)).rejects.toThrow('Failed to delete user');
    });
  });
});
