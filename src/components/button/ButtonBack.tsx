import { LogOutIcon } from '@/components/ui/IconComponents';

/**
 * `ButtonBack` component provides a button to navigate back to the previous page.
 * It includes an icon and a visually hidden label for accessibility.
 *
 * @component
 * @returns {JSX.Element} The rendered ButtonBack component.
 *
 * @example
 * return <ButtonBack />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `LogOutIcon` for the back navigation icon.
 */
export const ButtonBack = (): JSX.Element => {
  /**
   * Handle the back navigation.
   */
  const handleBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <button onClick={handleBack} className="button ghost">
      {/* Back Icon */}
      <LogOutIcon className="h-8 w-8 rotate-180" />
      {/* Visually hidden label for accessibility */}
      <span className="sr-only">Back</span>
    </button>
  );
};
