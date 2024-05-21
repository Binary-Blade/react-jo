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
import { useToast } from '@/components/ui/use-toast';

export default function ProfilePage() {
  const { logout, deleteUser, userId, changePassword } = useAuthStore();
  const { fetchUserById, selectedUser, updateUser } = useUserStore();

  const [, navigate] = useLocation();
  const { toast } = useToast();

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
    if (!userId) return;
    const response = await updateUser(userId, data);
    if (response.success) {
      toast({
        variant: 'success',
        title: 'Profile updated',
        description: `${response.message}`
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.message}`
      });
    }
  };
  const handleChangePassword = async (data: ChangePasswordSchema) => {
    const response = await changePassword(data);
    if (response.success) {
      toast({
        variant: 'success',
        title: 'Profile updated',
        description: `${response.message}`
      });
      setTimeout(() => {
        logout();
        navigate('/auth');
      }, 2000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.error}`
      });
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
    if (!userId) return;
    const response = await deleteUser(userId);
    if (response.success) {
      navigate('/');
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.error}`
      });
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
