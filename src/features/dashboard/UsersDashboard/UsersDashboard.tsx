import { LandmarkIcon, PlusIcon, UsersIcon } from '@/components/ui/IconComponents';
import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { TableGenericData } from '@/components/tables/TableGenericData';
import { USERS_COLUMNS } from './usersColumns';
import { useUserStore } from '@/stores/useUserStore';
import { useEffect } from 'react';
import { DashboardHeader } from '@/components/navigation/DashboardHeader';

// Define a data array for the cards
export const UsersDashboard = () => {
  const { users, fetchAllUsers } = useUserStore(state => ({
    users: state.users,
    fetchAllUsers: state.fetchAllUsers
  }));

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  // FIX: Fix types
  const totalClients = users.length;
  const totalRevenue = users.reduce((acc, user) => acc + user.totalSpent, 0);
  const newSignUps = users.filter(
    user => new Date(user.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length;

  const cardDataUser = [
    {
      title: 'Total Clients',
      value: totalClients.toString(),
      Icon: UsersIcon
    },
    {
      title: 'Total Revenue',
      value: `$${totalRevenue.toString()}`,
      Icon: LandmarkIcon
    },
    {
      title: 'New Sign-ups',
      value: newSignUps.toString(),
      Icon: PlusIcon
    }
  ];

  return (
    <>
      <DashboardHeader />
      <FilterBarDashboard title="Users" />
      <div className="grid gap-6">
        <HeaderCardInfo cardData={cardDataUser} />
        <TableGenericData data={users} columns={USERS_COLUMNS} />
      </div>
    </>
  );
};
