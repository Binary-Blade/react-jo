import { CardProfile } from '@/features/profile-user/CardProfile';
import { CardAccount } from '@/features/profile-user/CardAccount';
import { CardNotification } from '@/features/profile-user/CardNotification';
import { HeroProfile } from '@/features/profile-user/HeaderProfileUser';
import { Header } from '@/features/header/Header';
import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { useUserInitials } from '@/hooks/useUserInitial';
import { ProfileSchema } from '@/config/zod-schemas/profileSchema';
import { CardChangePassword } from '@/features/profile-user/CardChangePassword';
import { ChangePasswordSchema } from '@/config/zod-schemas/changePasswordSchema';

export default function ProfilePage() {
  const { logout, userId, changePassword } = useAuthStore();
  const { fetchUserById, selectedUser, deleteUser, updateUser } = useUserStore();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

  const initials = useUserInitials({
    firstName: selectedUser?.firstName,
    lastName: selectedUser?.lastName
  });

  const handleUpdate = async (data: ProfileSchema) => {
    try {
      if (!userId) return;
      await updateUser(userId, data);
      navigate('/');
      console.log('Profile updated successfully');
    } catch (error: any) {
      const errorMessage = error.message || 'Update failed due to an unexpected error';
      console.error('Failed to update:', errorMessage);
      alert(errorMessage);
    }
  };
  const handleChangePassword = async (data: ChangePasswordSchema) => {
    try {
      await changePassword(data);
      alert('Password changed successfully');
      await logout();
      navigate('/');
    } catch (error: any) {
      const errorMessage = error.message || 'Password change failed due to an unexpected error';
      console.error('Failed to change password:', errorMessage);
      alert(errorMessage);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful');
      navigate('/');
    } catch (error: any) {
      const errorMessage = error.message || 'Logout failed due to an unexpected error';
      console.error('Logout failed:', errorMessage);
      alert(errorMessage);
    }
  };

  const handleDelete = async () => {
    try {
      if (!userId) return;
      await deleteUser(userId);
      navigate('/');
      console.log('Delete account');
    } catch (error: any) {
      const errorMessage = error.message || 'Delete failed due to an unexpected error';
      console.error('Failed to delete:', errorMessage);
      alert(errorMessage);
    }
  };

  return (
    <>
      <Header />

      {selectedUser && (
        <>
          <HeroProfile selectedUser={selectedUser} initials={initials} />
          <div className="container mx-auto my-12 px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
              <div className="space-y-8">
                <CardProfile selectedUser={selectedUser} handleUpdate={handleUpdate} />
                <CardChangePassword handleChangePassword={handleChangePassword} />
                <CardAccount handleDelete={handleDelete} handleLogout={handleLogout} />
              </div>
              <div className="space-y-8">
                <CardNotification />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
