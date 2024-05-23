import { useMemo } from 'react';

/**
 * Custom hook `usePaginationRange` is responsible for calculating the range of page numbers
 * to display in a pagination component. It provides a range of pages centered around the current page.
 *
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @returns {number[]} An array of page numbers to display.
 *
 * @example
 * const paginationRange = usePaginationRange(5, 10);
 *
 * @remarks
 * The hook uses `useMemo` to optimize the calculation, ensuring it only recalculates
 * when the `currentPage` or `totalPages` changes.
 */
export const usePaginationRange = (currentPage: number, totalPages: number): number[] => {
  return useMemo(() => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [currentPage, totalPages]);
};
