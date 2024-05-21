import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ReservationPage from '@/pages/ReservationPage'; // Ajustez l'importation en fonction de votre structure de fichiers
import { useAuthStore } from '@/stores/useAuthStore';
import useReservationStore from '@/stores/useReservationStore';
import { useUserStore } from '@/stores/useUserStore';

// Mock the necessary modules
vi.mock('@/stores/useAuthStore', () => ({
  useAuthStore: vi.fn()
}));

vi.mock('@/stores/useUserStore', () => ({
  useUserStore: vi.fn()
}));

vi.mock('@/stores/useReservationStore', () => ({
  default: vi.fn()
}));

vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/components/hero/HeroReservation', () => ({
  HeroReservation: ({
    fullName,
    numberEvents,
    totalTickets
  }: {
    fullName: string;
    numberEvents: number;
    totalTickets: number;
  }) => (
    <div>
      HeroReservation Component for {fullName} with {numberEvents} events and {totalTickets} tickets
    </div>
  )
}));

vi.mock('@/features/reservations/AllReservations', () => ({
  AllReservations: () => <div>AllReservations Component</div>
}));

vi.mock('@/features/Footer', () => ({
  Footer: () => <div>Footer Component</div>
}));

describe('ReservationPage', () => {
  const mockFetchUserById = vi.fn();
  const mockUseAuthStore = {
    userId: '1'
  };
  const mockUseUserStore = {
    selectedUser: {
      firstName: 'John',
      lastName: 'Doe'
    },
    fetchUserById: mockFetchUserById
  };
  const mockUseReservationStore = {
    reservations: [
      {
        reservationDetails: { event: { eventId: 1 } },
        transaction: { statusPayment: 'APPROVED' }
      },
      {
        reservationDetails: { event: { eventId: 2 } },
        transaction: { statusPayment: 'APPROVED' }
      },
      {
        reservationDetails: { event: { eventId: 1 } },
        transaction: { statusPayment: 'APPROVED' }
      }
    ],
    total: 3
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useAuthStore as unknown as jest.Mock).mockReturnValue(mockUseAuthStore);
    (useUserStore as unknown as jest.Mock).mockReturnValue(mockUseUserStore);
    (useReservationStore as unknown as jest.Mock).mockReturnValue(mockUseReservationStore);
  });

  it('renders correctly with all components', () => {
    render(<ReservationPage />);

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(
      screen.getByText('HeroReservation Component for John Doe with 2 events and 3 tickets')
    ).toBeInTheDocument();
    expect(screen.getByText('AllReservations Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });

  it('calls fetchUserById with the correct userId', () => {
    render(<ReservationPage />);
    expect(mockFetchUserById).toHaveBeenCalledWith('1');
  });

  it('calculates unique event count correctly', () => {
    render(<ReservationPage />);
    const uniqueEventCount = new Set(
      mockUseReservationStore.reservations
        .filter(reservation => reservation.transaction.statusPayment === 'APPROVED')
        .map(reservation => reservation.reservationDetails.event.eventId)
    ).size;
    expect(uniqueEventCount).toBe(2);
  });
});
