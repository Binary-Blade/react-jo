import { Link } from 'wouter';
import { PackageIcon } from '../ui/IconComponents';
import { Header } from '@/features/header/Header';

/**
 * `CheckoutEmpty` component displays a message indicating that the shopping cart is empty.
 * It includes a header, an icon, a message, and a link to browse events.
 *
 * @component
 * @returns {JSX.Element} The rendered CheckoutEmpty component.
 *
 * @example
 * return <CheckoutEmpty />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and icons:
 * - `Header` for the page header.
 * - `ShoppingCartIcon` for the empty cart icon.
 * - `Link` from `wouter` for navigation.
 */
export const CheckoutEmpty = (): JSX.Element => {
  return (
    <>
      {/* Page Header */}
      <Header data-testid="header" />
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          {/* Empty Cart Icon */}
          <PackageIcon data-testid="shopping-cart-icon" className="h-16 w-16" />
          {/* Empty Cart Message */}
          <h1 className="text-4xl font-bold">Votre panier est vide</h1>
          <p className="max-w-lg text-gray-500 dark:text-gray-400">
            Vous n'avez pas encore ajouté d'événements à votre panier.
          </p>
          {/* Browse Events Link */}
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/events"
          >
            Parcourir les événements
          </Link>
        </div>
      </main>
    </>
  );
};
