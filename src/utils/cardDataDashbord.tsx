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
    title: 'Quantité Disponible',
    value: totalQuantity.toLocaleString(),
    Icon: PackageIcon
  },
  {
    title: 'Total des Billets Vendus',
    value: totalSold.toLocaleString(),
    Icon: ShoppingCartIcon
  },
  {
    title: 'Revenu Total',
    value: `${totalRevenue.toLocaleString()} €`,
    Icon: DollarSignIcon
  }
];

export const cardDataUsers = (totalClients: number, totalRevenue: number, newSignUps: number) => [
  {
    title: 'Nombre Total de Clients',
    value: totalClients.toLocaleString(),
    Icon: UsersIcon
  },
  {
    title: 'Revenu Total',
    value: `${totalRevenue.toLocaleString()} €`,
    Icon: LandmarkIcon
  },
  {
    title: 'Nouvelles Inscriptions',
    value: newSignUps.toLocaleString(),
    Icon: PlusIcon
  }
];
