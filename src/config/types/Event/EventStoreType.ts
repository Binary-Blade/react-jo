import { CreateEventDto, UpdateEventDto } from '@/config/dtos/Event.dto';
import { PaginationParams } from '../common/PaginationTypes';
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

export type prices = {
  eventPriceId: number;
  priceFormula: string;
  price: number;
};

export type EventType = {
  eventId?: number | undefined;
  title: string;
  shortDescription: string;
  longDescription: string;
  categoryType: CategoryEvent;
  basePrice: number;
  eventName: string;
  startDate: string;
  endDate: string;
  quantityAvailable: number;
  quantitySold: number;
  revenueGenerated: number;
  createdAt: string;
  updatedAt: string;
  prices: prices[];
};

export interface EventValues {
  quantityAvailable: number;
  quantitySold: number;
  revenueGenerated: number;
  prices: prices[];
}

export interface EventStoreType {
  allEventsValues: EventValues[];
  event: EventType | null;
  total?: number; // Optional or required based on your design
  events: EventType[];
  loading: boolean;
  error: string | null;
  fetchValues: () => Promise<void>;
  fetchEvents: (params: PaginationParams) => Promise<void>;
  getEvent: (eventId: number) => Promise<any>;
  getTicketPrice: (eventId: number, ticketType: string) => Promise<any>;
  addEvent: (eventData: CreateEventDto) => Promise<void>;
  updateEvent: (eventId: number, eventData: UpdateEventDto) => Promise<void>;
  deleteEvent: (eventId: number) => Promise<void>;
}
