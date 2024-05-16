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
import { FilterIcon } from '../ui/IconComponents';

interface FilterDropdownGroup {
  label: string;
  options: { value: string; label: string }[];
}

interface FilterDropdownProps {
  groups: FilterDropdownGroup[];
  filterValue: string | undefined;
  onChange: (value: string) => void;
}

export const FilterDropdown: FC<FilterDropdownProps> = ({ groups, filterValue, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="outline">
          <FilterIcon className="w-5 h-5 mr-2" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {groups.map(group => (
          <div key={group.label}>
            <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={filterValue} onValueChange={onChange}>
              {group.options.map(option => (
                <DropdownMenuRadioItem key={option.value} value={option.value}>
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
