import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { AuthProvider } from './context/AuthContext';
import EventsPage from './pages/event/EventsPage';

export default function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/events" component={EventsPage} />
      </Switch>
    </AuthProvider>
  );
}
