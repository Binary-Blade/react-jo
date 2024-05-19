import { CardPromoCode } from '@/components/cards/CardPromoCode';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('CardPromoCode', () => {
  it('renders the card with title and description', () => {
    render(<CardPromoCode />);

    expect(screen.getByText('Code Promo')).toBeInTheDocument();
    expect(
      screen.getByText('Entrez un code promo pour recevoir une réduction.')
    ).toBeInTheDocument();
  });

  it('renders the input with placeholder and button with text', () => {
    render(<CardPromoCode />);

    const input = screen.getByPlaceholderText('Enter promo code');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /appliquer/i });
    expect(button).toBeInTheDocument();
  });
});
