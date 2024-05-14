import { useState, useCallback, useMemo } from 'react';

export const usePagination = ({ initialPage = 1, initialLimit = 10, totalCount = 0 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  const totalPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);
  const offset = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  const setPage = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

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
