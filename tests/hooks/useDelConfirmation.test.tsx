import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useDelConfirmation } from '@/hooks/useDelConfirmation';
import { act } from 'react';

// Define a test component to use the hook
const TestComponent = ({ deleteFunction }: { deleteFunction: (id: number) => Promise<void> }) => {
  const { isDialogOpen, error, requestDelete, confirmDeletion, cancelDeletion, itemToDelete } =
    useDelConfirmation(deleteFunction, 'id');

  return (
    <div>
      <button onClick={() => requestDelete({ id: 1, name: 'Test Item' })}>Request Delete</button>
      {isDialogOpen && (
        <div data-testid="dialog">
          <button data-testid="confirm-button" onClick={confirmDeletion}>
            Confirm
          </button>
          <button data-testid="cancel-button" onClick={cancelDeletion}>
            Cancel
          </button>
        </div>
      )}
      {error && <div data-testid="error-message">{error}</div>}
      {itemToDelete && <div data-testid="item-to-delete">{itemToDelete.name}</div>}
    </div>
  );
};

describe('useDelConfirmation', () => {
  const mockDeleteFunction = vi.fn().mockResolvedValue(undefined);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should open the dialog and set item to delete on requestDelete', () => {
    render(<TestComponent deleteFunction={mockDeleteFunction} />);

    act(() => {
      fireEvent.click(screen.getByText('Request Delete'));
    });

    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('item-to-delete').textContent).toBe('Test Item');
  });

  it('should call deleteFunction and close the dialog on confirmDeletion', async () => {
    render(<TestComponent deleteFunction={mockDeleteFunction} />);

    act(() => {
      fireEvent.click(screen.getByText('Request Delete'));
    });

    act(() => {
      fireEvent.click(screen.getByTestId('confirm-button'));
    });

    await waitFor(() => {
      expect(mockDeleteFunction).toHaveBeenCalledWith(1);
    });

    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTestId('item-to-delete')).not.toBeInTheDocument();
  });

  it('should set an error message on deletion failure', async () => {
    const mockDeleteFunctionWithError = vi.fn().mockRejectedValue(new Error('Network error'));
    render(<TestComponent deleteFunction={mockDeleteFunctionWithError} />);

    act(() => {
      fireEvent.click(screen.getByText('Request Delete'));
    });

    act(() => {
      fireEvent.click(screen.getByTestId('confirm-button'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('error-message').textContent).toBe(
        'Failed to delete item. Please try again.'
      );
    });

    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('item-to-delete').textContent).toBe('Test Item');
  });

  it('should close the dialog and reset state on cancelDeletion', () => {
    render(<TestComponent deleteFunction={mockDeleteFunction} />);

    act(() => {
      fireEvent.click(screen.getByText('Request Delete'));
    });

    act(() => {
      fireEvent.click(screen.getByTestId('cancel-button'));
    });

    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTestId('item-to-delete')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });
});
