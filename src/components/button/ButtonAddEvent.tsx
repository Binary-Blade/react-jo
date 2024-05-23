import { PlusIcon } from '@/components/ui/IconComponents';
import { Button } from '../ui/button';

/**
 * `ButtonAddEvent` component displays a header for events and a button to add a new event.
 * It includes an icon and text inside the button.
 *
 * @component
 * @returns {JSX.Element} The rendered ButtonAddEvent component.
 *
 * @example
 * return <ButtonAddEvent />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Button` for the button layout.
 * - `PlusIcon` for the icon inside the button.
 */
export const ButtonAddEvent = (): JSX.Element => {
  return (
    <>
      {/* Header for Events */}
      <h1 className="font-semibold text-lg">Events</h1>
      <div className="ml-auto flex gap-4">
        {/* Button to Add New Event */}
        <Button variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>
    </>
  );
};
