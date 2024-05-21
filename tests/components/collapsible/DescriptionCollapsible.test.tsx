import { DescriptionCollapsible } from '@/components/collapsible/DescriptionCollapsible';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('DescriptionCollapsible', () => {
  const shortDescription = 'This is a short description';
  const longDescription = 'This is a long description that is hidden initially';

  it('renders the short description', () => {
    render(
      <DescriptionCollapsible
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
    );

    expect(screen.getByText(shortDescription)).toBeInTheDocument();
  });

  it('renders the "Voir plus" trigger', () => {
    render(
      <DescriptionCollapsible
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
    );

    expect(screen.getByText('Voir plus')).toBeInTheDocument();
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });

  it('toggles the long description on click', () => {
    render(
      <DescriptionCollapsible
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
    );

    const trigger = screen.getByText('Voir plus');
    fireEvent.click(trigger);

    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });
});
