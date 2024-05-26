import { Link, useLocation } from 'wouter';
import { useTransition } from 'react';
import { DropDownAccount } from '@/features/header/DropDownAccount';
import { UserRole } from '@/config/enums/UserRole.enum';
import { CartPopoverPreview } from '@/features/cart/CartPopoverPreview';
import { MedalIcon, PackageIcon } from '@/components/ui/IconComponents';
import { NAVLINKS_PUBLIC } from '@/config/constants/navbar/navlink';

interface NavBarProps {
  isAuthenticated: boolean;
  totalItemsCart: number;
  role: string | null;
  totalCommands: number;
}

/**
 * `NavBar` component displays the navigation bar at the top of the page.
 * It includes navigation links, a cart preview, and user account options.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {boolean} props.isAuthenticated - Indicates if the user is authenticated.
 * @param {number} props.totalItemsCart - The total number of items in the cart.
 * @param {string|null} props.role - The role of the user (e.g., 'ADMIN').
 * @param {number} props.totalCommands - The total number of commands.
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @example
 * return (
 *   <NavBar
 *     isAuthenticated={true}
 *     totalItemsCart={5}
 *     role="ADMIN"
 *     totalCommands={3}
 *   />
 * );
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `DropDownAccount` for the user account dropdown menu.
 * - `CartPopoverPreview` for displaying a preview of the cart.
 * - `MedalIcon`, `PackageIcon` for icons used in the navigation bar.
 * - `useTransition`, `useLocation` from `wouter` for navigation transitions.
 */
export const NavBar = ({
  isAuthenticated,
  totalItemsCart,
  role,
  totalCommands
}: NavBarProps): JSX.Element => {
  const [, startTransition] = useTransition();
  const [, setLocation] = useLocation();

  /**
   * Handle the click event to navigate to the checkout page.
   */
  const handleCheckoutClick = () => {
    startTransition(() => {
      setLocation('/checkout');
    });
  };

  return (
    <div className="w-full shadow-md bg-white dark:bg-gray-950">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Home link with MedalIcon */}
          <Link href="/" className="flex items-center gap-2">
            <MedalIcon className="w-8 h-8 text-rose-500 hidden md:block" />
          </Link>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:ml-2">
            OlymTicket
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-md font-medium">
          {NAVLINKS_PUBLIC.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && role === UserRole.ADMIN && (
            <Link
              href={'/dashboard'}
              className="text-md font-medium text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-500 transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-2">
            <CartPopoverPreview />
            {totalItemsCart > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
                {totalItemsCart}
              </span>
            )}
          </div>
          {!isAuthenticated ? (
            <Link
              href="/auth"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-white bg-rose-500 border 
              border-transparent rounded-md shadow-sm hover:bg-rose-600 transition-all"
            >
              Connexion
            </Link>
          ) : (
            <div className="">
              <DropDownAccount />
            </div>
          )}
          {isAuthenticated && (
            <div className="relative flex items-center gap-2">
              <button
                onClick={handleCheckoutClick}
                className="text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-500 transition-colors"
              >
                <PackageIcon className="w-7 h-7" />
                {totalCommands > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
                    {totalCommands}
                  </span>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
