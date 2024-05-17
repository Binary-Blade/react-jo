import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

export const FILTERS_EVENT = [
  {
    label: 'All Categories',
    options: [{ value: CategoryEvent.ALL, label: 'All' }]
  },
  {
    label: 'Team Sports',
    options: [
      { value: CategoryEvent.BASKETBALL, label: 'Basketball' },
      { value: CategoryEvent.FOOTBALL, label: 'Football' },
      { value: CategoryEvent.HANDBALL, label: 'Handball' },
      { value: CategoryEvent.VOLLEYBALL, label: 'Volleyball' }
    ]
  },
  {
    label: 'Individual Sports',
    options: [
      { value: CategoryEvent.ARCHERY, label: 'Archery' },
      { value: CategoryEvent.ATHLETICS, label: 'Athletics' },
      { value: CategoryEvent.BADMINTON, label: 'Badminton' },
      { value: CategoryEvent.BOXING, label: 'Boxing' },
      { value: CategoryEvent.CYCLING, label: 'Cycling' },
      { value: CategoryEvent.FENCING, label: 'Fencing' },
      { value: CategoryEvent.GYMNASTICS, label: 'Gymnastics' },
      { value: CategoryEvent.KARATE, label: 'Karate' },
      { value: CategoryEvent.TABLE_TENNIS, label: 'Table Tennis' },
      { value: CategoryEvent.TENNIS, label: 'Tennis' },
      { value: CategoryEvent.WEIGHTLIFTING, label: 'Weightlifting' }
    ]
  },
  {
    label: 'Water Sports',
    options: [
      { value: CategoryEvent.CANOE_KAYAK, label: 'Canoe/Kayak' },
      { value: CategoryEvent.DIVING, label: 'Diving' },
      { value: CategoryEvent.ROWING, label: 'Rowing' },
      { value: CategoryEvent.SAILING, label: 'Sailing' },
      { value: CategoryEvent.SWIMMING, label: 'Swimming' }
    ]
  }
];
