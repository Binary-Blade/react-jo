import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

/**
 * `FILTERS_EVENT` is a constant array defining the filter options for events.
 * It categorizes events into various sports categories for filtering purposes.
 *
 * @constant
 *
 * @example
 * const filters = FILTERS_EVENT;
 * filters.forEach(filter => {
 *   console.log(filter.label);
 *   filter.options.forEach(option => {
 *     console.log(option.label, option.value);
 *   });
 * });
 *
 * @remarks
 * This constant is used to configure the filter options in the event management dashboard,
 * allowing users to filter events based on different sports categories such as 'Team Sports',
 * 'Individual Sports', and 'Water Sports'.
 */
export const FILTERS_EVENT = [
  {
    label: 'All Categories',
    options: [{ value: CategoryEvent.ALL, label: 'All' }] // Option to display all categories
  },
  {
    label: 'Team Sports',
    options: [
      { value: CategoryEvent.BASKETBALL, label: 'Basketball' }, // Option to filter by Basketball events
      { value: CategoryEvent.FOOTBALL, label: 'Football' }, // Option to filter by Football events
      { value: CategoryEvent.HANDBALL, label: 'Handball' }, // Option to filter by Handball events
      { value: CategoryEvent.VOLLEYBALL, label: 'Volleyball' } // Option to filter by Volleyball events
    ]
  },
  {
    label: 'Individual Sports',
    options: [
      { value: CategoryEvent.ARCHERY, label: 'Archery' }, // Option to filter by Archery events
      { value: CategoryEvent.ATHLETICS, label: 'Athletics' }, // Option to filter by Athletics events
      { value: CategoryEvent.BADMINTON, label: 'Badminton' }, // Option to filter by Badminton events
      { value: CategoryEvent.BOXING, label: 'Boxing' }, // Option to filter by Boxing events
      { value: CategoryEvent.CYCLING, label: 'Cycling' }, // Option to filter by Cycling events
      { value: CategoryEvent.FENCING, label: 'Fencing' }, // Option to filter by Fencing events
      { value: CategoryEvent.GYMNASTICS, label: 'Gymnastics' }, // Option to filter by Gymnastics events
      { value: CategoryEvent.KARATE, label: 'Karate' }, // Option to filter by Karate events
      { value: CategoryEvent.TABLE_TENNIS, label: 'Table Tennis' }, // Option to filter by Table Tennis events
      { value: CategoryEvent.TENNIS, label: 'Tennis' }, // Option to filter by Tennis events
      { value: CategoryEvent.WEIGHTLIFTING, label: 'Weightlifting' } // Option to filter by Weightlifting events
    ]
  },
  {
    label: 'Water Sports',
    options: [
      { value: CategoryEvent.CANOE_KAYAK, label: 'Canoe/Kayak' }, // Option to filter by Canoe/Kayak events
      { value: CategoryEvent.DIVING, label: 'Diving' }, // Option to filter by Diving events
      { value: CategoryEvent.ROWING, label: 'Rowing' }, // Option to filter by Rowing events
      { value: CategoryEvent.SAILING, label: 'Sailing' }, // Option to filter by Sailing events
      { value: CategoryEvent.SWIMMING, label: 'Swimming' } // Option to filter by Swimming events
    ]
  }
];
