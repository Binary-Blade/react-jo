import {
  DollarSignIcon,
  PackageIcon,
  ShoppingCartIcon,
  LandmarkIcon,
  PlusIcon,
  UsersIcon
} from '@/components/ui/IconComponents';

export const cardDataEvents = (totalQuantity: number, totalSold: number, totalRevenue: number) => [
  {
    title: 'Quantity Available',
    value: totalQuantity.toLocaleString(),
    Icon: PackageIcon
  },
  {
    title: 'Total Ticket Sold',
    value: totalSold.toLocaleString(),
    Icon: ShoppingCartIcon
  },
  {
    title: 'Total Revenue',
    value: `$${totalRevenue.toLocaleString()}`,
    Icon: DollarSignIcon
  }
];

export const cardDataUsers = (totalClients: number, totalRevenue: number, newSignUps: number) => [
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
