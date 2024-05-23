import { Link } from 'wouter';
import { UserIcon } from '../ui/IconComponents';
import { Header } from '@/features/header/Header';

/**
 * `CartNotLogging` component displays a message indicating that the user is not logged in.
 * It includes a header, an icon, a message, and a link to the login page.
 *
 * @component
 * @returns {JSX.Element} The rendered CartNotLogging component.
 *
 * @example
 * return <CartNotLogging />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Header` for the page header.
 * - `UserIcon` for the not logged-in icon.
 * - `Link` from `wouter` for navigation.
 */
export const CartNotLogging = (): JSX.Element => (
  <>
    {/* Page Header */}
    <Header data-testid="header" />
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="container flex flex-col items-center justify-center gap-6 text-center">
        {/* Not Logged-In Icon */}
        <UserIcon data-testid="user-icon" className="h-16 w-16" />
        {/* Not Logged-In Message */}
        <h1 className="text-4xl font-bold">You are not logged in</h1>
        <p className="max-w-lg text-gray-500 dark:text-gray-400">
          To access your cart and continue shopping, please log in or create an account.
        </p>
        {/* Login Link */}
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/auth"
        >
          Log in
        </Link>
      </div>
    </main>
  </>
);
