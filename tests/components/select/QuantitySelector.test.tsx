import { QuantitySelector } from '@/components/select/QuantitySelector';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('QuantitySelector', () => {
  const quantity = 5;
  const onQuantityChange = vi.fn();

  it('renders the quantity correctly', () => {
    render(<QuantitySelector quantity={quantity} onQuantityChange={onQuantityChange} />);

    expect(screen.getByText(quantity)).toBeInTheDocument();
  });

  it('calls onQuantityChange with incremented value when plus button is clicked', () => {
    render(<QuantitySelector quantity={quantity} onQuantityChange={onQuantityChange} />);

    fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    expect(onQuantityChange).toHaveBeenCalledWith(quantity + 1);
  });

  it('calls onQuantityChange with decremented value when minus button is clicked', () => {
    render(<QuantitySelector quantity={quantity} onQuantityChange={onQuantityChange} />);

    fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
    expect(onQuantityChange).toHaveBeenCalledWith(quantity - 1);
  });

  it('does not call onQuantityChange when quantity is 1 and minus button is clicked', () => {
    const onQuantityChange = vi.fn();
    render(<QuantitySelector quantity={1} onQuantityChange={onQuantityChange} />);

    fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
    expect(onQuantityChange).not.toHaveBeenCalled();
  });
});
