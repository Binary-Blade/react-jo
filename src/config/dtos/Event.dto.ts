export type CreateEventDto = {
  eventId?: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  basePrice: number;
  categoryType: string;
  quantityAvailable: number;
  startDate: string;
  endDate: string;
};

export type UpdateEventDto = {
  title?: string;
  shortDescription: string;
  longDescription: string;
  basePrice?: number;
  categoryType?: string;
  quantityAvailable?: number;
  startDate?: string;
  endDate?: string;
};
