import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AlertDestructiveProps {
  errorMessage: string | undefined;
}

/**
 * `AlertDestructive` component displays an error alert message.
 * It shows an alert with a destructive variant, including an error icon, title, and description.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string | undefined} props.errorMessage - The error message to display.
 * @returns {JSX.Element} The rendered AlertDestructive component.
 *
 * @example
 * return <AlertDestructive errorMessage="Something went wrong!" />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Alert`, `AlertDescription`, `AlertTitle` for the alert layout.
 * - `AlertCircle` for the error icon.
 */
export const AlertDestructive = ({ errorMessage }: AlertDestructiveProps): JSX.Element => {
  return (
    <Alert variant="destructive">
      {/* Error Icon */}
      <AlertCircle className="h-4 w-4" />
      {/* Alert Title */}
      <AlertTitle>Error</AlertTitle>
      {/* Error Message */}
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
};
