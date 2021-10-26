import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { cartProducts } = this.props;
    const cartItems = (
      <div>
        <p data-testid="shopping-cart-product-quantity">{cartProducts.length}</p>
        {cartProducts.map((product) => (
          <div key={ product.id }>
            <h2
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </h2>
            <h2 data-testid="shopping-cart-product-quantity">
              1
            </h2>
          </div>
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
