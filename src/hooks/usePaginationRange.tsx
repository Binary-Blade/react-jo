import { useMemo } from 'react';

export const usePaginationRange = (currentPage: number, totalPages: number) => {
  return useMemo(() => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }, [currentPage, totalPages]);
};
