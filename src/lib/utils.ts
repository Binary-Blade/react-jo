import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
