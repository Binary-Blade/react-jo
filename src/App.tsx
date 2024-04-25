import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { AuthProvider } from './context/AuthContext';
import { useEffect } from 'react';
import { ReservationPage } from '@/pages/ReservationPage';
import { useAuthStore } from './stores/useAuthStore';
import useCartStore from './stores/useCartStore';
import { EventsPage } from './pages/EventsPage';
import { CartPage } from './pages/CartPage';
import { AuthPage } from './pages/AuthPage';

export default function App() {

  const { userId } = useAuthStore(state => ({
    userId: state.userId,
  }));

  const { cartId, fetchCartItems } = useCartStore(state => ({
    fetchCartItems: state.fetchCartItems,
    cartId: state.cartId,
  }));

  useEffect(() => {
    if (userId && cartId) {
      fetchCartItems(userId, cartId);
    }
  }, [fetchCartItems, userId, cartId]);

  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/reservations" component={ReservationPage} />
      </Switch>
    </AuthProvider>
  );
}
