import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useEventForm } from '@/hooks/useEventForm';
import { useEventStore } from '@/stores/useEventStore';
import { CategoryEvent } from '@/config/enums/CategoryEvent.enum';

// Mock useEventStore
vi.mock('@/stores/useEventStore');

const mockInitialData = {
  title: '',
  shortDescription: '',
  longDescription: '',
  basePrice: '',
  quantityAvailable: '',
  categoryType: ''
};

describe('useEventForm', () => {
  const mockAddEvent = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Ensure mock is properly typed
    const mockedUseEventStore = vi.mocked(useEventStore);
    mockedUseEventStore.mockReturnValue({
      addEvent: mockAddEvent
    });
  });

  // Test component to use the hook
  const TestComponent = () => {
    const { formData, handleChange, handleCategoryChange, handleSubmit, errors } = useEventForm(
      mockInitialData,
      vi.fn
    );

    return (
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          data-testid="title-input"
        />
        <input
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          data-testid="shortDescription-input"
        />
        <input
          name="basePrice"
          value={formData.basePrice}
          onChange={handleChange}
          data-testid="basePrice-input"
        />
        <input
          name="quantityAvailable"
          value={formData.quantityAvailable}
          onChange={handleChange}
          data-testid="quantityAvailable-input"
        />
        <select
          name="categoryType"
          value={formData.categoryType}
          onChange={e => handleCategoryChange(e.target.value as CategoryEvent)}
          data-testid="categoryType-select"
        >
          <option value="">Select Category</option>
          <option value={CategoryEvent.BOXING}>Boxing</option>
          <option value={CategoryEvent.TENNIS}>Tennis</option>
        </select>
        <button type="submit">Submit</button>
        {errors.title && <div data-testid="error-title">{errors.title}</div>}
        {errors.shortDescription && (
          <div data-testid="error-shortDescription">{errors.shortDescription}</div>
        )}
      </form>
    );
  };

  it('should update form data on input change', () => {
    render(<TestComponent />);

    fireEvent.change(screen.getByTestId('title-input'), { target: { value: 'New Event' } });
    expect(screen.getByTestId('title-input')).toHaveValue('New Event');

    fireEvent.change(screen.getByTestId('shortDescription-input'), {
      target: { value: 'Short description' }
    });
    expect(screen.getByTestId('shortDescription-input')).toHaveValue('Short description');

    fireEvent.change(screen.getByTestId('basePrice-input'), { target: { value: '100' } });
    expect(screen.getByTestId('basePrice-input')).toHaveValue('100');

    fireEvent.change(screen.getByTestId('quantityAvailable-input'), { target: { value: '50' } });
    expect(screen.getByTestId('quantityAvailable-input')).toHaveValue('50');
  });

  it('should update form data on category change', () => {
    render(<TestComponent />);

    fireEvent.change(screen.getByTestId('categoryType-select'), {
      target: { value: CategoryEvent.BOXING }
    });
    expect(screen.getByTestId('categoryType-select')).toHaveValue(CategoryEvent.BOXING);
  });

  it('should set errors on validation failure', async () => {
    render(<TestComponent />);

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

    await vi.waitFor(() => {
      expect(screen.getByTestId('error-title')).toBeInTheDocument();
      expect(screen.getByTestId('error-shortDescription')).toBeInTheDocument();
    });
  });
});
