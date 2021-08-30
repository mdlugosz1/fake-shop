import Main from './components/Main';
import Shop from './components/Shop';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((value) => console.log(value));
  };
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
