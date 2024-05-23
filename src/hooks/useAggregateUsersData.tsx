import { useEffect, useState } from 'react';
import { useUserStore } from '@/stores/useUserStore';

/**
 * Custom hook `useAggregateUsersData` is responsible for aggregating user data
 * from the user store. It calculates the total number of clients, total revenue,
 * and new sign-ups in the last 7 days, and returns this aggregated data.
 *
 * @returns {Object} An object containing total clients, total revenue, and new sign-ups.
 *
 * @example
 * const { totalClients, totalRevenue, newSignUps } = useAggregateUsersData();
 *
 * @remarks
 * The hook uses the `useUserStore` to fetch and access user data. It performs calculations
 * using `useEffect` hooks to update the state whenever the user data changes.
 */
export const useAggregateUsersData = (): {
  totalClients: number;
  totalRevenue: number;
  newSignUps: number;
} => {
  // Extract user values and fetch function from the user store
  const { usersValues, fetchAllUsersValues } = useUserStore();

  // State for storing aggregated user data
  const [cardDataEvent, setCardDataEvent] = useState<{
    totalClients: number;
    totalRevenue: number;
    newSignUps: number;
  }>({
    totalClients: 0,
    totalRevenue: 0,
    newSignUps: 0
  });

  // Fetch user values on component mount
  useEffect(() => {
    fetchAllUsersValues(); // This assumes fetchAllUsersValues updates usersValues in your store
  }, [fetchAllUsersValues]);

  // Calculate total clients, total revenue, and new sign-ups whenever user values change
  useEffect(() => {
    const totalClients = usersValues.length;
    const totalRevenue = usersValues.reduce((acc, user) => acc + user.totalSpent, 0);
    const newSignUps = usersValues.filter(
      user => new Date(user.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ).length;
    setCardDataEvent({ totalClients, totalRevenue, newSignUps });
  }, [usersValues]);

  return cardDataEvent;
};
