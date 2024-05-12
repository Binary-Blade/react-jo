import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup
} from '@/components/ui/dropdown-menu';
import { FilterIcon, ListOrderedIcon } from '@/components/ui/IconComponents';
import { TableGenericData } from '@/components/tables/TableGenericData';
import { TICKET_COLUMNS } from './ticketColumns';
import { DashboardHeader } from '@/components/navigation/DashboardHeader';

const ticketData = [
  {
    ticketNumber: 'OLY-001',
    event: 'Opening Ceremony',
    date: '2024-07-26',
    customer: 'John Doe',
    status: { text: 'Open', color: 'green-100', textColor: 'green-600' }
  },
  {
    ticketNumber: 'OLY-002',
    event: '100m Final',
    date: '2024-08-02',
    customer: 'Jane Smith',
    status: { text: 'Pending', color: 'yellow-100', textColor: 'yellow-600' }
  },
  {
    ticketNumber: 'OLY-003',
    event: 'Gymnastics Finals',
    date: '2024-08-05',
    customer: 'Michael Johnson',
    status: { text: 'Closed', color: 'red-100', textColor: 'red-600' }
  }
];

export const TicketsDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="flex items-center">
        <h2 className="font-semibold text-lg md:text-2xl">Tickets</h2>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Open</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Closed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <ListOrderedIcon className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="date">
                <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="event">Event</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="customer">Customer</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg">
        <TableGenericData data={ticketData} columns={TICKET_COLUMNS} />
      </div>
    </>
  );
};
