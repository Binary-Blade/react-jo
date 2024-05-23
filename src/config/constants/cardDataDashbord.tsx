import {
  DollarSignIcon,
  PackageIcon,
  ShoppingCartIcon,
  LandmarkIcon,
  PlusIcon,
  UsersIcon
} from '@/components/ui/IconComponents';

/**
 * Generates card data for events.
 *
 * @param {number} totalQuantity - The total quantity available.
 * @param {number} totalSold - The total number of tickets sold.
 * @param {number} totalRevenue - The total revenue generated.
 *
 * @example
 * const eventCards = cardDataEvents(1000, 750, 15000);
 * console.log(eventCards);
 */
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

/**
 * Generates card data for users.
 *
 * @param {number} totalClients - The total number of clients.
 * @param {number} totalRevenue - The total revenue generated.
 * @param {number} newSignUps - The number of new sign-ups.
 *
 * @example
 * const userCards = cardDataUsers(500, 20000, 50);
 * console.log(userCards);
 */
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
