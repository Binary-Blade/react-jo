import { useState } from 'react';

/**
 * Custom hook `useFilter` is responsible for managing sorting and filtering state.
 * It provides state variables and setters for sorting and filtering criteria.
 *
 * @param {string} initialSortBy - The initial field to sort by.
 * @param {string} initialSortOrder - The initial sort order (e.g., 'asc' or 'desc').
 * @param {string} [initialFilterBy] - The initial field to filter by.
 * @param {string} [initialFilterValue] - The initial value to filter by.
 * @returns An object containing sorting and filtering state and their respective setters.
 *
 * @example
 * const {
 *   sortBy,
 *   setSortBy,
 *   sortOrder,
 *   setSortOrder,
 *   filterBy,
 *   setFilterBy,
 *   filterValue,
 *   setFilterValue
 * } = useFilter('name', 'asc');
 *
 * @remarks
 * The hook uses `useState` to manage sorting and filtering state.
 */
export const useFilter = (
  initialSortBy: string,
  initialSortOrder: string,
  initialFilterBy?: string,
  initialFilterValue?: string
) => {
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [sortOrder, setSortOrder] = useState(initialSortOrder);
  const [filterBy, setFilterBy] = useState(initialFilterBy);
  const [filterValue, setFilterValue] = useState(initialFilterValue);

  return {
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    filterBy,
    setFilterBy,
    filterValue,
    setFilterValue
  };
};
