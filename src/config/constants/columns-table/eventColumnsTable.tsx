import { Column } from '@/components/tables/TableGenericData';

/**
 * `eventColumnsTable` function defines the columns for the events table.
 * Each column configuration includes the key, header, optional render function, and optional className for styling.
 *
 * @function
 * @returns {Column[]} The array of column configurations.
 *
 * @example
 * const columns = eventColumnsTable();
 *
 * @remarks
 * This function is used to configure the columns displayed in a table component,
 * specifically for an events table. The `render` functions format the data for specific columns.
 */
export const eventColumnsTable = (): Column[] => [
  {
    key: 'eventId',
    header: 'ID',
    className: 'hidden sm:table-cell' // Hidden on smaller screens, visible on sm and larger
  },
  {
    key: 'title',
    header: 'Event Title'
  },
  {
    key: 'startDate',
    header: 'Start Date',
    render: date => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date to locale string
    className: 'hidden xl:table-cell' // Hidden on smaller and medium screens, visible on xl and larger
  },
  {
    key: 'endDate',
    header: 'End Date',
    render: date => (date ? new Date(date).toLocaleDateString() : 'N/A'), // Format date to locale string
    className: 'hidden xl:table-cell' // Hidden on smaller and medium screens, visible on xl and larger
  },
  {
    key: 'categoryType',
    header: 'Category',
    className: 'hidden sm:table-cell' // Hidden on smaller screens, visible on sm and larger
  },
  {
    key: 'basePrice',
    header: 'Base Price',
    render: price => `$${price}`, // Format price to include dollar sign
    className: 'hidden sm:table-cell' // Hidden on smaller screens, visible on sm and larger
  },
  {
    key: 'quantityAvailable',
    header: 'Quantity Available'
  },
  {
    key: 'quantitySold',
    header: 'Quantity Sold',
    className: 'hidden sm:table-cell' // Hidden on smaller screens, visible on sm and larger
  },
  {
    key: 'revenueGenerated',
    header: 'Revenue Generated',
    render: revenue => `$${revenue}` // Format revenue to include dollar sign
  }
];
