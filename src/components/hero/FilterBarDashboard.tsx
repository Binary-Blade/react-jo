import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from '@/components/ui/IconComponents';

interface FilterBarDashboardProps {
  title: string;
}

/**
 * `FilterBarDashboard` component displays a filter bar with a title and a back button.
 * The back button is only visible on smaller screens.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title to display in the filter bar.
 * @returns {JSX.Element} The rendered FilterBarDashboard component.
 *
 * @example
 * return <FilterBarDashboard title="Dashboard" />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Button` for the back button.
 * - `ArrowLeftIcon` for the back button icon.
 */
export const FilterBarDashboard = ({ title }: FilterBarDashboardProps): JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      {/* Back Button for Smaller Screens */}
      <div className="block lg:hidden">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </div>
      {/* Title */}
      <h1 className="font-semibold text-lg md:text-xl">{title}</h1>
    </div>
  );
};
