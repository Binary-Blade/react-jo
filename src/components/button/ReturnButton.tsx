import { LogOutIcon } from '@/components/ui/IconComponents';
import { Link } from 'wouter';

interface ButtonToEventProps {
  href: string;
  className?: string;
}

/**
 * `ReturnButton` component provides a button to navigate to a specified event page.
 * It includes an icon and a visually hidden label for accessibility.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.href - The URL to navigate to.
 * @param {string} [props.className] - Additional CSS classes for styling the icon.
 * @returns {JSX.Element} The rendered ReturnButton component.
 *
 * @example
 * return <ReturnButton href="/events" className="custom-class" />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `LogOutIcon` for the back navigation icon.
 * - `Link` from `wouter` for navigation.
 */
export const ReturnButton = ({ href, className }: ButtonToEventProps): JSX.Element => {
  return (
    <Link className="button ghost" href={href}>
      {/* Back Icon */}
      <LogOutIcon className={`rotate-180 ${className}`} role="svg" />
      {/* Visually hidden label for accessibility */}
      <span className="sr-only">Logout</span>
    </Link>
  );
};
