/**
 * `BaseCategoryEvent` represents the base set of categories for events.
 * Each category is a key-value pair where both the key and value are the same string.
 *
 * @constant {Object} BaseCategoryEvent
 * @property {string} ARCHERY - Represents the Archery category.
 * @property {string} ATHLETICS - Represents the Athletics category.
 * @property {string} BADMINTON - Represents the Badminton category.
 * @property {string} BASKETBALL - Represents the Basketball category.
 * @property {string} BOXING - Represents the Boxing category.
 * @property {string} CANOE_KAYAK - Represents the Canoe/Kayak category.
 * @property {string} CYCLING - Represents the Cycling category.
 * @property {string} DIVING - Represents the Diving category.
 * @property {string} FENCING - Represents the Fencing category.
 * @property {string} FOOTBALL - Represents the Football category.
 * @property {string} GYMNASTICS - Represents the Gymnastics category.
 * @property {string} HANDBALL - Represents the Handball category.
 * @property {string} ROWING - Represents the Rowing category.
 * @property {string} SAILING - Represents the Sailing category.
 * @property {string} SWIMMING - Represents the Swimming category.
 * @property {string} TABLE_TENNIS - Represents the Table Tennis category.
 * @property {string} TENNIS - Represents the Tennis category.
 * @property {string} VOLLEYBALL - Represents the Volleyball category.
 * @property {string} WEIGHTLIFTING - Represents the Weightlifting category.
 * @property {string} KARATE - Represents the Karate category.
 */
const BaseCategoryEvent = {
  ARCHERY: 'ARCHERY',
  ATHLETICS: 'ATHLETICS',
  BADMINTON: 'BADMINTON',
  BASKETBALL: 'BASKETBALL',
  BOXING: 'BOXING',
  CANOE_KAYAK: 'CANOE_KAYAK',
  CYCLING: 'CYCLING',
  DIVING: 'DIVING',
  FENCING: 'FENCING',
  FOOTBALL: 'FOOTBALL',
  GYMNASTICS: 'GYMNASTICS',
  HANDBALL: 'HANDBALL',
  ROWING: 'ROWING',
  SAILING: 'SAILING',
  SWIMMING: 'SWIMMING',
  TABLE_TENNIS: 'TABLE_TENNIS',
  TENNIS: 'TENNIS',
  VOLLEYBALL: 'VOLLEYBALL',
  WEIGHTLIFTING: 'WEIGHTLIFTING',
  KARATE: 'KARATE'
} as const;

export const CategoryEvent = {
  ALL: 'ALL',
  ...BaseCategoryEvent
} as const;

export const CategoryEventAdmin = {
  ...BaseCategoryEvent
} as const;

export type CategoryEvent = keyof typeof CategoryEvent;
export type CategoryEventAdmin = keyof typeof CategoryEventAdmin;
