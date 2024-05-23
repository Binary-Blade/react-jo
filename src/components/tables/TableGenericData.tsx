import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { ReactNode } from 'react';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/dropdown-menu';
import { MoveHorizontalIcon } from '../ui/IconComponents';
import { Button } from '../ui/button';

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
  onEdit?: (item: any) => void;
};

/**
 * `TableGenericData` component displays tabular data with customizable columns and actions.
 * It supports rendering custom content in cells and provides actions via a dropdown menu.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {Record<string, any>[]} props.data - The data to be displayed in the table.
 * @param {Column[]} props.columns - The columns configuration for the table.
 * @param {function} [props.onDelete] - Function to handle the deletion of a row.
 * @param {function} [props.onEdit] - Function to handle the editing of a row.
 * @returns {JSX.Element} The rendered TableGenericData component.
 *
 * @example
 * const data = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
 * const columns = [
 *   { key: 'id', header: 'ID' },
 *   { key: 'name', header: 'Name' }
 * ];
 * return (
 *   <TableGenericData
 *     data={data}
 *     columns={columns}
 *     onDelete={handleDelete}
 *     onEdit={handleEdit}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Table`, `TableHead`, `TableRow`, `TableHeader`, `TableCell`, `TableBody` for the table layout.
 * - `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuLabel`, `DropdownMenuItem`, `DropdownMenuContent` for the action menu.
 * - `Button` for the action buttons.
 * - `MoveHorizontalIcon` for the icon in the action menu trigger button.
 */
export const TableGenericData = ({
  data,
  columns,
  onDelete,
  onEdit
}: TableGenericProps): JSX.Element => {
  return (
    <div className="overflow-x-auto" data-testid="table-container">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(col => (
              <TableHead key={col.key} className={col.className} data-testid={`header-${col.key}`}>
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} data-testid={`row-${index}`}>
              {columns.map(col => (
                <TableCell
                  key={col.key}
                  className={col.className}
                  data-testid={`cell-${index}-${col.key}`}
                >
                  {/* Render custom content if a render function is provided, otherwise display the raw value */}
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
                    <DropdownMenuItem onSelect={() => onEdit && onEdit(item)}>
                      Éditer
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => onDelete && onDelete(item)}>
                      Supprimer
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
