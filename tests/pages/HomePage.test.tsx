import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import HomePage from '@/pages/HomePage'; // Ajustez l'importation en fonction de votre structure de fichiers

// Mock the necessary components
vi.mock('@/features/header/Header', () => ({
  Header: () => <div>Header Component</div>
}));

vi.mock('@/features/home/Hero', () => ({
  Hero: () => <div>Hero Component</div>
}));

vi.mock('@/features/home/Highlights', () => ({
  Highlights: () => <div>Highlights Component</div>
}));

vi.mock('@/features/home/ExploreVenue', () => ({
  ExploreVenue: () => <div>ExploreVenue Component</div>
}));

vi.mock('@/features/home/PresentSports', () => ({
  NewsPresents: () => <div>NewsPresents Component</div>
}));

vi.mock('@/features/home/SectionTickets', () => ({
  SectionTickets: () => <div>SectionTickets Component</div>
}));

vi.mock('@/features/Footer', () => ({
  Footer: () => <div>Footer Component</div>
}));

describe('HomePage', () => {
  it('renders correctly with all components', () => {
    render(<HomePage />);

    expect(screen.getByText('Header Component')).toBeInTheDocument();
    expect(screen.getByText('Hero Component')).toBeInTheDocument();
    expect(screen.getByText('Highlights Component')).toBeInTheDocument();
    expect(screen.getByText('ExploreVenue Component')).toBeInTheDocument();
    expect(screen.getByText('NewsPresents Component')).toBeInTheDocument();
    expect(screen.getByText('SectionTickets Component')).toBeInTheDocument();
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });
});
