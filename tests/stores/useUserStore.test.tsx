import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { useUserStore } from '@/stores/useUserStore';
import { UserService } from '@/services/UserService';

// Mock necessary modules
vi.mock('@/services/UserService');

const mockUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: 'USER',
    createdAt: '2023-01-01',
    totalSpent: 100
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    role: 'admin',
    createdAt: '2023-01-02',
    totalSpent: 200
  }
];

UserService.getAllUsers.mockResolvedValue({ data: { users: mockUsers, total: 2 } });
UserService.getAllValuesUsers.mockResolvedValue({ data: mockUsers });
UserService.getUserById.mockResolvedValue({ data: mockUsers[0] });
UserService.updateUser.mockResolvedValue({ data: { ...mockUsers[0], firstName: 'Johnny' } });

const useUserStoreImpl = useUserStore;
beforeEach(() => {
  act(() => {
    useUserStoreImpl.setState({
      users: [],
      usersValues: [],
      selectedUser: null,
      error: null,
      loading: false,
      total: 0
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    users,
    usersValues,
    selectedUser,
    error,
    loading,
    fetchAllUsersFiltered,
    fetchAllUsersValues,
    fetchUserById,
    updateUser,
    deleteUser
  } = useUserStore();

  return (
    <div>
      <button onClick={() => fetchAllUsersFiltered({ page: 1, pageSize: 10 })}>
        Fetch All Users
      </button>
      <button onClick={() => fetchAllUsersValues()}>Fetch All Users Values</button>
      <button onClick={() => fetchUserById(1)}>Fetch User By ID</button>
      <button onClick={() => updateUser(1, { firstName: 'Johnny' })}>Update User</button>
      <button onClick={() => deleteUser(2)}>Delete User</button>
      <div data-testid="users">{JSON.stringify(users)}</div>
      <div data-testid="usersValues">{JSON.stringify(usersValues)}</div>
      <div data-testid="selectedUser">{JSON.stringify(selectedUser)}</div>
      <div data-testid="error">{error}</div>
      <div data-testid="loading">{loading ? 'Loading...' : 'Not Loading'}</div>
    </div>
  );
};

describe('useUserStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch all users successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch All Users'));

    await waitFor(() => {
      expect(UserService.getAllUsers).toHaveBeenCalledWith({ page: 1, pageSize: 10 });
      expect(screen.getByTestId('users').textContent).toContain('john@example.com');
      expect(screen.getByTestId('users').textContent).toContain('jane@example.com');
    });
  });

  it('should fetch all users values successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch All Users Values'));

    await waitFor(() => {
      expect(UserService.getAllValuesUsers).toHaveBeenCalled();
      expect(screen.getByTestId('usersValues').textContent).toContain('john@example.com');
      expect(screen.getByTestId('usersValues').textContent).toContain('jane@example.com');
    });
  });

  it('should fetch user by id successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch User By ID'));

    await waitFor(() => {
      expect(UserService.getUserById).toHaveBeenCalledWith(1);
      expect(screen.getByTestId('selectedUser').textContent).toContain('john@example.com');
    });
  });

  it('should update user successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Update User'));

    await waitFor(() => {
      expect(UserService.updateUser).toHaveBeenCalledWith(1, { firstName: 'Johnny' });
      expect(screen.getByTestId('selectedUser').textContent).toContain('Johnny');
    });
  });
});
