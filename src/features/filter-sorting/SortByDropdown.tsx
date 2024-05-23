import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ListIcon } from '@/components/ui/IconComponents';

interface SortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  options: { label: string; value: string }[];
}

/**
 * `SortByDropdown` component provides a dropdown menu for sorting options.
 * It allows the user to select a sorting criterion from a list of options.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.sortBy - The currently selected sorting criterion.
 * @param {function(string): void} props.onSortChange - Function to handle sorting criterion change.
 * @param {Object[]} props.options - The list of sorting options.
 * @param {string} props.options[].label - The label of the sorting option.
 * @param {string} props.options[].value - The value of the sorting option.
 * @returns {JSX.Element} The rendered sort by dropdown component.
 *
 * @example
 * const sortOptions = [
 *   { label: 'Date', value: 'date' },
 *   { label: 'Name', value: 'name' },
 *   { label: 'Price', value: 'price' }
 * ];
 * const [sortBy, setSortBy] = useState<string>('date');
 * return (
 *   <SortByDropdown
 *     sortBy={sortBy}
 *     onSortChange={setSortBy}
 *     options={sortOptions}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuRadioGroup`,
 *   `DropdownMenuRadioItem`, `DropdownMenuLabel` for dropdown functionality.
 * - `Button` for the trigger button.
 * - `ListIcon` for the sort icon.
 */
export const SortByDropdown = ({ sortBy, onSortChange, options }: SortProps): JSX.Element => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden sm:flex" variant="outline">
          <ListIcon className="w-5 h-5 mr-2" />
          Trier
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Label for the sorting dropdown */}
        <DropdownMenuLabel>Trier par</DropdownMenuLabel>
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
