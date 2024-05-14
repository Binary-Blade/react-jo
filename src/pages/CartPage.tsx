import { Separator } from '@/components/ui/separator';
import { CardPaymentCheckout } from '@/components/cart/CardPaymentCheckout';
import { CardPromoCode } from '@/components/cart/CardPromoCode';
import { CardReviewCheckout } from '@/features/cart/CardReviewCheckout';
import useCartStore from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { useEffect } from 'react';
import { CartEmpty } from '@/components/cart/CartEmpty';
import { CardFormule } from '@/features/cart/CardFormule';
import { Header } from '@/features/Header';
import { Link } from 'wouter';
import { useGroupByTicketType } from '@/hooks';

export default function CartPage() {
  const { fetchCartItems, cartId, cartItems } = useCartStore(state => ({
    fetchCartItems: state.fetchCartItems,
    cartItems: state.cartItems,
    cartId: state.cartId
  }));
  const userId = useAuthStore(state => state.userId);

  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [userId, cartId, fetchCartItems]);

  const groupedItems = useGroupByTicketType(cartItems);

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <CartEmpty />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">2024 Olympic Games Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedItems).map(([type, items]) => (
            <CardFormule key={type} priceFormula={type} items={items} />
          ))}
        </div>
        <Separator className="my-12" />
        <div className="grid md:grid-cols-2 gap-8">
          <CardReviewCheckout />
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
          Continue Shopping
        </Link>
      </div>
    </>
  );
}
