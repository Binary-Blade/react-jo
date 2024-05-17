import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface SortOrderDropdownProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

export const SortOrderDropdown: FC<SortOrderDropdownProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden md:flex" variant="outline">
          Order by
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
          <DropdownMenuRadioItem value="ASC">Ascending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="DESC">Descending</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
