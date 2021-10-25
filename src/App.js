import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
//só pra abrir p PR

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
