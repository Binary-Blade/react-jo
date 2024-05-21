import { Switch, Route } from 'wouter';
import { AuthProvider } from './context/AuthContext';
import { useEffect, lazy, Suspense } from 'react';
import { useAuthStore } from './stores/useAuthStore';
import useCartStore from './stores/useCartStore';

// Eager loading pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventSelectedPage from './pages/EventSelectedPage';
import AdminRoute from './hoc/AdminRoute';
import ProtectedRoute from './hoc/ProtectedRoute';
import CheckoutPage from './pages/CheckoutPage';
import AuthPage from './pages/AuthPage';

// Lazy loading pages
const ReservationPage = lazy(() => import('./pages/ReservationPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

export default function App() {
  const { userId } = useAuthStore();
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
          <Route path="/events/:eventId" component={EventSelectedPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <ProtectedRoute path="/reservations" component={ReservationPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <AdminRoute path="/dashboard" component={DashboardPage} />
        </Switch>
      </Suspense>
    </AuthProvider>
  );
}
