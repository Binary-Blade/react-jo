import { useMemo } from 'react';

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

/**
 * `TotalEventTicketPerFormula` component displays the total price and details of
 * tickets grouped by a specific price formula. It summarizes the number of tickets
 * per event and the total cost for that group.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.priceFormula - The name of the price formula.
 * @param {TicketItem[]} props.items - The list of ticket items grouped by the price formula.
 * @returns {JSX.Element} The rendered total event ticket per formula component.
 *
 * @example
 * const items = [
 *   { cartItemId: 1, event: { title: 'Event 1' }, quantity: 2, price: 100 },
 *   { cartItemId: 2, event: { title: 'Event 2' }, quantity: 1, price: 150 }
 * ];
 * return <TotalEventTicketPerFormula priceFormula="VIP" items={items} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on the `useMemo` hook
 * to efficiently calculate the total price for the group of items.
 */
export const TotalEventTicketPerFormula = ({
  priceFormula,
  items
}: TicketCheckoutProps): JSX.Element => {
  const totalPriceForGroup = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  return (
    <div className="flex items-center justify-between">
      <div>
        {/* Display the price formula as the title */}
        <h3 className="font-semibold">{priceFormula} Tickets</h3>
        {/* Display the list of events and their quantities */}
        <p className="text-gray-500 dark:text-gray-400">
          {items.map((item, index) => (
            <span key={`${priceFormula}-${item.cartItemId}-${index}`}>
              {`${item.event.title} x ${item.quantity}`}
              {index < items.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
      {/* Display the total price for the group */}
      <div className="font-medium pl-2">€{totalPriceForGroup.toFixed(2)}</div>
    </div>
  );
};
