import { CardContent, Card, CardTitle, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { QuantitySelector } from '@/components/common/QuantitySelector';
import { Button } from '@/components/ui/button';
import { FC, useCallback, useMemo, useState } from 'react';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { useAuthStore } from '@/stores/useAuthStore';
import { XIcon } from '@/assets/icons/IconComponents';
import { Separator } from '@radix-ui/react-dropdown-menu';
import useLocalCartStore from '@/stores/useLocalCartStore';
import useCartStore from '@/stores/useCartStore';
import { Link } from 'wouter';

type TicketPriceReserveCartProps = {
  eventId: number | undefined;
  currentPrice: number | undefined;
  selectedTicketType: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleTicketTypeChange: (value: PriceFormula) => void;
  isAuthenticated: boolean;
};

// TODO: FIX TOTAL PRICE DISAPPEAR WHEN REFRESH, AND THE PREVIEW SHOULD BE HIDDEN WHEN CLICK ON RESERVE
// HACK: REFACTOR THIS COMPONENT TO USE A MODAL FOR THE CART PREVIEW
export const TicketPriceReserveCart: FC<TicketPriceReserveCartProps> = ({
  eventId,
  currentPrice,
  selectedTicketType,
  quantity,
  setQuantity,
  handleTicketTypeChange,
  isAuthenticated
}) => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const userId = useAuthStore(state => state.userId);
  const { cartId, cartItems, addItemToCart, removeCartItem } = useCartStore(state => ({
    cartId: state.cartId,
    cartItems: state.cartItems,
    removeCartItem: state.removeCartItem,
    addItemToCart: state.addItemToCart
  }));
  const { cartItemsLocal, addItemToCartLocal, removeCartItemLocal } = useLocalCartStore(state => ({
    addItemToCartLocal: state.addItemToCartLocal,
    removeCartItemLocal: state.removeCartItemLocal,
    cartItemsLocal: state.cartItemsLocal
  }));

  const { totalItems, totalPrice } = useMemo(() => {
    const items = isAuthenticated ? cartItems : cartItemsLocal;
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  }, [cartItems, cartItemsLocal, isAuthenticated]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleAddToCart = useCallback(() => {
    setShowCartPreview(true);
    if (eventId && currentPrice && selectedTicketType) {
      const cartItem = {
        eventId,
        quantity,
        price: currentPrice,
        priceFormula: selectedTicketType
      };
      if (!isAuthenticated) {
        addItemToCartLocal(cartItem);
      } else if (userId) {
        addItemToCart(userId, cartItem);
      }
    } else {
      console.error('Required information is missing for adding item to cart.');
    }
  }, [
    eventId,
    currentPrice,
    selectedTicketType,
    addItemToCartLocal,
    isAuthenticated,
    userId,
    addItemToCart
  ]);

  const handleDelete = useCallback(
    (item: any) => {
      if (isAuthenticated) {
        if (userId && eventId && cartId && item.cartItemId) {
          // Delete from remote cart
          removeCartItem(userId, cartId, item.cartItemId);
        } else {
          console.error('Event ID, Cart ID, or Cart Item ID is undefined.');
        }
      } else {
        if (eventId && item.priceFormula) {
          // Delete from local cart
          removeCartItemLocal(eventId, item.priceFormula);
        } else {
          console.error('Event ID or Price Formula is undefined.');
        }
      }
    },
    [eventId, cartId, userId, isAuthenticated, removeCartItemLocal, removeCartItem]
  );

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Ticket Prices</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <div className="flex gap-6 pb-3">
                <Select value={selectedTicketType} onValueChange={handleTicketTypeChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="FORMULAS" />
                  </SelectTrigger>
                  <SelectContent className="p-0 max-w-[276px]">
                    <SelectItem value={PriceFormula.SOLO}>Solo</SelectItem>
                    <SelectItem value={PriceFormula.DUO}>Duo</SelectItem>
                    <SelectItem value={PriceFormula.FAMILY}>Family</SelectItem>
                  </SelectContent>
                </Select>
                <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
              </div>

              <div className="flex gap-2">
                <Button type="submit" onClick={handleAddToCart} className="w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col justify-between pb-2 gap-2">
                {(isAuthenticated ? cartItems : cartItemsLocal).map((item, index) => (
                  <div key={index} className="flex justify-between items-center gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <Button size="icon" variant="outline" onClick={() => handleDelete(item)}>
                        <XIcon className="w-4 h-4" />
                      </Button>
                      <div className="text-gray-500 dark:text-gray-400">{`${item.quantity} x Formule ${item.priceFormula}`}</div>
                    </div>
                    <div>{`€${item.price * item.quantity}`}</div>
                  </div>
                ))}
              </div>
              <Separator />
              {showCartPreview && (
                <>
                  <div className="flex justify-between items-center pt-4">
                    <div className="font-semibold">Total</div>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {totalItems} items
                    </div>
                    <div>{`€${totalPrice}`}</div>
                  </div>
                </>
              )}
              <Separator />
              <Link href="/cart" className="w-full pt-4">
                <Button variant="outline" className="w-full">
                  Reserve
                </Button>
              </Link>
              <div className="text-sm text-gray-500 text-center dark:text-gray-400">
                You won't be charged yet
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
