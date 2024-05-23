// CheckoutEmpty.test.tsx
import { CheckoutEmpty } from '@/components/empty/CheckoutEmpty';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Mock the Header component
vi.mock('@/features/header/Header', () => ({
  Header: () => <div data-testid="header">Header</div>
}));

describe('CheckoutEmpty', () => {
  it('renders the header', () => {
    render(<CheckoutEmpty />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders the ShoppingCartIcon', () => {
    render(<CheckoutEmpty />);

    expect(screen.getByTestId('shopping-cart-icon')).toBeInTheDocument();
  });

  it('renders the title and description', () => {
    render(<CheckoutEmpty />);

    expect(screen.getByText('Votre panier est vide')).toBeInTheDocument();
    expect(
      screen.getByText("Vous n'avez pas encore ajouté d'événements à votre panier.")
    ).toBeInTheDocument();
  });

  it('renders the "Parcourir les événements" link with correct href', () => {
    render(<CheckoutEmpty />);

    const link = screen.getByRole('link', { name: /parcourir les événements/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/events');
  });
});
