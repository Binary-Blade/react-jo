import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import LoadingPage from '@/pages/LoadingPage'; // Ajustez l'importation en fonction de votre structure de fichiers

// Mock the MedalIcon component
vi.mock('@/components/ui/IconComponents', () => ({
  MedalIcon: ({ className }: { className: string }) => (
    <div className={className} data-testid="medal-icon">
      Medal Icon
    </div>
  )
}));

describe('LoadingPage', () => {
  it('renders correctly with all components', () => {
    render(<LoadingPage />);

    const medalIcon = screen.getByTestId('medal-icon');
    expect(medalIcon).toBeInTheDocument();
    expect(medalIcon).toHaveClass('h-20 w-20 text-black');

    expect(screen.getByText('Paris 2024')).toBeInTheDocument();

    const loadingElements = screen.getAllByRole('loading');
    expect(loadingElements).toHaveLength(3);
    expect(loadingElements[0]).toHaveClass(
      'w-5 bg-blue-600 animate-pulse h-5 rounded-full animate-bounce'
    );
    expect(loadingElements[1]).toHaveClass(
      'w-5 bg-black-600 animate-pulse h-5 bg-white rounded-full animate-bounce'
    );
    expect(loadingElements[2]).toHaveClass(
      'w-5 h-5 animate-pulse bg-red-600 rounded-full animate-bounce'
    );
  });
});
