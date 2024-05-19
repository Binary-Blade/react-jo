import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { useReservationStore } from '@/stores/useReservationStore';
import { ReservationService } from '@/services/ReservationService';

// Mock necessary modules
vi.mock('@/services/ReservationService');

const mockReservations = [
  { id: 1, userId: 1, cartId: 1, details: 'Reservation 1 details' },
  { id: 2, userId: 1, cartId: 2, details: 'Reservation 2 details' }
];

ReservationService.addReservation.mockResolvedValue(mockReservations[0]);
ReservationService.findAllReservations.mockResolvedValue({
  reservations: mockReservations,
  total: 2
});
ReservationService.catchTicketById.mockResolvedValue(mockReservations[0]);

const useReservationStoreImpl = useReservationStore;
beforeEach(() => {
  act(() => {
    useReservationStoreImpl.setState({
      newReservation: null,
      reservations: [],
      reservation: null,
      total: 0,
      loading: false,
      error: null
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    newReservation,
    reservations,
    reservation,
    error,
    loading,
    addReservation,
    fetchReservations,
    catchTicket
  } = useReservationStore();

  return (
    <div>
      <button onClick={() => addReservation(1, 1)}>Add Reservation</button>
      <button onClick={() => fetchReservations(1, { page: 1, pageSize: 10 })}>
        Fetch Reservations
      </button>
      <button onClick={() => catchTicket(1)}>Catch Ticket</button>
      <div data-testid="newReservation">{JSON.stringify(newReservation)}</div>
      <div data-testid="reservations">{JSON.stringify(reservations)}</div>
      <div data-testid="reservation">{JSON.stringify(reservation)}</div>
      <div data-testid="error">{error}</div>
      <div data-testid="loading">{loading ? 'Loading...' : 'Not Loading'}</div>
    </div>
  );
};

describe('useReservationStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should add reservation successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Add Reservation'));

    await waitFor(() => {
      expect(ReservationService.addReservation).toHaveBeenCalledWith(1, 1);
      expect(screen.getByTestId('newReservation').textContent).toContain('Reservation 1 details');
    });
  });

  it('should fetch reservations successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch Reservations'));

    await waitFor(() => {
      expect(ReservationService.findAllReservations).toHaveBeenCalledWith(1, {
        page: 1,
        pageSize: 10
      });
      expect(screen.getByTestId('reservations').textContent).toContain('Reservation 1 details');
      expect(screen.getByTestId('reservations').textContent).toContain('Reservation 2 details');
    });
  });

  it('should catch ticket successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Catch Ticket'));

    await waitFor(() => {
      expect(ReservationService.catchTicketById).toHaveBeenCalledWith(1);
      expect(screen.getByTestId('reservation').textContent).toContain('Reservation 1 details');
    });
  });
});
