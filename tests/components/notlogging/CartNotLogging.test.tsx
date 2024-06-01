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

    expect(screen.getByText("Vous n'êtes pas connecté")).toBeInTheDocument();
    expect(
      screen.getByText(
        'Pour accéder à vos reservations et continuer vos achats, veuillez vous connecter ou créer un compte.'
      )
    ).toBeInTheDocument();
  });

  it('renders the "Se connecter" link with correct href', () => {
    render(<CartNotLogging />);

    const link = screen.getByRole('link', { name: /se connecter/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth');
  });
});
