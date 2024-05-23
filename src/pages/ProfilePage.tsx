import { CardProfile } from '@/features/profile-user/CardProfile';
import { CardAccount } from '@/features/profile-user/CardAccount';
import { CardNotification } from '@/features/profile-user/CardNotification';
import { HeroProfile } from '@/features/profile-user/HeaderProfileUser';
import { Header } from '@/features/header/Header';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { useUserInitials } from '@/hooks/useUserInitial';
import { CardChangePassword } from '@/features/profile-user/CardChangePassword';

/**
 * `ProfilePage` is a component that displays the user's profile information and settings.
 *
 * @component
 * @returns {JSX.Element} The rendered profile page.
 *
 * @example
 * return <ProfilePage />;
 *
 * @remarks
 * This component uses `useAuthStore` to get the current user's ID and `useUserStore` to fetch and display user information.
 * It also includes various cards for displaying and managing user profile, account, notifications, and password change.
 */
export default function ProfilePage(): JSX.Element {
  const { userId } = useAuthStore();
  const { fetchUserById, selectedUser } = useUserStore();
  const initials = useUserInitials({
    firstName: selectedUser?.firstName,
    lastName: selectedUser?.lastName
  });

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

  return (
    <>
      <Header />
      {selectedUser && (
        <>
          <HeroProfile selectedUser={selectedUser} initials={initials} />
          <div className="container mx-auto my-12 px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[1fr_300px]">
              <div className="space-y-8">
                <CardProfile selectedUser={selectedUser} userId={userId} />
                <CardChangePassword />
                <CardAccount userId={userId} />
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
