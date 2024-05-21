import { FC } from 'react';
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination
} from '@/components/ui/pagination';
import { usePaginationRange } from '@/hooks/usePaginationRange';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const paginationRange = usePaginationRange(currentPage, totalPages);
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <Pagination className="py-6">
      <PaginationContent>
        {/* Previous Button */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => handleClick(currentPage - 1)} />
          </PaginationItem>
        )}

        {/* Pagination Page Numbers */}
        {paginationRange.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={() => handleClick(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => handleClick(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
