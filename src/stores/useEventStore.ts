import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { PaginationParams } from '@/config/interfaces/common/pagination-params.interface';
import { EventStoreType } from '@/config/interfaces/event/event-store.interface';
import { filterProperties } from '@/lib/utils';
import { EventService } from '@/services/EventService';
import { create } from 'zustand';

/**
 * `useEventStore` is a Zustand store for managing event state and actions.
 *
 * @constant
 *
 * @example
 * const { events, fetchEvents, addEvent } = useEventStore();
 *
 * @remarks
 * This store handles event operations such as fetching, adding, updating, and deleting events.
 */
export const useEventStore = create<EventStoreType>((set, get) => ({
  events: [],
  event: null,
  allEventsValues: [],
  total: 0,
  loading: false,
  error: null,

  /**
   * Fetch events with pagination and filtering.
   *
   * @param {PaginationParams} params - Pagination and filtering parameters.
   *
   * @example
   * const params: PaginationParams = { limit: 10, offset: 0, sortBy: 'date', sortOrder: 'asc' };
   * await useEventStore.getState().fetchEvents(params);
   * console.log('Events fetched');
   */
  fetchEvents: async (params: PaginationParams) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.getAllEventsFiltered(params);
      if (response.success) {
        set({
          events: response.data.events,
          total: response.data.total,
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch events' });
    }
  },

  /**
   * Fetch all event values.
   *
   *
   * @example
   * await useEventStore.getState().fetchValues();
   * console.log('Event values fetched');
   */
  fetchValues: async () => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.getAllValues();
      if (response.success) {
        set({
          allEventsValues: response.data,
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to fetch events' });
    }
  },

  /**
   * Add a new event.
   *
   * @param {CreateEventDto} eventData - The data for the event to add.
   *
   * @example
   * const eventData: CreateEventDto = { title: 'New Event', startDate: '2023-06-01', endDate: '2023-06-05', basePrice: 50, quantityAvailable: 100, shortDescription: 'A short description', longDescription: 'A long description' };
   * await useEventStore.getState().addEvent(eventData);
   * console.log('Event added');
   */
  addEvent: async (eventData: CreateEventDto) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.createEvent(eventData);
      if (response.success) {
        set({
          events: [...get().events, response.data],
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to add event' });
    }
  },

  /**
   * Get event details by ID.
   *
   * @param {number} eventId - The ID of the event.
   *
   * @example
   * await useEventStore.getState().getEvent(1);
   * console.log('Event details fetched');
   */
  getEvent: async (eventId: number) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.getEventById(eventId);
      if (response.success) {
        set({
          event: response.data,
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to get event' });
    }
  },

  /**
   * Get ticket price for a specific event and ticket type.
   *
   * @param {number} eventId - The ID of the event.
   * @param {string} ticketType - The type of the ticket.
   * @returns {Promise<number | undefined>} The ticket price.
   *
   * @example
   * const price = await useEventStore.getState().getTicketPrice(1, 'VIP');
   * console.log('Ticket price:', price);
   */
  getTicketPrice: async (eventId: number, ticketType: string): Promise<number | undefined> => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.getTicketPrice(eventId, ticketType);
      if (response.success) {
        return response.price;
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to get ticket price' });
    }
  },

  /**
   * Update an existing event.
   *
   * @param {number} eventId - The ID of the event.
   * @param {UpdateEventDto} eventData - The data to update the event with.
   *
   * @example
   * const eventData: UpdateEventDto = { title: 'Updated Event', startDate: '2023-06-01', endDate: '2023-06-05', basePrice: 60, quantityAvailable: 150, shortDescription: 'Updated short description', longDescription: 'Updated long description' };
   * await useEventStore.getState().updateEvent(1, eventData);
   * console.log('Event updated');
   */
  updateEvent: async (eventId: number, eventData: UpdateEventDto) => {
    set({ loading: true, error: null });
    const allowedProps: (keyof UpdateEventDto)[] = [
      'title',
      'shortDescription',
      'longDescription',
      'startDate',
      'endDate',
      'basePrice',
      'quantityAvailable'
    ];
    const dataToSend = filterProperties(eventData, allowedProps);
    try {
      const response = await EventService.updateEvent(eventId, dataToSend);
      if (response.success) {
        const updatedEvents = get().events.map(event =>
          event.eventId === eventId ? { ...event, ...response.data } : event
        );
        set({
          events: updatedEvents,
          loading: false
        });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to update event' });
    }
  },

  /**
   * Delete an event by its ID.
   *
   * @param {number} eventId - The ID of the event.
   *
   * @example
   * await useEventStore.getState().deleteEvent(1);
   * console.log('Event deleted');
   */
  deleteEvent: async (eventId: number) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.deleteEvent(eventId);
      if (response.success) {
        const filteredEvents = get().events.filter(event => event.eventId !== eventId);
        set({ events: filteredEvents });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to delete event' });
    }
  }
}));
