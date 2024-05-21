import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TableGenericData, Column } from '@/components/tables/TableGenericData';

vi.mock('@/hooks/usePaginationRange', () => ({
  usePaginationRange: (_: number, totalPages: number) => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}));

describe('TableGenericData', () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 }
  ];

  const columns: Column[] = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' }
  ];

  const onDelete = vi.fn();
  const onEdit = vi.fn();

  it('renders the table with correct headers and data', () => {
    render(<TableGenericData data={data} columns={columns} onDelete={onDelete} onEdit={onEdit} />);

    // Vérifie que les en-têtes de colonne sont rendus
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // Vérifie que les données sont rendues
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });
});
