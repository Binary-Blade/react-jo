import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FilterIcon } from '@/components/ui/IconComponents';

interface FilterDropdownGroup {
  label: string;
  options: { value: string; label: string }[];
}

interface FilterDropdownProps {
  groups: FilterDropdownGroup[];
  filterValue: string | undefined;
  onChange: (value: string) => void;
}

/**
 * `FilterDropdown` component provides a dropdown menu for filtering options.
 * It groups filter options by category and allows the user to select a filter value.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {FilterDropdownGroup[]} props.groups - The groups of filter options.
 * @param {string | undefined} props.filterValue - The currently selected filter value.
 * @param {function(string): void} props.onChange - Function to handle filter value change.
 * @returns {JSX.Element} The rendered filter dropdown component.
 *
 * @example
 * const groups = [
 *   {
 *     label: 'Category',
 *     options: [
 *       { value: 'all', label: 'All' },
 *       { value: 'sports', label: 'Sports' },
 *       { value: 'music', label: 'Music' }
 *     ]
 *   },
 *   {
 *     label: 'Price',
 *     options: [
 *       { value: 'low-to-high', label: 'Low to High' },
 *       { value: 'high-to-low', label: 'High to Low' }
 *     ]
 *   }
 * ];
 * const [filterValue, setFilterValue] = useState<string>('all');
 * return (
 *   <FilterDropdown
 *     groups={groups}
 *     filterValue={filterValue}
 *     onChange={setFilterValue}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuRadioGroup`,
 *   `DropdownMenuRadioItem`, `DropdownMenuLabel` for dropdown functionality.
 * - `Button` for the trigger button.
 * - `FilterIcon` for the filter icon.
 */
export const FilterDropdown = ({
  groups,
  filterValue,
  onChange
}: FilterDropdownProps): JSX.Element => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="outline">
          <FilterIcon className="w-5 h-5 mr-2" />
          Filtrer
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-64 overflow-y-scroll">
        {groups.map(group => (
          <div key={group.label}>
            {/* Dropdown menu label for the group */}
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
