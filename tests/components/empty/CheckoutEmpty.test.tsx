import { CheckoutEmpty } from '@/components/empty/CheckoutEmpty';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

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

    expect(screen.getByText('Your Commands is empty')).toBeInTheDocument();
    expect(
      screen.getByText("Looks like you haven't commands anything yet. Start shopping to add items!")
    ).toBeInTheDocument();
  });

  it('renders the "Continue Shopping" link with correct href', () => {
    render(<CheckoutEmpty />);

    const link = screen.getByRole('link', { name: /continue shopping/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/events');
  });
});
