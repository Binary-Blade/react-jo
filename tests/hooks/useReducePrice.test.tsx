import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useReducePrice } from '@/hooks/useReducePrice';

// Test component to use the hook
const TestComponent = ({
  items,
  propertyExtractor,
  taxesValue
}: {
  items: any[];
  propertyExtractor: (item: any) => number;
  taxesValue: number;
}) => {
  const { total, taxes, totalTaxes } = useReducePrice(items, propertyExtractor, taxesValue);
  return (
    <div>
      <div data-testid="total">Total: {total}</div>
      <div data-testid="taxes">Taxes: {taxes}</div>
      <div data-testid="totalTaxes">Total with Taxes: {totalTaxes}</div>
    </div>
  );
};

describe('useReducePrice', () => {
  const items = [{ price: 100 }, { price: 200 }, { price: 300 }];
  const propertyExtractor = (item: any) => item.price;
  const taxesValue = 0.1; // 10%

  it('should calculate total, taxes, and total with taxes correctly', () => {
    render(
      <TestComponent items={items} propertyExtractor={propertyExtractor} taxesValue={taxesValue} />
    );

    expect(screen.getByTestId('total').textContent).toBe('Total: $600.00');
    expect(screen.getByTestId('taxes').textContent).toBe('Taxes: $60.00');
    expect(screen.getByTestId('totalTaxes').textContent).toBe('Total with Taxes: $660.00');
  });

  it('should update values correctly when items change', () => {
    const newItems = [{ price: 400 }, { price: 500 }, { price: 600 }];
    render(
      <TestComponent
        items={newItems}
        propertyExtractor={propertyExtractor}
        taxesValue={taxesValue}
      />
    );

    expect(screen.getByTestId('total').textContent).toBe('Total: $1,500.00');
    expect(screen.getByTestId('taxes').textContent).toBe('Taxes: $150.00');
    expect(screen.getByTestId('totalTaxes').textContent).toBe('Total with Taxes: $1,650.00');
  });

  it('should update values correctly when taxesValue changes', () => {
    const newTaxesValue = 0.2; // 20%
    render(
      <TestComponent
        items={items}
        propertyExtractor={propertyExtractor}
        taxesValue={newTaxesValue}
      />
    );

    expect(screen.getByTestId('total').textContent).toBe('Total: $600.00');
    expect(screen.getByTestId('taxes').textContent).toBe('Taxes: $120.00');
    expect(screen.getByTestId('totalTaxes').textContent).toBe('Total with Taxes: $720.00');
  });
});
