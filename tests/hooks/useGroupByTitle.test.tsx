// useGroupByTitle.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useGroupByTitle } from '@/hooks/useGroupByTitle';
import { CartItemLocal } from '@/config/types/Cart/CartTypes';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';

// Test component to use the hook
const TestComponent = ({ items }: { items: CartItemLocal[] }) => {
  const groupedItems = useGroupByTitle(items);

  return (
    <div>
      {Object.entries(groupedItems).map(([title, items]) => (
        <div key={title} data-testid={`group-${title}`}>
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index} data-testid={`item-${title}-${index}`}>
                {item.title} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

describe('useGroupByTitle', () => {
  const items: CartItemLocal[] = [
    { eventId: 1, title: 'Fruit', price: 10, priceFormula: PriceFormula.DUO, quantity: 3 },
    { eventId: 2, title: 'Fruit', price: 5, priceFormula: PriceFormula.SOLO, quantity: 2 },
    { eventId: 3, title: 'Vegetable', price: 8, priceFormula: PriceFormula.SOLO, quantity: 5 },
    { eventId: 4, title: 'Vegetable', price: 12, priceFormula: PriceFormula.FAMILY, quantity: 1 }
  ];

  it('should group items by title', () => {
    render(<TestComponent items={items} />);

    expect(screen.getByTestId('group-Fruit')).toBeInTheDocument();
    expect(screen.getByTestId('group-Vegetable')).toBeInTheDocument();

    expect(screen.getByTestId('item-Fruit-0')).toHaveTextContent('Fruit - 3');
    expect(screen.getByTestId('item-Fruit-1')).toHaveTextContent('Fruit - 2');
    expect(screen.getByTestId('item-Vegetable-0')).toHaveTextContent('Vegetable - 5');
    expect(screen.getByTestId('item-Vegetable-1')).toHaveTextContent('Vegetable - 1');
  });

  it('should return an empty object when no items are provided', () => {
    render(<TestComponent items={[]} />);

    expect(screen.queryByTestId('group-Fruit')).not.toBeInTheDocument();
    expect(screen.queryByTestId('group-Vegetable')).not.toBeInTheDocument();
  });

  it('should handle items with the same title correctly', () => {
    const duplicateTitleItems: CartItemLocal[] = [
      ...items,
      { eventId: 5, title: 'Fruit', price: 15, priceFormula: PriceFormula.SOLO, quantity: 4 }
    ];

    render(<TestComponent items={duplicateTitleItems} />);

    expect(screen.getByTestId('group-Fruit')).toBeInTheDocument();
    expect(screen.getByTestId('item-Fruit-2')).toHaveTextContent('Fruit - 4');
  });
});
