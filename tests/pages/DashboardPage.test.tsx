import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import DashboardPage from '@/pages/DashboardPage'; // Ajustez l'importation en fonction de votre structure de fichiers

// Mock the necessary modules
vi.mock('@/features/dashboard/EventDashboard/EventsDashboard', () => ({
  EventsDashboard: () => <div>EventsDashboard Component</div>
}));

vi.mock('@/features/dashboard/UsersDashboard/UsersDashboard', () => ({
  UsersDashboard: () => <div>UsersDashboard Component</div>
}));

vi.mock('@/components/navbar/SideBarDesktop', () => ({
  SideBarDesktop: ({ setActiveComponent }: { setActiveComponent: (component: string) => void }) => (
    <div>
      <button onClick={() => setActiveComponent('events')}>Show Events</button>
      <button onClick={() => setActiveComponent('users')}>Show Users</button>
    </div>
  )
}));

vi.mock('@/components/navbar/SideBarMenu', () => ({
  SideBarMenu: () => <div>SideBarMenu Component</div>
}));

describe('DashboardPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('renders EventsDashboard by default', () => {
    render(<DashboardPage />);
    expect(screen.getByText('EventsDashboard Component')).toBeInTheDocument();
  });

  it('renders UsersDashboard when activeComponent is users', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Show Users'));
    expect(screen.getByText('UsersDashboard Component')).toBeInTheDocument();
  });

  it('saves activeComponent to localStorage', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByText('Show Users'));
    expect(localStorage.getItem('activeDashboardComponent')).toBe('users');
  });

  it('loads activeComponent from localStorage', () => {
    localStorage.setItem('activeDashboardComponent', 'users');
    render(<DashboardPage />);
    expect(screen.getByText('UsersDashboard Component')).toBeInTheDocument();
  });
});
