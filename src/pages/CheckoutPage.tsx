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

export default function CheckoutPage() {
  const { fetchCartItems, cartId, cartItems } = useCartStore();
  const { userId, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [userId, cartId, fetchCartItems]);

  const groupedItems = useGroupByTicketType(cartItems);

  if (cartItems.length === 0 && isAuthenticated) {
    return <CheckoutEmpty />;
  } else if (cartItems.length === 0 && !isAuthenticated) {
    return <CartNotLogging />;
  }
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Payez vos billets pour les Jeux Olympiques 2024</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedItems).map(([type, items]) => (
            <CardFormule key={type} priceFormula={type} items={items} />
          ))}
        </div>
        <Separator className="my-12" />
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
