import { HeaderCardInfoDashboard } from '@/components/header/HeaderCardInfoDashboard';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} data-testid="mock-icon">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe('HeaderCardInfoDashboard', () => {
  const cardData = [
    {
      title: 'Card Title 1',
      value: 'Value 1',
      Icon: MockIcon
    },
    {
      title: 'Card Title 2',
      value: 'Value 2',
      Icon: MockIcon
    },
    {
      title: 'Card Title 3',
      value: 'Value 3',
      Icon: MockIcon
    }
  ];

  it('renders the correct number of cards', () => {
    render(<HeaderCardInfoDashboard cardData={cardData} />);

    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(cardData.length);
  });

  it('renders card titles and values correctly', () => {
    render(<HeaderCardInfoDashboard cardData={cardData} />);

    cardData.forEach(card => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.value)).toBeInTheDocument();
    });
  });
});
