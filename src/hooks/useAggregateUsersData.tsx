import { useEffect, useState } from 'react';
import { useUserStore } from '@/stores/useUserStore';

export const useAggregateUsersData = () => {
  const { usersValues, fetchAllUsersValues } = useUserStore();
  const [cardDataEvent, setCardDataEvent] = useState({
    totalClients: 0,
    totalRevenue: 0,
    newSignUps: 0
  });

  useEffect(() => {
    fetchAllUsersValues(); // This assumes fetchValues updates allEventsValues in your store
  }, [fetchAllUsersValues]);

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
