import { useMemo } from 'react';

// Define the types for the items
interface TicketItem {
  cartItemId: number;
  event: {
    title: string;
  };
  quantity: number;
  price: number;
}

interface TicketCheckoutProps {
  priceFormula: string;
  items: TicketItem[];
}

export const TicketCheckout = ({ priceFormula, items }: TicketCheckoutProps) => {
  const totalPriceForGroup = useMemo(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{priceFormula} Tickets</h3>
        <p className="text-gray-500 dark:text-gray-400">
          {items.map((item, index) => (
            <span key={`${priceFormula}-${item.cartItemId}-${index}`}>
              {`${item.event.title} x ${item.quantity}`}
              {index < items.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
      <div className="font-medium pl-2">${totalPriceForGroup.toFixed(2)}</div>
    </div>
  );
};
