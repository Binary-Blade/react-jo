import { DollarSignIcon, PackageIcon, ShoppingCartIcon } from '@/components/ui/IconComponents';
import { AddNewEvent } from '@/features/dashboard/AddNewEvent';
import { FilterBarDashboard } from '@/components/dashboard/FilterBarDashboard';
import { HeaderCardInfo } from '@/components/dashboard/HeaderCardInfo';
import { TableAllEvents } from '@/components/dashboard/TableAllEvents';

export const EventsDashboard = () => {
  const cardDataEvent = [
    {
      title: 'Total Quantity available',
      value: '2,345',
      Icon: PackageIcon
    },
    {
      title: 'Total Sold',
      value: '2,000',
      Icon: ShoppingCartIcon
    },
    {
      title: 'Total Revenue',
      value: '$92,500',
      Icon: DollarSignIcon
    }
  ];

  return (
    <>
      <FilterBarDashboard title="Events" />
      <HeaderCardInfo cardData={cardDataEvent} />
      <div className="border shadow-sm rounded-lg p-4">
        <AddNewEvent />
      </div>
      <div className="border shadow-sm rounded-lg">
        <TableAllEvents />
      </div>
    </>
  );
};
