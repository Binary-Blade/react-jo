import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ArrowUpDownIcon } from '@/components/ui/IconComponents';

interface SortOrderDropdownProps {
  sortOrder: string;
  setSortOrder: (value: string) => void;
}

/**
 * `SortOrderDropdown` component provides a dropdown menu for selecting the sort order.
 * It allows the user to choose between ascending and descending order.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.sortOrder - The currently selected sort order.
 * @param {function(string): void} props.setSortOrder - Function to handle sort order change.
 * @returns {JSX.Element} The rendered sort order dropdown component.
 *
 * @example
 * const [sortOrder, setSortOrder] = useState<string>('ASC');
 * return (
 *   <SortOrderDropdown
 *     sortOrder={sortOrder}
 *     setSortOrder={setSortOrder}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuRadioGroup`,
 *   `DropdownMenuRadioItem` for dropdown functionality.
 * - `Button` for the trigger button.
 * - `ArrowUpDownIcon` for the sort order icon.
 */
export const SortOrderDropdown = ({
  sortOrder,
  setSortOrder
}: SortOrderDropdownProps): JSX.Element => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden md:flex" variant="outline">
          <ArrowUpDownIcon className="w-4 h-4 mr-2" />
          Ordre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Radio group for selecting sort order */}
        <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
          <DropdownMenuRadioItem value="ASC">Croissant</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="DESC">Décroissant</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
