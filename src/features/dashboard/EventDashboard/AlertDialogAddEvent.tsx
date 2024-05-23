import { PlusIcon } from '@/components/ui/IconComponents';
import { FormAddNewEvent } from '@/components/form/FormAddNewEvent';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

/**
 * `AlertDialogAddEvent` component provides a button to open a dialog for adding a new event.
 * It includes a form inside the dialog for event details submission.
 *
 * @component
 * @returns {JSX.Element} The rendered alert dialog add event component.
 *
 * @example
 * return (
 *   <AlertDialogAddEvent />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Button` for the trigger button.
 * - `PlusIcon` for the button icon.
 * - `AlertDialog`, `AlertDialogContent`, `AlertDialogTrigger` for the dialog functionality.
 * - `FormAddNewEvent` for the form inside the dialog.
 * - `useState` for managing the dialog open state.
 */
export const AlertDialogAddEvent = (): JSX.Element => {
  // State to manage the open state of the dialog
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handle the change in the open state of the dialog.
   *
   * @param {boolean} open - The new open state.
   */
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  /**
   * Handle the success event from the form submission.
   */
  const handleSuccess = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger>
        {/* Trigger button to open the dialog */}
        <Button className="w-52">
          <PlusIcon className="mr-2 h-4 w-4" />
          Ajouter un événement
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* Form to add a new event */}
        <FormAddNewEvent onSuccess={handleSuccess} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
