import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const { cartProducts } = this.state;
    const isRepeating = cartProducts.some((item) => (item.id === product.id));
    if (!isRepeating) {
      this.setState((previousState) => ({
        cartProducts: [...previousState.cartProducts, product],
      }));
    }
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ this.addToCart } cartProducts={ cartProducts } />
          </Route>
          <Route path="/cart">
            <Cart cartProducts={ cartProducts } />
          </Route>
          <Route
            path="/product/:id"
            render={
              (props) => (
                <ProductDetails { ...props } addToCart={ this.addToCart } />)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
