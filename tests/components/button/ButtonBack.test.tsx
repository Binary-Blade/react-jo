import { ButtonBack } from '@/components/button/ButtonBack';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

describe('ButtonBack', () => {
  it('renders the button with LogOutIcon', () => {
    render(<ButtonBack />);

    const button = screen.getByRole('button', { name: /back/i });
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('calls window.history.back on click', () => {
    const historyBackMock = vi.fn();
    Object.defineProperty(window, 'history', {
      value: { back: historyBackMock },
      writable: true
    });

    render(<ButtonBack />);

    const button = screen.getByRole('button', { name: /back/i });
    fireEvent.click(button);

    expect(historyBackMock).toHaveBeenCalled();
  });
});
