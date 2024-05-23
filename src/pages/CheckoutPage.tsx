import { Separator } from '@/components/ui/separator';
import useCartStore from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect } from 'react';
import { Link } from 'wouter';
import { useGroupByTicketType } from '@/hooks';
import { Header } from '@/features/header/Header';
import { CardPromoCode } from '@/components/cards/CardPromoCode';
import { CardPaymentCheckout } from '@/components/cards/CardPaymentCheckout';
import { CartNotLogging } from '@/components/notlogging/CartNotLogging';
import { CheckoutSummary } from '@/features/checkout/CheckoutSummary';
import { CardFormule } from '@/features/checkout/CardFormule';
import { CheckoutEmpty } from '@/components/empty/CheckoutEmpty';
import { EventHero } from '@/components/hero/EventHero';
import { GenericTitle } from '@/components/hero/GenericTitle';
import { SkeletonCheckoutPage } from '@/components/skeletons/SkelettonCheckoutPage';

/**
 * `CheckoutPage` component is responsible for displaying the checkout process for the user.
 * It includes a summary of cart items, promotional codes, payment options, and various
 * states depending on whether the cart is loading, empty, or the user is not logged in.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout page component.
 *
 * @example
 * return (
 *   <CheckoutPage />
 * )
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components and hooks:
 * - `Header` for displaying the page header.
 * - `EventHero` for displaying event-related hero section.
 * - `GenericTitle` for displaying the main title and subtitle.
 * - `CardFormule`, `CardPromoCode`, `CardPaymentCheckout` for various checkout-related UI elements.
 * - `CheckoutSummary` for displaying the summary of the checkout.
 * - `CheckoutEmpty` and `CartNotLogging` for handling empty cart and not logged in states.
 * - `SkeletonCheckoutPage` for displaying a skeleton loader while the cart is loading.
 * - `useCartStore` and `useAuthStore` for state management.
 * - `useGroupByTicketType` hook for grouping cart items by ticket type.
 */
export default function CheckoutPage(): JSX.Element {
  // Extract necessary state and actions from the cart store
  const { fetchCartItems, cartId, cartItems, loading } = useCartStore();
  // Extract necessary state from the auth store
  const { userId, isAuthenticated } = useAuthStore();

  // Fetch cart items whenever userId or cartId changes
  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [userId, cartId, fetchCartItems]);

  // Group cart items by ticket type using custom hook
  const groupedItems = useGroupByTicketType(cartItems);

  // Display skeleton loader if the cart is loading and there are no items yet
  if (loading && cartItems.length === 0) {
    return <SkeletonCheckoutPage />;
  }

  // Display appropriate component if the cart is empty
  if (cartItems.length === 0) {
    if (isAuthenticated) {
      return <CheckoutEmpty />;
    } else {
      return <CartNotLogging />;
    }
  }

  return (
    <>
      <Header />
      <EventHero />
      <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
        {/* GenericTitle: Displays the main title and subtitle of the page */}
        <GenericTitle
          title="Payez vos billets pour les Jeux Olympiques 2024"
          titleClass="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100"
          subtitleClass="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300"
        />

        {/* Grid layout for displaying grouped ticket items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          {Object.entries(groupedItems).map(([type, items]) => (
            <CardFormule key={type} priceFormula={type} items={items} />
          ))}
        </div>

        <Separator className="my-12" />

        {/* Grid layout for displaying checkout summary, promo code, and payment details */}
        <div className="grid md:grid-cols-2 gap-8">
          <CheckoutSummary />
          <div className="grid gap-4">
            <CardPromoCode />
            <CardPaymentCheckout />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 
          px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none 
          disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Continuer vos achats
        </Link>
      </div>
    </>
  );
}
