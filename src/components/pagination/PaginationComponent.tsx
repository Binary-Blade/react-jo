import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination
} from '@/components/ui/pagination';
import { usePaginationRange } from '@/hooks/usePaginationRange';

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * `PaginationComponent` provides a pagination UI component.
 * It allows navigation through pages using previous, next, and individual page number buttons.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {number} props.currentPage - The current active page number.
 * @param {number} props.totalPages - The total number of pages available.
 * @param {Function} props.onPageChange - The function to handle page changes.
 * @returns {JSX.Element} The rendered PaginationComponent.
 *
 * @example
 * return <PaginationComponent currentPage={1} totalPages={5} onPageChange={handlePageChange} />;
 *
 * @remarks
 * The component uses Tailwind CSS for styling and relies on several custom components:
 * - `Pagination`, `PaginationPrevious`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationContent` for pagination layout.
 * - `usePaginationRange` hook for generating the range of pagination items.
 */
export const PaginationComponent = ({
  currentPage,
  totalPages,
  onPageChange
}: PaginationComponentProps): JSX.Element => {
  const paginationRange = usePaginationRange(currentPage, totalPages);

  /**
   * Handle click event to change the page.
   *
   * @param {number} page - The page number to navigate to.
   */
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
