import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { FC, ReactNode } from 'react';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu';
import { MoveHorizontalIcon } from '../ui/IconComponents';
import { Button } from '../ui/button';

// Assuming each column in the data can have a custom renderer for more flexibility
export type Column = {
  key: string;
  header?: string;
  render?: (value: any) => ReactNode;
  className?: string;
  onAction?: (item: any) => void;
};

type TableGenericProps = {
  data: Record<string, any>[];
  columns: Column[];
  onDelete?: (item: Record<string, any>) => void;
};

export const TableGenericData: FC<TableGenericProps> = ({ data, columns, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(col => (
              <TableHead key={col.key} className={col.className}>
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map(col => (
                <TableCell key={col.key} className={col.className}>
                  {col.render ? col.render(item[col.key]) : item[col.key]}
                </TableCell>
              ))}
              <TableCell className="hidden xl:table-cell">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoveHorizontalIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => onDelete && onDelete(item)}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};