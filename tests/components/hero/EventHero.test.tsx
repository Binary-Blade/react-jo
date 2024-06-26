import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import placeholderImage from '@/assets/images/crop_bg.webp';
import { EventHero } from '@/components/hero/EventHero';

describe('EventHero', () => {
  it('renders the image with correct attributes', () => {
    render(<EventHero />);

    const image = screen.getByAltText('Olympic Games');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', placeholderImage);
    expect(image).toHaveAttribute('width', '640');
    expect(image).toHaveAttribute('height', '360');
    expect(image).toHaveStyle({ objectFit: 'cover' });
  });

  it('renders the "OlymTicket" badge', () => {
    render(<EventHero />);

    const badge = screen.getByText('OlymTicket');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      'absolute top-4 left-4 bg-gray-900 text-white bg-rose-500 px-3 py-1 rounded-full text-xs'
    );
  });
});
