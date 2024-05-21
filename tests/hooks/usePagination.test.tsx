import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { usePagination } from '@/hooks/usePagination';

// Test component to use the hook
const TestComponent = ({
  initialPage,
  initialLimit,
  totalCount
}: {
  initialPage?: number;
  initialLimit?: number;
  totalCount?: number;
}) => {
  const { currentPage, setPage, limit, setPageSize, totalPages, offset } = usePagination({
    initialPage,
    initialLimit,
    totalCount
  });

  return (
    <div>
      <div data-testid="currentPage">Current Page: {currentPage}</div>
      <div data-testid="limit">Limit: {limit}</div>
      <div data-testid="totalPages">Total Pages: {totalPages}</div>
      <div data-testid="offset">Offset: {offset}</div>
      <button onClick={() => setPage(currentPage + 1)}>Next Page</button>
      <button onClick={() => setPageSize(limit + 5)}>Increase Page Size</button>
    </div>
  );
};

describe('usePagination', () => {
  it('should initialize with correct values', () => {
    render(<TestComponent initialPage={2} initialLimit={15} totalCount={100} />);

    expect(screen.getByTestId('currentPage').textContent).toBe('Current Page: 2');
    expect(screen.getByTestId('limit').textContent).toBe('Limit: 15');
    expect(screen.getByTestId('totalPages').textContent).toBe('Total Pages: 7');
    expect(screen.getByTestId('offset').textContent).toBe('Offset: 15');
  });

  it('should update current page correctly', () => {
    render(<TestComponent initialPage={1} initialLimit={10} totalCount={50} />);

    fireEvent.click(screen.getByText('Next Page'));
    expect(screen.getByTestId('currentPage').textContent).toBe('Current Page: 2');
  });

  it('should not update current page if out of range', () => {
    render(<TestComponent initialPage={5} initialLimit={10} totalCount={50} />);

    fireEvent.click(screen.getByText('Next Page'));
    expect(screen.getByTestId('currentPage').textContent).toBe('Current Page: 5');
  });

  it('should update page size correctly', () => {
    render(<TestComponent initialPage={1} initialLimit={10} totalCount={50} />);

    fireEvent.click(screen.getByText('Increase Page Size'));
    expect(screen.getByTestId('limit').textContent).toBe('Limit: 15');
    expect(screen.getByTestId('totalPages').textContent).toBe('Total Pages: 4');
    expect(screen.getByTestId('offset').textContent).toBe('Offset: 0');
  });

  it('should update offset correctly when page size changes', () => {
    render(<TestComponent initialPage={2} initialLimit={10} totalCount={50} />);

    fireEvent.click(screen.getByText('Increase Page Size'));
    expect(screen.getByTestId('limit').textContent).toBe('Limit: 15');
    expect(screen.getByTestId('totalPages').textContent).toBe('Total Pages: 4');
    expect(screen.getByTestId('offset').textContent).toBe('Offset: 15');
  });
});
