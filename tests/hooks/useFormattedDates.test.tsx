// useFormattedDates.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useFormattedDates } from '@/hooks/useFormattedDates';

// Test component to use the hook
const TestComponent = ({ startDate, endDate }: { startDate?: string; endDate?: string }) => {
  const formattedDates = useFormattedDates(startDate, endDate);
  return <div data-testid="formattedDates">{formattedDates}</div>;
};

describe('useFormattedDates', () => {
  it('should return formatted date range when startDate and endDate are in the same year', () => {
    render(<TestComponent startDate="2024-08-01" endDate="2024-08-15" />);

    expect(screen.getByTestId('formattedDates').textContent).toBe('1 août - 15 août 2024');
  });

  it('should return formatted date range when startDate and endDate are in different years', () => {
    render(<TestComponent startDate="2023-12-25" endDate="2024-01-05" />);

    expect(screen.getByTestId('formattedDates').textContent).toBe(
      '25 décembre 2023 - 5 janvier 2024'
    );
  });

  it('should return "Intervalle de dates invalide" when startDate is undefined', () => {
    render(<TestComponent startDate={undefined} endDate="2024-08-15" />);

    expect(screen.getByTestId('formattedDates').textContent).toBe('Intervalle de dates invalide');
  });

  it('should return "Intervalle de dates invalide" when endDate is undefined', () => {
    render(<TestComponent startDate="2024-08-01" endDate={undefined} />);

    expect(screen.getByTestId('formattedDates').textContent).toBe('Intervalle de dates invalide');
  });

  it('should return "Intervalle de dates invalide" when both startDate and endDate are undefined', () => {
    render(<TestComponent startDate={undefined} endDate={undefined} />);

    expect(screen.getByTestId('formattedDates').textContent).toBe('Intervalle de dates invalide');
  });

  it('should return "Erreur de formatage des dates" when dates are invalid', () => {
    render(<TestComponent startDate="invalid-date" endDate="invalid-date" />);

    expect(screen.getByTestId('formattedDates').textContent).toBe('Erreur de formatage des dates');
  });
});
