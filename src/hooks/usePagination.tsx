import { useState, useCallback, useMemo } from 'react';

interface UsePaginationParams {
  initialPage?: number;
  initialLimit?: number;
  totalCount?: number;
}

interface UsePaginationResult {
  currentPage: number;
  setPage: (page: number) => void;
  limit: number;
  setPageSize: (size: number) => void;
  totalPages: number;
  offset: number;
}

/**
 * Custom hook `usePagination` is responsible for managing pagination state.
 * It provides state variables and setters for the current page, page limit,
 * total pages, and offset calculations.
 *
 * @param {UsePaginationParams} params - The initial pagination parameters.
 * @param {number} [params.initialPage=1] - The initial page number.
 * @param {number} [params.initialLimit=10] - The initial limit of items per page.
 * @param {number} [params.totalCount=0] - The total count of items.
 * @returns {UsePaginationResult} An object containing pagination state and methods.
 *
 * @example
 * const { currentPage, setPage, limit, setPageSize, totalPages, offset } = usePagination({ initialPage: 1, initialLimit: 10, totalCount: 100 });
 *
 * @remarks
 * The hook uses `useState` to manage pagination state, `useMemo` to optimize calculations,
 * and `useCallback` to memoize setter functions.
 */
export const usePagination = ({
  initialPage = 1,
  initialLimit = 10,
  totalCount = 0
}: UsePaginationParams): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  // Calculate the total number of pages based on total count and limit
  const totalPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);

  // Calculate the offset based on current page and limit
  const offset = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  /**
   * Sets the current page, ensuring it is within valid bounds.
   *
   * @param {number} page - The page number to set.
   */
  const setPage = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  /**
   * Sets the number of items per page.
   *
   * @param {number} size - The number of items per page.
   */
  const setPageSize = useCallback((size: number) => {
    setLimit(size);
  }, []);

  return {
    currentPage,
    setPage,
    limit,
    setPageSize,
    totalPages,
    offset
  };
};
