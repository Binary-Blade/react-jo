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
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FilterIcon, ListOrderedIcon, TrashIcon } from '@/components/ui/IconComponents';
export const TicketsDashboard = () => {
  return (
    <>
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket #</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">OLY-001</TableCell>
              <TableCell>Opening Ceremony</TableCell>
              <TableCell>2024-07-26</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  Open
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OLY-002</TableCell>
              <TableCell>100m Final</TableCell>
              <TableCell>2024-08-02</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">OLY-003</TableCell>
              <TableCell>Gymnastics Finals</TableCell>
              <TableCell>2024-08-05</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>
                <Badge
                  className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  variant="outline"
                >
                  Closed
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
