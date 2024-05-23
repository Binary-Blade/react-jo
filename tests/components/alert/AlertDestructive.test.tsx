import { AlertDestructive } from '@/components/alert/AlertDestructive';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('AlertDestructive', () => {
  it('renders the error message', () => {
    const errorMessage = 'This is an error message';
    render(<AlertDestructive errorMessage={errorMessage} />);

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders without error message', () => {
    render(<AlertDestructive errorMessage={undefined} />);

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByText('undefined')).not.toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
