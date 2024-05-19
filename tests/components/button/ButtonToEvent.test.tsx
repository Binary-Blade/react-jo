import { ButtonToEvent } from '@/components/button/ButtonToEvent';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ButtonToEvent', () => {
  it('renders the link with correct href', () => {
    render(<ButtonToEvent />);

    const link = screen.getByRole('link', { name: /logout/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/events');
  });

  it('renders the LogOutIcon', () => {
    render(<ButtonToEvent />);

    const link = screen.getByRole('link', { name: /logout/i });
    expect(link.querySelector('svg')).toBeInTheDocument();
  });
});
