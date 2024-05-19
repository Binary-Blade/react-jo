import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import EventsPage from '@/pages/EventsPage'; // Ajustez l'importation en fonction de votre structure de fichiers

// Mock the necessary components
vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/components/hero/EventHero', () => ({
  EventHero: () => <div>EventHero Component</div>
}));

vi.mock('@/features/events/all-events/EventsMainContent', () => ({
  EventsMainContent: () => <div>EventsMainContent Component</div>
}));

vi.mock('@/features/Footer', () => ({
  Footer: () => <div>Footer Component</div>
}));

describe('EventsPage', () => {
  it('renders correctly with all components', () => {
    render(<EventsPage />);

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('EventHero Component')).toBeInTheDocument();
    expect(screen.getByText('EventsMainContent Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });
});
