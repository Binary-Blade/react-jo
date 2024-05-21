import { User } from '@/config/types/UserTypes';
import { useMemo } from 'react';

export const useUserInitials = (user: Partial<User>) => {
  return useMemo(() => {
    if (!user) return '';
    const { firstName, lastName } = user;
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  }, [user]);
};
