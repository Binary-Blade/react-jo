import { LandmarkIcon, PlusIcon, UsersIcon } from '@/components/ui/IconComponents';

export const cardDataUser = (totalClients: number, totalRevenue: number, newSignUps: number) => [
  {
    title: 'Total Clients',
    value: totalClients.toLocaleString(),
    Icon: UsersIcon
  },
  {
    title: 'Total Revenue',
    value: `$${totalRevenue.toLocaleString()}`,
    Icon: LandmarkIcon
  },
  {
    title: 'New Sign-ups',
    value: newSignUps.toLocaleString(),
    Icon: PlusIcon
  }
];
