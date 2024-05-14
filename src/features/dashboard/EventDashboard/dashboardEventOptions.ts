import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

export const sortingDashboardOptions = [
  { value: 'title', label: 'Alphabetical' },
  { value: 'quantityAvailable', label: 'Quantity Available' },
  { value: 'quantitySold', label: 'Sold' },
  { value: 'revenueGenerated', label: 'Revenue' },
  { value: 'basePrice', label: 'Price' },
  { value: 'startDate', label: 'Start Date' }
];

export const categoryDashboardOptions = Object.values(CategoryEvent).map(category => ({
  value: category,
  label: category
}));
