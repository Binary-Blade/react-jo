import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFilter } from '@/hooks/useFilter';

// Test component to use the hook
const TestComponent = ({
  initialSortBy,
  initialSortOrder,
  initialFilterBy,
  initialFilterValue
}: {
  initialSortBy: string;
  initialSortOrder: string;
  initialFilterBy?: string;
  initialFilterValue?: string;
}) => {
  const {
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    filterBy,
    setFilterBy,
    filterValue,
    setFilterValue
  } = useFilter(initialSortBy, initialSortOrder, initialFilterBy, initialFilterValue);

  return (
    <div>
      <input
        name="sortBy"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        data-testid="sortBy-input"
      />
      <input
        name="sortOrder"
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        data-testid="sortOrder-input"
      />
      <input
        name="filterBy"
        value={filterBy || ''}
        onChange={e => setFilterBy(e.target.value)}
        data-testid="filterBy-input"
      />
      <input
        name="filterValue"
        value={filterValue || ''}
        onChange={e => setFilterValue(e.target.value)}
        data-testid="filterValue-input"
      />
    </div>
  );
};

describe('useFilter', () => {
  it('should initialize with correct values', () => {
    render(
      <TestComponent
        initialSortBy="name"
        initialSortOrder="asc"
        initialFilterBy="category"
        initialFilterValue="electronics"
      />
    );

    expect(screen.getByTestId('sortBy-input')).toHaveValue('name');
    expect(screen.getByTestId('sortOrder-input')).toHaveValue('asc');
    expect(screen.getByTestId('filterBy-input')).toHaveValue('category');
    expect(screen.getByTestId('filterValue-input')).toHaveValue('electronics');
  });

  it('should update sortBy value correctly', () => {
    render(
      <TestComponent
        initialSortBy="name"
        initialSortOrder="asc"
        initialFilterBy="category"
        initialFilterValue="electronics"
      />
    );

    fireEvent.change(screen.getByTestId('sortBy-input'), { target: { value: 'price' } });
    expect(screen.getByTestId('sortBy-input')).toHaveValue('price');
  });

  it('should update sortOrder value correctly', () => {
    render(
      <TestComponent
        initialSortBy="name"
        initialSortOrder="asc"
        initialFilterBy="category"
        initialFilterValue="electronics"
      />
    );

    fireEvent.change(screen.getByTestId('sortOrder-input'), { target: { value: 'desc' } });
    expect(screen.getByTestId('sortOrder-input')).toHaveValue('desc');
  });

  it('should update filterBy value correctly', () => {
    render(
      <TestComponent
        initialSortBy="name"
        initialSortOrder="asc"
        initialFilterBy="category"
        initialFilterValue="electronics"
      />
    );

    fireEvent.change(screen.getByTestId('filterBy-input'), { target: { value: 'brand' } });
    expect(screen.getByTestId('filterBy-input')).toHaveValue('brand');
  });

  it('should update filterValue value correctly', () => {
    render(
      <TestComponent
        initialSortBy="name"
        initialSortOrder="asc"
        initialFilterBy="category"
        initialFilterValue="electronics"
      />
    );

    fireEvent.change(screen.getByTestId('filterValue-input'), { target: { value: 'Samsung' } });
    expect(screen.getByTestId('filterValue-input')).toHaveValue('Samsung');
  });
});
