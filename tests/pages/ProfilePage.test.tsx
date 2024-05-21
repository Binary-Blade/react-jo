import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProfilePage from '@/pages/ProfilePage';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { useUserInitials } from '@/hooks/useUserInitial';
import { useLocation } from 'wouter';

vi.mock('wouter', () => ({
  useLocation: vi.fn(() => [null, vi.fn()])
}));

vi.mock('@/stores/useAuthStore', () => ({
  useAuthStore: vi.fn()
}));

vi.mock('@/stores/useUserStore', () => ({
  useUserStore: vi.fn()
}));

vi.mock('@/hooks/useUserInitial', () => ({
  useUserInitials: vi.fn()
}));

vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/features/profile-user/CardProfile', () => ({
  CardProfile: ({ handleUpdate }: { selectedUser: any; handleUpdate: any }) => (
    <div>
      CardProfile Component
      <button onClick={() => handleUpdate({ firstName: 'Updated' })}>Update Profile</button>
    </div>
  )
}));

vi.mock('@/features/profile-user/CardChangePassword', () => ({
  CardChangePassword: ({ handleChangePassword }: { handleChangePassword: any }) => (
    <div>
      CardChangePassword Component
      <button onClick={() => handleChangePassword({ oldPassword: 'old', newPassword: 'new' })}>
        Change Password
      </button>
    </div>
  )
}));

vi.mock('@/features/profile-user/CardAccount', () => ({
  CardAccount: ({ handleDelete, handleLogout }: { handleDelete: any; handleLogout: any }) => (
    <div>
      CardAccount Component
      <button onClick={handleDelete}>Delete Account</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}));

vi.mock('@/features/profile-user/CardNotification', () => ({
  CardNotification: () => <div>CardNotification Component</div>
}));

vi.mock('@/features/profile-user/HeaderProfileUser', () => ({
  HeroProfile: ({ selectedUser, initials }: { selectedUser: any; initials: string }) => (
    <div>
      HeroProfile Component for {selectedUser.firstName} {initials}
    </div>
  )
}));

describe('ProfilePage', () => {
  const mockFetchUserById = vi.fn();
  const mockUpdateUser = vi.fn();
  const mockDeleteUser = vi.fn();
  const mockLogout = vi.fn();
  const mockChangePassword = vi.fn();
  const mockUseAuthStore = {
    logout: mockLogout,
    userId: '1',
    changePassword: mockChangePassword
  };

  const mockUseUserStore = {
    fetchUserById: mockFetchUserById,
    selectedUser: {
      firstName: 'John',
      lastName: 'Doe'
    },
    deleteUser: mockDeleteUser,
    updateUser: mockUpdateUser
  };

  const mockUseUserInitials = 'JD';

  beforeEach(() => {
    vi.clearAllMocks();
    (useLocation as unknown as jest.Mock).mockReturnValue([{}, vi.fn()]);
    (useAuthStore as unknown as jest.Mock).mockReturnValue(mockUseAuthStore);
    (useUserStore as unknown as jest.Mock).mockReturnValue(mockUseUserStore);
    (useUserInitials as jest.Mock).mockReturnValue(mockUseUserInitials);
  });

  it('renders correctly with all components', () => {
    render(<ProfilePage />);

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('HeroProfile Component for John JD')).toBeInTheDocument();
    expect(screen.getByText('CardProfile Component')).toBeInTheDocument();
    expect(screen.getByText('CardChangePassword Component')).toBeInTheDocument();
    expect(screen.getByText('CardAccount Component')).toBeInTheDocument();
    expect(screen.getByText('CardNotification Component')).toBeInTheDocument();
  });

  it('calls fetchUserById with the correct userId', () => {
    render(<ProfilePage />);
    expect(mockFetchUserById).toHaveBeenCalledWith('1');
  });

  it('handles profile update correctly', async () => {
    render(<ProfilePage />);

    fireEvent.click(screen.getByText('Update Profile'));

    await waitFor(() => {
      expect(mockUpdateUser).toHaveBeenCalledWith('1', { firstName: 'Updated' });
    });
  });

  it('handles password change correctly', async () => {
    mockChangePassword.mockResolvedValue({ success: true }); // Ajout de la structure de réponse

    render(<ProfilePage />);

    fireEvent.click(screen.getByText('Change Password'));

    await waitFor(() => {
      expect(mockChangePassword).toHaveBeenCalledWith({ oldPassword: 'old', newPassword: 'new' });
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  it('handles logout correctly', async () => {
    render(<ProfilePage />);

    fireEvent.click(screen.getByText('Logout'));

    await waitFor(() => {
      expect(mockLogout).toHaveBeenCalled();
    });
  });

  it('handles account deletion correctly', async () => {
    render(<ProfilePage />);

    fireEvent.click(screen.getByText('Delete Account'));

    await waitFor(() => {
      expect(mockDeleteUser).toHaveBeenCalledWith('1');
    });
  });

  it('displays an error message when password change fails', async () => {
    mockChangePassword.mockResolvedValue({ success: false, error: 'Password change failed' }); // Ajout de la structure de réponse d'erreur

    render(<ProfilePage />);

    fireEvent.click(screen.getByText('Change Password'));

    await waitFor(() => {
      expect(screen.getByText('Password change failed')).toBeInTheDocument();
    });
  });
});
