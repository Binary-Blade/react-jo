import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, using `clsx` for conditional class names
 * and `twMerge` for Tailwind CSS class name merging.
 *
 * @param {...ClassValue[]} inputs - The class names to be combined.
 * @returns {string} The combined class name string.
 *
 * @example
 * const className = cn('bg-blue-500', isActive && 'text-white');
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Creates a debounced function that delays the invocation of the provided function until after the specified wait time has elapsed since the last time the debounced function was invoked.
 *
 * @param {F} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} [immediate=false] - If `true`, trigger the function on the leading edge instead of the trailing.
 * @returns {(...args: Parameters<F>) => Promise<void>} The debounced function.
 *
 * @template F - The type of the function to debounce.
 *
 * @example
 * const debouncedSave = debounce(saveData, 300);
 * debouncedSave();
 */
export function debounce<F extends (...args: any[]) => Promise<void>>(
  func: F,
  wait: number,
  immediate = false
): (...args: Parameters<F>) => Promise<void> {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: Parameters<F>): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(this, args).then(resolve).catch(reject);
        }
      };

      const callNow = immediate && !timeout;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(this, args).then(resolve).catch(reject);
      }
    });
  };
}

type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Filters the properties of an object, returning a new object with only the allowed properties.
 *
 * @param {T} obj - The original object to filter.
 * @param {K[]} allowedProps - The array of property names to include in the new object.
 * @returns {PickProperties<T, K>} The filtered object containing only the allowed properties.
 *
 * @template T - The type of the original object.
 * @template K - The type of the allowed property names.
 *
 * @example
 * const user = { id: 1, name: 'John', age: 30 };
 * const filteredUser = filterProperties(user, ['id', 'name']); // { id: 1, name: 'John' }
 */
export const filterProperties = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  allowedProps: K[]
): PickProperties<T, K> => {
  return Object.keys(obj)
    .filter(key => allowedProps.includes(key as K))
    .reduce(
      (acc, key) => {
        acc[key as K] = obj[key as K];
        return acc;
      },
      {} as PickProperties<T, K>
    );
};
