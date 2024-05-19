import { CartNotLogging } from '@/components/notlogging/CartNotLogging';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/features/header/Header', () => ({
  Header: () => <div data-testid="header">Header</div>
}));

describe('CartNotLogging', () => {
  it('renders the header', () => {
    render(<CartNotLogging />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders the UserIcon', () => {
    render(<CartNotLogging />);

    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  it('renders the title and description', () => {
    render(<CartNotLogging />);

    expect(screen.getByText('You are not logged in')).toBeInTheDocument();
    expect(
      screen.getByText(
        'To access your cart and continue shopping, please log in or create an account.'
      )
    ).toBeInTheDocument();
  });

  it('renders the "Log in" link with correct href', () => {
    render(<CartNotLogging />);

    const link = screen.getByRole('link', { name: /log in/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth');
  });
});
