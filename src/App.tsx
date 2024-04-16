import { Switch, Route } from 'wouter';
import { HomePage } from './pages/Home';
import { OffersPage } from './pages/Offers';

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

