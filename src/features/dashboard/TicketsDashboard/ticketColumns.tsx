import { Column } from '@/components/tables/TableGenericData';
import { Badge } from '@/components/ui/badge';

export const TICKET_COLUMNS: Column[] = [
  { key: 'ticketNumber', header: 'Ticket #' },
  { key: 'event', header: 'Event' },
  {
    key: 'date',
    header: 'Date',
    render: (date: string): JSX.Element => <span>{new Date(date).toLocaleDateString()}</span>
  },
  { key: 'customer', header: 'Customer' },
  {
    key: 'status',
    header: 'Status',
    render: status => (
      <Badge className={`bg-${status.color} text-${status.textColor}`} variant="outline">
        {status.text}
      </Badge>
    )
  }
];
