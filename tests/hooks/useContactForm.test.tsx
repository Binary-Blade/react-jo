// useContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useContactForm } from '@/hooks/useContactForm';

// Mock useToast
vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn()
  })
}));

// Test component to use the hook
const TestComponent = () => {
  const { register, handleSubmit, onSubmit, errors } = useContactForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" data-testid="name-input" />
      {errors.name && <span data-testid="error-name">{errors.name.message}</span>}
      <input {...register('email')} placeholder="Email" data-testid="email-input" />
      {errors.email && <span data-testid="error-email">{errors.email.message}</span>}
      <textarea {...register('message')} placeholder="Message" data-testid="message-input" />
      {errors.message && <span data-testid="error-message">{errors.message.message}</span>}
      <button type="submit" data-testid="submit-button">
        Send
      </button>
    </form>
  );
};

describe('useContactForm', () => {
  it('should show validation errors if form is submitted empty', async () => {
    render(<TestComponent />);

    fireEvent.submit(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('error-name')).toBeInTheDocument();
      expect(screen.getByTestId('error-email')).toBeInTheDocument();
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
    });
  });
});
