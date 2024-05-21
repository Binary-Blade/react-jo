import { GenericTitle } from '@/components/hero/GenericTitle';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('GenericTitle', () => {
  const title = 'Sample Title';
  const subtitle = 'Sample Subtitle';

  it('renders the title and subtitle correctly', () => {
    render(<GenericTitle title={title} subtitle={subtitle} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('applies the correct default classes', () => {
    render(<GenericTitle title={title} subtitle={subtitle} />);

    const container = screen.getByText(title).parentElement;
    expect(container).toHaveClass('flex flex-col gap-1 py-4');
    expect(screen.getByText(title)).toHaveClass('text-2xl font-semibold');
    expect(screen.getByText(subtitle)).toHaveClass('text-gray-500 dark:text-gray-400');
  });

  it('applies custom classes when provided', () => {
    render(
      <GenericTitle
        title={title}
        subtitle={subtitle}
        titleClass="custom-title-class"
        subtitleClass="custom-subtitle-class"
        containerClass="custom-container-class"
      />
    );

    const container = screen.getByText(title).parentElement;
    expect(container).toHaveClass('custom-container-class');
    expect(screen.getByText(title)).toHaveClass('custom-title-class');
    expect(screen.getByText(subtitle)).toHaveClass('custom-subtitle-class');
  });

  it('applies the mobile class correctly', () => {
    render(<GenericTitle title={title} subtitle={subtitle} isMobile />);

    const container = screen.getByText(title).parentElement;
    expect(container).toHaveClass('sm:hidden');
  });

  it('applies the desktop class correctly', () => {
    render(<GenericTitle title={title} subtitle={subtitle} isDesktop />);

    const container = screen.getByText(title).parentElement;
    expect(container).toHaveClass('hidden md:flex');
  });

  it('defaults to flex class when no specific prop is set', () => {
    render(<GenericTitle title={title} subtitle={subtitle} />);

    const container = screen.getByText(title).parentElement;
    expect(container).toHaveClass('flex');
  });
});
