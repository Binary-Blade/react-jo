import { ReturnButton } from '@/components/button/ReturnButton';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('ReturnButton', () => {
  const href = '/events';

  it('renders the link with correct href', () => {
    render(<ReturnButton href={href} />);

    const link = screen.getByRole('link', { name: /logout/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', href);
  });

  it('renders the LogOutIcon with correct class', () => {
    const customClass = 'custom-class';
    render(<ReturnButton href={href} className={customClass} />);

    const icon = screen.getByRole('svg', { hidden: true }); // assuming the icon renders as an img or svg element
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('rotate-180');
    expect(icon).toHaveClass(customClass);
  });
});
