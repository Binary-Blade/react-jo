import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { UserCircleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * `DropDownAccount` component provides a dropdown menu for user account actions.
 * It includes options for accessing account settings and logging out.
 *
 * @component
 * @returns {JSX.Element} The rendered dropdown account component.
 *
 * @example
 * return (
 *   <DropDownAccount />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuSeparator` for dropdown functionality.
 * - `useAuthStore`, `useUserStore` for state management.
 * - `useToast` for displaying toast notifications.
 * - `useLocation` for navigation.
 */
export const DropDownAccount = (): JSX.Element => {
  // Extract logout function and user ID from auth store
  const { logout, userId } = useAuthStore();
  // Extract function to fetch user details from user store
  const { fetchUserById } = useUserStore();
  // Hook for navigation
  const [, navigate] = useLocation();
  // Hook for displaying toast notifications
  const { toast } = useToast();

  // Fetch user details when userId changes
  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

  /**
   * Handle user logout.
   */
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message || 'Logout failed due to an unexpected error',
        variant: 'destructive'
      });
    }
  };

  /**
   * Handle navigation to user settings.
   */
  const handleSettings = () => {
    navigate('/profile');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none">
          <UserCircleIcon className="h-7 w-7 text-gray-800 hover:text-rose-500 dark:text-gray-200" />
          <span className="sr-only">Ouverture du menu de l'utilisateur</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSettings}>Mon compte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Déconnexion</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
