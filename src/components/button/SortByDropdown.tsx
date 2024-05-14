import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

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
          Sort by
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
