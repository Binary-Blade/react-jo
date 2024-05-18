import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { EventStoreType } from '@/config/types/Event/EventStoreType';
import { PaginationParams } from '@/config/types/common/PaginationTypes';
import { filterProperties } from '@/lib/utils';
import { EventService } from '@/services/EventService';
import { create } from 'zustand';

export const useEventStore = create<EventStoreType>((set, get) => ({
  events: [],
  event: null,
  allEventsValues: [],
  total: 0,
  loading: false,
  error: null,

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
      set({ loading: false, error: error.message || 'Failed to add events' });
    }
  },

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
      set({ loading: false, error: error.message || 'Failed to get a events' });
    }
  },

  getTicketPrice: async (eventId, ticketType) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.getTicketPrice(eventId, ticketType);
      if (response.success) {
        return response.price;
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to get a ticket price' });
    }
  },

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
      set({ loading: false, error: error.message || 'Failed to update Event' });
    }
  },

  deleteEvent: async (eventId: number) => {
    set({ loading: true, error: null });
    try {
      const response = await EventService.deleteEvent(eventId);
      if (response.success) {
        const filteredEvents = get().events.filter(event => event.eventId !== eventId);
        set({ events: filteredEvents });
      }
    } catch (error: any) {
      set({ loading: false, error: error.message || 'Failed to delete Event' });
    }
  }
}));
