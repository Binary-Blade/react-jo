export type CreateEventDto = {
  eventId?: number;
  title: string;
  description: string;
  basePrice: number;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
};

export type UpdateEventDto = {
  title?: string;
  description?: string;
  basePrice?: number;
  categoryType?: string;
  quantityAvailable?: number;
  startDate?: string;
  endDate?: string;
};
