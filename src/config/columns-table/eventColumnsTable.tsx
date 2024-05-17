import { Column } from '@/components/tables/TableGenericData';

export const eventColumnsTable = (): Column[] => [
  { key: 'eventId', header: 'ID', className: 'hidden sm:table-cell' },
  { key: 'title', header: 'Event Title' },
  {
    key: 'startDate',
    header: 'Start Date',
    render: date => (date ? new Date(date).toLocaleDateString() : 'N/A'),
    className: 'hidden xl:table-cell'
  },
  {
    key: 'endDate',
    header: 'End Date',
    render: date => (date ? new Date(date).toLocaleDateString() : 'N/A'),
    className: 'hidden xl:table-cell'
  },
  { key: 'categoryType', header: 'Category', className: 'hidden sm:table-cell' },
  {
    key: 'basePrice',
    header: 'Base Price',
    render: price => `$${price}`,
    className: 'hidden sm:table-cell'
  },
  { key: 'quantityAvailable', header: 'Quantity Available' },
  { key: 'quantitySold', header: 'Quantity Sold', className: 'hidden sm:table-cell' },
  {
    key: 'revenueGenerated',
    header: 'Revenue Generated',
    render: revenue => `$${revenue}`
  }
];
