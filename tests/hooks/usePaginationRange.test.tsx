import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { usePaginationRange } from '@/hooks/usePaginationRange';

// Test component to use the hook
const TestComponent = ({
  currentPage,
  totalPages
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const paginationRange = usePaginationRange(currentPage, totalPages);

  return (
    <div>
      {paginationRange.map(page => (
        <span key={page} data-testid={`page-${page}`}>
          {page}
        </span>
      ))}
    </div>
  );
};

describe('usePaginationRange', () => {
  it('should return correct range of pages for the middle page', () => {
    render(<TestComponent currentPage={5} totalPages={10} />);

    expect(screen.getByTestId('page-3')).toBeInTheDocument();
    expect(screen.getByTestId('page-4')).toBeInTheDocument();
    expect(screen.getByTestId('page-5')).toBeInTheDocument();
    expect(screen.getByTestId('page-6')).toBeInTheDocument();
    expect(screen.getByTestId('page-7')).toBeInTheDocument();
  });

  it('should return correct range of pages for the first page', () => {
    render(<TestComponent currentPage={1} totalPages={10} />);

    expect(screen.getByTestId('page-1')).toBeInTheDocument();
    expect(screen.getByTestId('page-2')).toBeInTheDocument();
    expect(screen.getByTestId('page-3')).toBeInTheDocument();
  });

  it('should return correct range of pages for the last page', () => {
    render(<TestComponent currentPage={10} totalPages={10} />);

    expect(screen.getByTestId('page-8')).toBeInTheDocument();
    expect(screen.getByTestId('page-9')).toBeInTheDocument();
    expect(screen.getByTestId('page-10')).toBeInTheDocument();
  });

  it('should return correct range of pages for the first page when total pages are less than 5', () => {
    render(<TestComponent currentPage={1} totalPages={3} />);

    expect(screen.getByTestId('page-1')).toBeInTheDocument();
    expect(screen.getByTestId('page-2')).toBeInTheDocument();
    expect(screen.getByTestId('page-3')).toBeInTheDocument();
  });

  it('should return correct range of pages for the middle page when total pages are less than 5', () => {
    render(<TestComponent currentPage={2} totalPages={3} />);

    expect(screen.getByTestId('page-1')).toBeInTheDocument();
    expect(screen.getByTestId('page-2')).toBeInTheDocument();
    expect(screen.getByTestId('page-3')).toBeInTheDocument();
  });
});
