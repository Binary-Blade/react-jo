import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { QuantitySelector } from "@/components/common/QuantitySelector"
import { Button } from "@/components/ui/button"
import { FC, useCallback, useState } from "react"
import { PriceFormula } from "@/config/enums/PriceFormula.enum"
import { useAuthStore } from "@/stores/useAuthStore"
import { XIcon } from "@/assets/icons/IconComponents"
import { Separator } from "@radix-ui/react-dropdown-menu"
import useLocalCartStore from "@/stores/useLocalCartStore"

type TicketPriceReserveCartProps = {
  eventId: number | undefined;
  currentPrice: number | undefined;
  selectedTicketType: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  handleTicketTypeChange: (value: PriceFormula) => void;
};

export const TicketPriceReserveCart: FC<TicketPriceReserveCartProps> = ({ eventId, currentPrice, selectedTicketType, quantity, setQuantity, handleTicketTypeChange }) => {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const { cartItems, addItemToCartLocal, removeCartItemLocal } = useLocalCartStore(state => ({
    addItemToCartLocal: state.addItemToCartLocal,
    removeCartItemLocal: state.removeCartItemLocal,
    cartItems: state.cartItems
  }));
  // Calculate the total before taxes
  const totalBeforeTaxes = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
        priceFormula: selectedTicketType,
      };
      addItemToCartLocal(cartItem);
    } else {
      console.error("Required information is missing for adding item to cart.");
    }
  }, [eventId, currentPrice, selectedTicketType, addItemToCartLocal]);

  const handleDelete = useCallback((priceFormula: string) => {
    if (eventId && priceFormula) {
      removeCartItemLocal(eventId, priceFormula);
    } else {
      console.error("Event ID or Price Formula is undefined.");
    }
  }, [eventId, removeCartItemLocal]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Ticket Prices
          </CardTitle>
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

              <div className="flex flex-col justify-between pb-2 gap-2">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center gap-2">
                    <div className="flex flex-row items-center gap-2">
                      <Button size="icon" variant="outline" onClick={() => handleDelete(item.priceFormula)}  >
                        <XIcon className="w-4 h-4" />
                      </Button>
                      <div className="text-gray-500 dark:text-gray-400">{`${item.quantity} x Formule ${item.priceFormula}`}</div>
                    </div>
                    <div>{`€${item.price * item.quantity}`}</div>
                  </div>
                ))}
              </div>
              <Separator />
              {showCartPreview && (<>
                <div className="flex justify-between items-center pt-4">
                  <div className="font-semibold">Total</div>
                  <div>{`€${totalBeforeTaxes}`}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{totalItems} items</div>
              </>
              )
              }
              <Separator />
              <div className="flex gap-2">
                <Button type="submit" onClick={handleAddToCart} className="w-full">Add to Cart</Button>
                <Button className="w-full" variant="outline">Reserve</Button>
              </div>
              <div>
              </div>
              <div className="text-sm text-gray-500 text-center dark:text-gray-400">You won't be charged yet</div>
            </div>
          </form>
        </CardContent>
      </Card >
    </>
  );
};
