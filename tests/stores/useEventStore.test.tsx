import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { useEventStore } from '@/stores/useEventStore';
import { EventService } from '@/services/EventService';

// Mock necessary modules
vi.mock('@/services/EventService');

const mockEvents = [
  {
    eventId: 1,
    title: 'Event 1',
    shortDescription: 'Short description 1',
    longDescription: 'Long description 1',
    categoryType: 'Category 1',
    basePrice: 100,
    eventName: 'Event Name 1',
    startDate: '2023-01-01',
    endDate: '2023-01-02',
    quantityAvailable: 50,
    quantitySold: 10,
    revenueGenerated: 1000,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-02',
    prices: [{ eventPriceId: 1, priceFormula: 'Standard', price: 100 }]
  },
  {
    eventId: 2,
    title: 'Event 2',
    shortDescription: 'Short description 2',
    longDescription: 'Long description 2',
    categoryType: 'Category 2',
    basePrice: 200,
    eventName: 'Event Name 2',
    startDate: '2023-02-01',
    endDate: '2023-02-02',
    quantityAvailable: 100,
    quantitySold: 20,
    revenueGenerated: 2000,
    createdAt: '2023-02-01',
    updatedAt: '2023-02-02',
    prices: [{ eventPriceId: 2, priceFormula: 'Premium', price: 200 }]
  }
];

EventService.getAllEventsFiltered.mockResolvedValue({
  success: true,
  data: { events: mockEvents, total: 2 }
});
EventService.getAllValues.mockResolvedValue({ success: true, data: mockEvents });
EventService.getEventById.mockResolvedValue({ success: true, data: mockEvents[0] });
EventService.createEvent.mockResolvedValue({ success: true, data: mockEvents[0] });
EventService.updateEvent.mockResolvedValue({
  success: true,
  data: { ...mockEvents[0], title: 'Updated Event 1' }
});
EventService.deleteEvent.mockResolvedValue({ success: true });

const useEventStoreImpl = useEventStore;
beforeEach(() => {
  act(() => {
    useEventStoreImpl.setState({
      events: [],
      event: null,
      allEventsValues: [],
      total: 0,
      loading: false,
      error: null
    });
  });
});

// Test component to use the store
const TestComponent = () => {
  const {
    events,
    event,
    allEventsValues,
    error,
    loading,
    fetchEvents,
    fetchValues,
    getEvent,
    addEvent,
    deleteEvent
  } = useEventStore();

  return (
    <div>
      <button onClick={() => fetchEvents({ page: 1, pageSize: 10 })}>Fetch Events</button>
      <button onClick={() => fetchValues()}>Fetch Values</button>
      <button onClick={() => getEvent(1)}>Get Event</button>
      <button onClick={() => addEvent(mockEvents[0])}>Add Event</button>
      <button onClick={() => deleteEvent(2)}>Delete Event</button>
      <div data-testid="events">{JSON.stringify(events)}</div>
      <div data-testid="event">{JSON.stringify(event)}</div>
      <div data-testid="allEventsValues">{JSON.stringify(allEventsValues)}</div>
      <div data-testid="error">{error}</div>
      <div data-testid="loading">{loading ? 'Loading...' : 'Not Loading'}</div>
    </div>
  );
};

describe('useEventStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch all events successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch Events'));

    await waitFor(() => {
      expect(EventService.getAllEventsFiltered).toHaveBeenCalledWith({ page: 1, pageSize: 10 });
      expect(screen.getByTestId('events').textContent).toContain('Event 1');
      expect(screen.getByTestId('events').textContent).toContain('Event 2');
    });
  });

  it('should fetch all event values successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Fetch Values'));

    await waitFor(() => {
      expect(EventService.getAllValues).toHaveBeenCalled();
      expect(screen.getByTestId('allEventsValues').textContent).toContain('Event 1');
      expect(screen.getByTestId('allEventsValues').textContent).toContain('Event 2');
    });
  });

  it('should get event by ID successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Get Event'));

    await waitFor(() => {
      expect(EventService.getEventById).toHaveBeenCalledWith(1);
      expect(screen.getByTestId('event').textContent).toContain('Event 1');
    });
  });

  it('should add an event successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Add Event'));

    await waitFor(() => {
      expect(EventService.createEvent).toHaveBeenCalledWith(mockEvents[0]);
      expect(screen.getByTestId('events').textContent).toContain('Event 1');
    });
  });

  it('should delete an event successfully', async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByText('Delete Event'));

    await waitFor(() => {
      expect(EventService.deleteEvent).toHaveBeenCalledWith(2);
      expect(screen.getByTestId('events').textContent).not.toContain('Event 2');
    });
  });
});
