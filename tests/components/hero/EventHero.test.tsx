import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import heroEventImage from '@/assets/images/GamesTicketOptions.svg';
import { EventHero } from '@/components/hero/EventHero';

describe('EventHero', () => {
  it('renders the image with correct attributes', () => {
    render(<EventHero />);

    const image = screen.getByAltText('Olympic Games');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', heroEventImage);
    expect(image).toHaveAttribute('width', '640');
    expect(image).toHaveAttribute('height', '360');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('renders the "Paris 2024" badge', () => {
    render(<EventHero />);

    const badge = screen.getByText('Paris 2024');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      'absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs'
    );
  });
});
