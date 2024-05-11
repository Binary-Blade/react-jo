import { Switch, Route } from 'wouter';
import { AuthProvider } from './context/AuthContext';
import { useEffect, lazy, Suspense } from 'react';
import { useAuthStore } from './stores/useAuthStore';
import useCartStore from './stores/useCartStore';

// Eager loading pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventSelected from './pages/EventSelected';

// Lazy loading pages
const AuthPage = lazy(() => import('./pages/AuthPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

export default function App() {
  const { userId } = useAuthStore(state => ({
    userId: state.userId
  }));

  const { cartId, fetchCartItems } = useCartStore(state => ({
    fetchCartItems: state.fetchCartItems,
    cartId: state.cartId
  }));

  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [fetchCartItems, userId, cartId]);

  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/events/:eventId" component={EventSelected} />
          <Route path="/events" component={EventsPage} />
          <Route path="/reservations" component={ReservationPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Suspense>
    </AuthProvider>
  );
}
