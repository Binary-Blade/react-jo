import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useGroupByTicketType } from '@/hooks/useGroupByTicketType';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { CartItem } from '@/config/types/Cart/CartTypes';

// Mock data
const mockItems: CartItem[] = [
  {
    cartItemId: 1,
    eventId: 1,
    priceFormula: PriceFormula.SOLO,
    quantity: 1,
    price: 100,
    event: { eventId: 1, title: 'Event 1', startDate: '2024-01-01', endDate: '2024-01-02' },
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    cart: { cartId: 1 }
  },
  {
    cartItemId: 2,
    eventId: 2,
    priceFormula: PriceFormula.FAMILY,
    quantity: 1,
    price: 300,
    event: { eventId: 2, title: 'Event 2', startDate: '2024-02-01', endDate: '2024-02-02' },
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01',
    cart: { cartId: 1 }
  },
  {
    cartItemId: 3,
    eventId: 3,
    priceFormula: PriceFormula.DUO,
    quantity: 2,
    price: 200,
    event: { eventId: 3, title: 'Event 3', startDate: '2024-03-01', endDate: '2024-03-02' },
    createdAt: '2024-03-01',
    updatedAt: '2024-03-01',
    cart: { cartId: 1 }
  },
  {
    cartItemId: 4,
    eventId: 1,
    priceFormula: PriceFormula.SOLO,
    quantity: 1,
    price: 100,
    event: { eventId: 1, title: 'Event 1', startDate: '2024-01-01', endDate: '2024-01-02' },
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    cart: { cartId: 1 }
  }
];

// Test component to use the hook
const TestComponent = ({ items }: { items: CartItem[] }) => {
  const groupedItems = useGroupByTicketType(items);
  return (
    <div>
      {Object.entries(groupedItems).map(([key, items]) => (
        <div key={key} data-testid={`group-${key}`}>
          {key}
          {items.map(item => (
            <div key={item.cartItemId} data-testid={`item-${item.cartItemId}`}>
              {item.event.title} - {item.priceFormula}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

describe('useGroupByTicketType', () => {
  it('should group and sort items by price formula', () => {
    render(<TestComponent items={mockItems} />);

    const soloGroup = screen.getByTestId('group-SOLO');
    const duoGroup = screen.getByTestId('group-DUO');
    const familyGroup = screen.getByTestId('group-FAMILY');

    expect(soloGroup).toBeInTheDocument();
    expect(duoGroup).toBeInTheDocument();
    expect(familyGroup).toBeInTheDocument();

    // Check items in SOLO group
    expect(screen.getByTestId('item-1')).toHaveTextContent('Event 1 - SOLO');
    expect(screen.getByTestId('item-4')).toHaveTextContent('Event 1 - SOLO');

    // Check items in DUO group
    expect(screen.getByTestId('item-3')).toHaveTextContent('Event 3 - DUO');

    // Check items in FAMILY group
    expect(screen.getByTestId('item-2')).toHaveTextContent('Event 2 - FAMILY');
  });
});
