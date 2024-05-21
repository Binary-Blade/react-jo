import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AuthPage from '@/pages/AuthPage'; // Ajustez l'importation en fonction de votre structure de fichiers

// Mock the necessary components
vi.mock('@/features/auth/LoginForm', () => ({
  LoginForm: () => <div>LoginForm Component</div>
}));

vi.mock('@/features/auth/SignUpForm', () => ({
  SignUpForm: () => <div>SignUpForm Component</div>
}));

vi.mock('@/components/ui/IconComponents', () => ({
  MedalIcon: ({ className }: { className: string }) => (
    <div className={className} data-testid="medal-icon">
      Medal Icon
    </div>
  )
}));

vi.mock('@/components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsContent: ({ value, children }: { value: string; children: React.ReactNode }) => (
    <div data-testid={`tab-content-${value}`}>{children}</div>
  ),
  TabsList: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  TabsTrigger: ({
    value,
    children,
    onClick
  }: {
    value: string;
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button data-testid={`tab-trigger-${value}`} onClick={onClick}>
      {children}
    </button>
  )
}));

describe('AuthPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with all components', () => {
    render(<AuthPage />);

    expect(screen.getByTestId('medal-icon')).toBeInTheDocument();
    expect(screen.getByText('Paris 2024')).toBeInTheDocument();
    expect(screen.getByText('LoginForm Component')).toBeInTheDocument();
  });

  it('switches to SignUpForm when the signup tab is clicked', () => {
    render(<AuthPage />);

    fireEvent.click(screen.getByTestId('tab-trigger-signup'));

    expect(screen.getByText('SignUpForm Component')).toBeInTheDocument();
    expect(screen.queryByText('LoginForm Component')).not.toBeInTheDocument();
  });

  it('switches back to LoginForm when the login tab is clicked', () => {
    render(<AuthPage />);

    // First switch to signup
    fireEvent.click(screen.getByTestId('tab-trigger-signup'));
    expect(screen.getByText('SignUpForm Component')).toBeInTheDocument();

    // Then switch back to login
    fireEvent.click(screen.getByTestId('tab-trigger-login'));
    expect(screen.getByText('LoginForm Component')).toBeInTheDocument();
    expect(screen.queryByText('SignUpForm Component')).not.toBeInTheDocument();
  });
});
