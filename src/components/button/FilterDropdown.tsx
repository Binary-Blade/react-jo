import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface FilterDropdownProps {
  options: { value: string; label: string }[];
  filterValue: string | undefined;
  onChange: (value: string) => void;
  label: string;
}

export const FilterDropdown: FC<FilterDropdownProps> = ({
  options,
  filterValue,
  onChange,
  label
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="outline">
          {label}: {filterValue}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={filterValue} onValueChange={onChange}>
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
