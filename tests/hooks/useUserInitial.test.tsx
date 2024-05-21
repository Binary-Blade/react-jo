import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { User } from '@/config/types/UserTypes';
import { useUserInitials } from '@/hooks/useUserInitial';

// Mock data
const mockUser: Partial<User> = {
  firstName: 'John',
  lastName: 'Doe'
};

const mockUserNoFirstName: Partial<User> = {
  lastName: 'Doe'
};

const mockUserNoLastName: Partial<User> = {
  firstName: 'John'
};

// Test component to use the hook
const TestComponent = ({ user }: { user: Partial<User> }) => {
  const initials = useUserInitials(user);
  return <div data-testid="initials">{initials}</div>;
};

describe('useUserInitials', () => {
  it('should return initials for a full name', () => {
    render(<TestComponent user={mockUser} />);

    expect(screen.getByTestId('initials').textContent).toBe('JD');
  });

  it('should return initial for first name only', () => {
    render(<TestComponent user={mockUserNoLastName} />);

    expect(screen.getByTestId('initials').textContent).toBe('J');
  });

  it('should return initial for last name only', () => {
    render(<TestComponent user={mockUserNoFirstName} />);

    expect(screen.getByTestId('initials').textContent).toBe('D');
  });

  it('should return empty string if no name is provided', () => {
    render(<TestComponent user={{}} />);

    expect(screen.getByTestId('initials').textContent).toBe('');
  });
});
