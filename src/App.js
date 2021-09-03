import Main from './components/Main';
import Shop from './components/Shop';
import Navigation from './components/Navigation';
import ProductPage from './components/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={ProductPage} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
