import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import EventSelectedPage from '@/pages/EventSelectedPage'; // Ajustez l'importation en fonction de votre structure de fichiers
import { useParams } from 'wouter';
import { useEventStore } from '@/stores/useEventStore';
import { useFormattedDates } from '@/hooks';
import useLocalCartStore from '@/stores/useLocalCartStore';

// Mock the necessary modules
vi.mock('wouter', () => ({
  useParams: vi.fn()
}));

vi.mock('@/stores/useEventStore', () => ({
  useEventStore: vi.fn()
}));

vi.mock('@/hooks', () => ({
  useFormattedDates: vi.fn()
}));

// Adjust the mock for useLocalCartStore
vi.mock('@/stores/useLocalCartStore', async () => {
  const original = await vi.importActual<typeof import('@/stores/useLocalCartStore')>(
    '@/stores/useLocalCartStore'
  );
  return {
    ...original,
    default: vi.fn().mockReturnValue({
      addItemToCartLocal: vi.fn()
    })
  };
});

vi.mock('@/features/Footer', () => ({
  Footer: () => <div>Footer Component</div>
}));

vi.mock('@/components/ui/separator', () => ({
  Separator: () => <div>Separator Component</div>
}));

vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/features/events/selected-event/OverviewOneEvent', () => ({
  OverviewOneEvent: () => <div>OverviewOneEvent Component</div>
}));

vi.mock('@/components/button/ButtonToEvent', () => ({
  ButtonToEvent: () => <div>ButtonToEvent Component</div>
}));

vi.mock('@/components/cards/ImagesCoverEvent', () => ({
  ImagesCoverEvent: () => <div>ImagesCoverEvent Component</div>
}));

vi.mock('@/components/hero/GenericTitle', () => ({
  GenericTitle: () => <div>GenericTitle Component</div>
}));

vi.mock('@/components/collapsible/DescriptionSelectedEvent', () => ({
  DescriptionSelectedEvent: () => <div>DescriptionSelectedEvent Component</div>
}));

vi.mock('@/components/dialog/ReportedIssueButtonEvent', () => ({
  ReportedIssueButtonEvent: () => <div>ReportedIssueButtonEvent Component</div>
}));

vi.mock('@/features/events/selected-event/ChooseEventPrices', () => ({
  ChooseEventPrices: () => <div>ChooseEventPrices Component</div>
}));

describe('EventSelectedPage', () => {
  const mockGetEvent = vi.fn();
  const mockUseEventStore = {
    getEvent: mockGetEvent,
    event: {
      title: 'Sample Event',
      startDate: '2024-07-26',
      endDate: '2024-08-11',
      basePrice: 100,
      quantitySold: 50,
      quantityAvailable: 150,
      shortDescription: 'Short description',
      longDescription: 'Long description'
    }
  };

  const mockUseLocalCartStore = {
    addItemToCartLocal: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as jest.Mock).mockReturnValue({ eventId: '1' });
    (useEventStore as unknown as jest.Mock).mockReturnValue(mockUseEventStore);
    (useFormattedDates as jest.Mock).mockReturnValue('July 26, 2024 - August 11, 2024');
    (useLocalCartStore as unknown as jest.Mock).mockReturnValue(mockUseLocalCartStore);
  });

  it('renders correctly with all components', () => {
    render(<EventSelectedPage />);

    expect(screen.getByText('Footer Component')).toBeInTheDocument();
    expect(screen.getByText('Separator Component')).toBeInTheDocument();
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('OverviewOneEvent Component')).toBeInTheDocument();
    expect(screen.getByText('ButtonToEvent Component')).toBeInTheDocument();
    expect(screen.getByText('ImagesCoverEvent Component')).toBeInTheDocument();
    expect(screen.getAllByText('GenericTitle Component')).toHaveLength(2); // Vérifiez qu'il y a 2 occurrences de GenericTitle
    expect(screen.getByText('DescriptionSelectedEvent Component')).toBeInTheDocument();
    expect(screen.getByText('ReportedIssueButtonEvent Component')).toBeInTheDocument();
    expect(screen.getByText('ChooseEventPrices Component')).toBeInTheDocument();
  });

  it('calls getEvent with the correct eventId', () => {
    render(<EventSelectedPage />);

    expect(mockGetEvent).toHaveBeenCalledWith(1);
  });
});
