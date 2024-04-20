import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { TicketOffersPage } from './pages/ticket/TicketOffersPage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { ProtectedRoute } from './components/common/auth/ProtectedRoute';
import { useEffect } from 'react';
import { useAuthStore } from './stores/useAuthStore';

export default function App() {
  const initializeSession = useAuthStore(state => state.initializeSession);

  useEffect(() => {
    initializeSession();  //  Initialize the session when the app starts
  }, [initializeSession]);

  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/offers" component={TicketOffersPage} />
        <ProtectedRoute path="/cart" component={TicketOffersPage} />
      </Switch>
    </>
  )
}

