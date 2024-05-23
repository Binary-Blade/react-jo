import { User } from '@/config/interfaces/user/user-type.interface';
import { useMemo } from 'react';

/**
 * Custom hook `useUserInitials` is responsible for generating the initials of a user
 * based on their first and last names.
 *
 * @param {Partial<User>} user - The user object containing firstName and lastName.
 * @returns {string} The initials of the user.
 *
 * @example
 * const initials = useUserInitials({ firstName: 'John', lastName: 'Doe' });
 *
 * @remarks
 * The hook uses `useMemo` to optimize the calculation, ensuring it only recalculates
 * when the user object changes.
 */
export const useUserInitials = (user: Partial<User>): string => {
  return useMemo(() => {
    if (!user) return '';
    const { firstName, lastName } = user;
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  }, [user]);
};
