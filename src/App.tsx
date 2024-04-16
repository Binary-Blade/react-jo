import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { TicketOffersPage } from './pages/TicketOffersPage';
import { AuthPage } from './pages/AuthPage';

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/offers" component={TicketOffersPage} />
      </Switch>
    </>
  )
}

