import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { PaginationParams } from '../common/pagination-params.interface';
import { EventType, EventValues } from './event-type.interface';

/**
 * `EventStoreType` defines the structure of the event store.
 * It includes properties for event state and methods for handling event actions.
 *
 * @interface EventStoreType
 * @property {EventValues[]} allEventsValues - An array of all event values.
 * @property {EventType|null} event - The currently selected event.
 * @property {number|undefined} total - The total number of events, optional or required based on your design.
 * @property {EventType[]} events - An array of events.
 * @property {boolean} loading - Indicates if an event action is in progress.
 * @property {string|null} error - The error message if an event action fails.
 * @property {function} fetchValues - Method to fetch all event values.
 * @property {function} fetchEvents - Method to fetch events with pagination.
 * @property {function} getEvent - Method to get a specific event by ID.
 * @property {function} getTicketPrice - Method to get the ticket price for a specific event and ticket type.
 * @property {function} addEvent - Method to add a new event.
 * @property {function} updateEvent - Method to update an existing event.
 * @property {function} deleteEvent - Method to delete an event.
 *
 * @example
 * const eventStore: EventStoreType = {
 *   allEventsValues: [],
 *   event: null,
 *   total: 0,
 *   events: [],
 *   loading: false,
 *   error: null,
 *   fetchValues: async () => { / implementation / },
 *   fetchEvents: async (params) => { / implementation / },
 *   getEvent: async (eventId) => { / implementation / },
 *   getTicketPrice: async (eventId, ticketType) => { / implementation / },
 *   addEvent: async (eventData) => { / implementation / },
 *   updateEvent: async (eventId, eventData) => { / implementation / },
 *   deleteEvent: async (eventId) => { / implementation / }
 * };
 *
 * @remarks
 * This interface is used to type the event store, ensuring it contains the necessary properties
 * and methods for managing event state and actions within the application.
 */
export interface EventStoreType {
  allEventsValues: EventValues[];
  event: EventType | null;
  total?: number; // Optional or required based on your design
  events: EventType[];
  loading: boolean;
  error: string | null;

  /**
   * Method to fetch all event values.
   *
   * @returns {Promise<void>} A promise that resolves when the event values are fetched.
   */
  fetchValues: () => Promise<void>;

  /**
   * Method to fetch events with pagination.
   *
   * @param {PaginationParams} params - The pagination parameters.
   * @returns {Promise<void>} A promise that resolves when the events are fetched.
   */
  fetchEvents: (params: PaginationParams) => Promise<void>;

  /**
   * Method to get a specific event by ID.
   *
   * @param {number} eventId - The ID of the event to be fetched.
   * @returns {Promise<any>} A promise that resolves when the event is fetched.
   */
  getEvent: (eventId: number) => Promise<any>;

  /**
   * Method to get the ticket price for a specific event and ticket type.
   *
   * @param {number} eventId - The ID of the event.
   * @param {string} ticketType - The type of the ticket.
   * @returns {Promise<any>} A promise that resolves when the ticket price is fetched.
   */
  getTicketPrice: (eventId: number, ticketType: string) => Promise<any>;

  /**
   * Method to add a new event.
   *
   * @param {CreateEventDto} eventData - The data of the event to be created.
   * @returns {Promise<void>} A promise that resolves when the event is added.
   */
  addEvent: (eventData: CreateEventDto) => Promise<void>;

  /**
   * Method to update an existing event.
   *
   * @param {number} eventId - The ID of the event to be updated.
   * @param {UpdateEventDto} eventData - The updated event data.
   * @returns {Promise<void>} A promise that resolves when the event is updated.
   */
  updateEvent: (eventId: number, eventData: UpdateEventDto) => Promise<void>;

  /**
   * Method to delete an event.
   *
   * @param {number} eventId - The ID of the event to be deleted.
   * @returns {Promise<void>} A promise that resolves when the event is deleted.
   */
  deleteEvent: (eventId: number) => Promise<void>;
}
