import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog';

export interface GenericAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
}

/**
 * `GenericAlertDialog` component displays a customizable alert dialog.
 * It includes a title, description, and actions for confirming or canceling.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {boolean} props.isOpen - Indicates if the alert dialog is open.
 * @param {Function} props.onClose - Callback function to handle closing the dialog.
 * @param {Function} props.onConfirm - Callback function to handle confirming the action.
 * @param {string} props.title - The title of the alert dialog.
 * @param {string} props.description - The description of the alert dialog.
 * @param {string} [props.cancelText='Annuler'] - The text for the cancel button.
 * @param {string} [props.confirmText='Continuer'] - The text for the confirm button.
 * @returns {JSX.Element} The rendered GenericAlertDialog component.
 *
 * @example
 * return (
 *   <GenericAlertDialog
 *     isOpen={isDialogOpen}
 *     onClose={handleClose}
 *     onConfirm={handleConfirm}
 *     title="Confirm Action"
 *     description="Are you sure you want to proceed?"
 *     cancelText="Cancel"
 *     confirmText="Continue"
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `AlertDialog`, `AlertDialogContent`, `AlertDialogDescription`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogCancel`, `AlertDialogAction` for the dialog layout.
 */
export const GenericAlertDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  cancelText = 'Annuler',
  confirmText = 'Continuer'
}: GenericAlertDialogProps): JSX.Element => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
