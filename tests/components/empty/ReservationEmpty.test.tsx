import { ReservationEmpty } from '@/components/empty/ReservationEmpty';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ReservationEmpty', () => {
  it('renders the CalendarIcon', () => {
    render(<ReservationEmpty />);

    expect(screen.getByTestId('calendar-icon')).toBeInTheDocument();
  });

  it('renders the title and description', () => {
    render(<ReservationEmpty />);

    expect(screen.getByText('No reservations found')).toBeInTheDocument();
    expect(
      screen.getByText('Please try adjusting your filters or check back later.')
    ).toBeInTheDocument();
  });
});
