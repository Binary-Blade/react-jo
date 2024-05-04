import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function debounce<F extends (...args: any[]) => Promise<void>>(
    func: F,
    wait: number,
    immediate = false
): (...args: Parameters<F>) => Promise<void> {
    let timeout: ReturnType<typeof setTimeout> | null;

    return function(this: any, ...args: Parameters<F>): Promise<void> {
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
