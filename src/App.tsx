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
import SuccessAccountCreation from './pages/successful/SuccessAccountCreation';
import SuccessAccountConnexion from './pages/successful/SuccessAccountLogin';
import SuccessAccountDeleted from './pages/successful/SuccessAccountDeleted';
import NotFoundPage from './pages/NotFoundPage';
import ReservationPage from './pages/ReservationPage';

// Lazy loading pages
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));

/**
 * `App` is the main application component that sets up routes and provides global context.
 *
 * @component
 * @returns {JSX.Element} The rendered application.
 *
 * @example
 * return <App />;
 *
 * @remarks
 * This component uses `useAuthStore` to get the current user's ID and `useCartStore` to fetch cart items.
 * It includes both eagerly and lazily loaded pages, with protected routes for authenticated and admin users.
 */
export default function App(): JSX.Element {
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
          <Route path="/success-creation" component={SuccessAccountCreation} />
          <Route path="/success-connexion" component={SuccessAccountConnexion} />
          <Route path="/events/:eventId" component={EventSelectedPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/success-delete" component={SuccessAccountDeleted} />
          <Route path="/contact" component={ContactUsPage} />
          <ProtectedRoute path="/billets" component={ReservationPage} />
          <ProtectedRoute path="/profile" component={ProfilePage} />
          <AdminRoute path="/dashboard" component={DashboardPage} />
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </AuthProvider>
  );
}
