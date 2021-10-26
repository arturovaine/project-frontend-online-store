import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const { cartProducts } = this.props;
    const cartItems = (
      <div>
        <p>
          {cartProducts.length}
          produtos no carrinho
        </p>
        {cartProducts.map((product) => (
          <CartItem key={ product.id } product={ product } />
        ))}
      </div>
    );

    return (
      <div data-testid="shopping-cart-empty-message">
        { (cartProducts.length === 0) && <p>Seu carrinho está vazio</p> }
        {cartProducts.length > 0 && cartItems}
      </div>
    );
  }
}

Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
