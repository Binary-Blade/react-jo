import { useState } from 'react';

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
