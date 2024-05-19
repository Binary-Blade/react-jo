import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { ArrowUpDownIcon } from '@/components/ui/IconComponents';

interface SortOrderDropdownProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

export const SortOrderDropdown: FC<SortOrderDropdownProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden md:flex" variant="outline">
          <ArrowUpDownIcon className="w-4 h-4 mr-2" />
          Ordre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
          <DropdownMenuRadioItem value="ASC">Ascendant</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="DESC">Descendant</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
