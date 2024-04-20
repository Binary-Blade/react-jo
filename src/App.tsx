import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { TicketOffersPage } from './pages/ticket/TicketOffersPage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/offers" component={TicketOffersPage} />
      </Switch>
    </AuthProvider>
  );
}
