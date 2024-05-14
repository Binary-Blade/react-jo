import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

export const sortingOptions = [
  { value: 'title', label: 'Alphabetical' },
  { value: 'quantityAvailable', label: 'Number available' },
  { value: 'startDate', label: 'Start Date' }
];

export const categoryOptions = Object.values(CategoryEvent).map(category => ({
  value: category,
  label: category
}));
