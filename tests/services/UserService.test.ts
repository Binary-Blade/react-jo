import { describe, it, expect, vi, beforeEach } from 'vitest';
import axiosClient from '@/config/axiosConfig';
import { UserService } from '@/services/UserService';

vi.mock('@/config/axiosConfig');

describe('UserService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getAllUsers', () => {
    it('should fetch all users successfully', async () => {
      const mockResponse = { data: [{ id: 1, name: 'John Doe' }] };
      vi.mocked(axiosClient.get).mockResolvedValueOnce(mockResponse);

      const result = await UserService.getAllUsers({ offset: 1, limit: 10 });
      expect(result).toEqual({ success: true, data: mockResponse.data });
      expect(axiosClient.get).toHaveBeenCalledWith('/users/get-all', {
        params: { offset: 1, limit: 10 }
      });
    });

    it('should handle errors when fetching all users', async () => {
      vi.mocked(axiosClient.get).mockRejectedValueOnce(new Error('Network error'));

      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      await expect(UserService.getAllUsers({ offset: 1, limit: 10 })).rejects.toThrow(
        'Failed to fetch users'
      );

      consoleErrorSpy.mockRestore();
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

      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      await expect(UserService.getAllValuesUsers()).rejects.toThrow('Failed to fetch users');

      consoleErrorSpy.mockRestore();
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

      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      await expect(UserService.getUserById(userId)).rejects.toThrow('Failed to fetch user');

      consoleErrorSpy.mockRestore();
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

      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      await expect(UserService.updateUser(userId, updateData)).rejects.toThrow(
        'Failed to update user'
      );

      consoleErrorSpy.mockRestore();
    });
  });
});
