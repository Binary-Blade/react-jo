import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { UserCircleIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const DropDownAccount = () => {
  const { logout, userId } = useAuthStore();
  const { fetchUserById } = useUserStore();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

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

  const handleSettings = () => {
    navigate('/profile');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none">
          <UserCircleIcon className="h-7 w-7 text-gray-800 hover:text-rose-500 dark:text-gray-200" />
          <span className="sr-only">Toggle user menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSettings}>My Account</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
