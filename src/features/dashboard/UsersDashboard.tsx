import { LandmarkIcon, PlusIcon, UsersIcon } from '@/components/ui/IconComponents';
import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { TableAllUsers } from '@/components/dashboard/TableAllUsers';

// Define a data array for the cards
const cardDataUser = [
  {
    title: 'Total Clients',
    value: '12,345',
    Icon: UsersIcon
  },
  {
    title: 'Total Revenue',
    value: '$2,389,000',
    Icon: LandmarkIcon
  },
  {
    title: 'New Sign-ups',
    value: '345',
    Icon: PlusIcon
  }
];

export const UsersDashboard = () => {
  return (
    <>
      <FilterBarDashboard title="Users" />
      <div className="grid gap-6">
        <HeaderCardInfo cardData={cardDataUser} />
        <TableAllUsers />
      </div>
    </>
  );
};
