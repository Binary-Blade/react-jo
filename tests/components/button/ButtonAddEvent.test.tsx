// ButtonAddEvent.test.tsx
import { ButtonAddEvent } from '@/components/button/ButtonAddEvent';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ButtonAddEvent', () => {
  it('renders the heading', () => {
    render(<ButtonAddEvent />);

    expect(screen.getByText('Events')).toBeInTheDocument();
  });

  it('renders the new event button with icon', () => {
    render(<ButtonAddEvent />);

    expect(screen.getByText('New Event')).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /new event/i });
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
