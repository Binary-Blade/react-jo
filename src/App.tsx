import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { AuthProvider } from './context/AuthContext';
import { CartPage } from './pages/cart/CartPage';
import EventsPage from './pages/event/EventsPage';
import { useEffect } from 'react';
import useCartStore from './stores/useCartStore';
import { useAuthStore } from './stores/useAuthStore';
import { ReservationPage } from './pages/ReservationPage';

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
    } else {
      console.log("Missing userId or cartId, cannot fetch cart items.");
    }
  }, [fetchCartItems, userId, cartId]);
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/events" component={EventsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/reservations" component={ReservationPage} />
      </Switch>
    </AuthProvider>
  );
}
