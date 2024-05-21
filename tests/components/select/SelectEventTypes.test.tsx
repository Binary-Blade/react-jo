import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PriceFormula } from '@/config/enums/PriceFormula.enum';
import { SelectEventTypes } from '@/components/select/SelectEventTypes';

vi.mock('@/hooks/usePaginationRange', () => ({
  usePaginationRange: (_: number, totalPages: number) => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}));

describe('SelectEventTypes', () => {
  const selectedType = PriceFormula.SOLO;
  const onChange = vi.fn();

  it('renders the select component with correct initial value', () => {
    render(<SelectEventTypes selectedType={selectedType} onChange={onChange} />);

    expect(screen.getByText(selectedType)).toBeInTheDocument();
  });
});
