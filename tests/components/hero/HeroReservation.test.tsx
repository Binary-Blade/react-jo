import { HeroReservation } from '@/components/hero/HeroReservation';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('HeroReservation', () => {
  const fullName = 'John Doe';
  const numberEvents = 5;
  const totalTickets = 10;

  it('renders the title with the full name', () => {
    render(
      <HeroReservation
        fullName={fullName}
        numberEvents={numberEvents}
        totalTickets={totalTickets}
      />
    );

    expect(screen.getByText(`${fullName}'s Reservations`)).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    render(
      <HeroReservation
        fullName={fullName}
        numberEvents={numberEvents}
        totalTickets={totalTickets}
      />
    );

    expect(
      screen.getByText('Attending the 2024 Olympic Games in Paris, France.')
    ).toBeInTheDocument();
  });

  it('renders the number of events and tickets correctly', () => {
    render(
      <HeroReservation
        fullName={fullName}
        numberEvents={numberEvents}
        totalTickets={totalTickets}
      />
    );

    expect(screen.getByText(numberEvents)).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText(totalTickets)).toBeInTheDocument();
    expect(screen.getByText('Tickets')).toBeInTheDocument();
  });
});
