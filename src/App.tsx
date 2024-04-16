import { Switch, Route } from 'wouter';
import { HomePage } from './pages/HomePage';
import { OffersPage } from './pages/OffersPage';

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/offers" component={OffersPage} />
      </Switch>
    </>
  )
}

