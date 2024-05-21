import { Column } from '@/components/tables/TableGenericData';
import { Badge } from '@/components/ui/badge';

export const usersColumnsTable: Column[] = [
  { key: 'userId', header: 'ID', className: 'hidden sm:table-cell' }, // Example of responsive hiding
  { key: 'email', header: 'Email' },
  { key: 'firstName', header: 'First Name', className: 'hidden sm:table-cell' }, // Example of responsive hiding
  { key: 'lastName', header: 'Last Name', className: 'hidden sm:table-cell' }, // Example of responsive hiding
  {
    key: 'role',
    header: 'Role',
    render: (role: string): JSX.Element => (
      <Badge
        className={`bg-${role === 'ADMIN' ? 'blue' : 'green'}-100 text-${role === 'ADMIN' ? 'blue' : 'green'}-600`}
        variant="outline"
      >
        {role}
      </Badge>
    ),
    className: 'hidden xl:table-cell' // Only visible on larger screens
  },
  { key: 'transactionsCount', header: 'Transactions' },
  { key: 'totalSpent', header: 'Total Spent' },
  {
    key: 'createdAt',
    header: 'Created At',
    render: (date: string): JSX.Element => <span>{new Date(date).toLocaleDateString()}</span>,
    className: 'hidden xl:table-cell' // Only visible on larger screens
  },
  {
    key: 'lastLogin',
    header: 'Last Login',
    render: (date: string): JSX.Element => <span>{new Date(date).toLocaleDateString()}</span>,
    className: 'hidden xl:table-cell'
  }
];
