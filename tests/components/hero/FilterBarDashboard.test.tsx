import { FilterBarDashboard } from '@/components/hero/FilterBarDashboard';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('FilterBarDashboard', () => {
  const title = 'Dashboard Title';

  it('renders the title correctly', () => {
    render(<FilterBarDashboard title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the back button with icon on small screens', () => {
    render(<FilterBarDashboard title={title} />);

    const button = screen.getByRole('button', { name: /back/i });
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
