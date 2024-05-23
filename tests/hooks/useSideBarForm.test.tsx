import { useSidebarForm } from '@/hooks/useSideBarForm';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock updateFunction
const mockUpdateFunction = vi.fn();

// Test component to use the hook
const TestComponent = ({ item }: { item: { id: number; name: string } }) => {
  const { isSidebarOpen, selectedItem, handleEdit, handleCloseSidebar, handleSave } =
    useSidebarForm<{ id: number; name: string }, { name: string }, number>(
      mockUpdateFunction,
      item => item.id
    );

  return (
    <div>
      <button onClick={() => handleEdit(item)}>Edit</button>
      {isSidebarOpen && (
        <div data-testid="sidebar">
          <div data-testid="item-name">{selectedItem?.name}</div>
          <button onClick={handleCloseSidebar}>Close</button>
          <button onClick={() => handleSave({ name: 'Updated Name' })}>Save</button>
        </div>
      )}
    </div>
  );
};

describe('useSidebarForm', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should open the sidebar and display the selected item on edit', () => {
    render(<TestComponent item={{ id: 1, name: 'Item 1' }} />);

    fireEvent.click(screen.getByText('Edit'));

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('item-name').textContent).toBe('Item 1');
  });

  it('should close the sidebar on close', () => {
    render(<TestComponent item={{ id: 1, name: 'Item 1' }} />);

    fireEvent.click(screen.getByText('Edit'));
    fireEvent.click(screen.getByText('Close'));

    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });

  it('should call updateFunction with correct parameters on save', async () => {
    render(<TestComponent item={{ id: 1, name: 'Item 1' }} />);

    fireEvent.click(screen.getByText('Edit'));
    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => {
      expect(mockUpdateFunction).toHaveBeenCalledWith(1, { name: 'Updated Name' });
    });
  });
});
