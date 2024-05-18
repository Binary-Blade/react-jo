import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu';
import { useUserInitials } from '@/hooks/useUserInitial';
import { useAuthStore } from '@/stores/useAuthStore';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export const DropDownAccount = () => {
  const { logout, userId } = useAuthStore();
  const { fetchUserById, selectedUser } = useUserStore();
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
        <Avatar className="h-9 w-9">
          <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
          <AvatarFallback>{initials}</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSettings}>My Account</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
