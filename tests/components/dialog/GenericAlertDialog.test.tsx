import {
  GenericAlertDialog,
  GenericAlertDialogProps
} from '@/components/dialog/AlertDialogGeneric';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('GenericAlertDialog', () => {
  const defaultProps: GenericAlertDialogProps = {
    isOpen: true,
    onClose: vi.fn(),
    onConfirm: vi.fn(),
    title: 'Test Title',
    description: 'Test Description',
    cancelText: 'Cancel',
    confirmText: 'Continue'
  };

  it('renders the dialog with title and description', () => {
    render(<GenericAlertDialog {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders the cancel and confirm buttons with correct text', () => {
    render(<GenericAlertDialog {...defaultProps} />);

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('calls onClose when the cancel button is clicked', () => {
    render(<GenericAlertDialog {...defaultProps} />);

    fireEvent.click(screen.getByText('Cancel'));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    render(<GenericAlertDialog {...defaultProps} />);

    fireEvent.click(screen.getByText('Continue'));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });
});
