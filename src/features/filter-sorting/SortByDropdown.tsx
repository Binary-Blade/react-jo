import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { ListIcon } from '@/components/ui/IconComponents';

interface SortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  options: { label: string; value: string }[];
}

export const SortByDropdown: FC<SortProps> = ({ sortBy, onSortChange, options }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="outline">
          <ListIcon className="w-5 h-5 mr-2" />
          Trier par
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={sortBy} onValueChange={onSortChange}>
          {options.map(option => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
