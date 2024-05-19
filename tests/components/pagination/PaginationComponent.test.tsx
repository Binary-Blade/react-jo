import { PaginationComponent } from '@/components/pagination/PaginationComponent';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/hooks/usePaginationRange', () => ({
  usePaginationRange: (_: number, totalPages: number) => {
    // Simule une plage de pagination simple
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}));

describe('PaginationComponent', () => {
  const currentPage = 2;
  const totalPages = 5;
  const onPageChange = vi.fn();

  it('renders the pagination component', () => {
    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Vérifie que les éléments de pagination sont rendus
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls onPageChange when a page number is clicked', () => {
    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Simule un clic sur la page 3
    fireEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when the previous button is clicked', () => {
    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Simule un clic sur le bouton précédent
    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange when the next button is clicked', () => {
    render(
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Simule un clic sur le bouton suivant
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
