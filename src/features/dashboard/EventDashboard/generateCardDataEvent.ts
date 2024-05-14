import { DollarSignIcon, PackageIcon, ShoppingCartIcon } from '@/components/ui/IconComponents';

export const generateCardDataEvent = (
  totalQuantity: number,
  totalSold: number,
  totalRevenue: number
) => [
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
