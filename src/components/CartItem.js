import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity() {
    this.setState((previousState) => ({
      quantity: previousState.quantity + 1,
    }));
  }

  decreaseQuantity() {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((previousState) => ({
        quantity: previousState.quantity - 1,
      }));
    }
  }

  render() {
    const { product } = this.props;
    const { quantity } = this.state;
    return (
      <div key={ product.id }>
        <h2
          data-testid="shopping-cart-product-name"
        >
          {product.title}
        </h2>
        <div>
          <button
            type="button"
            onClick={ this.decreaseQuantity }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
          <button
            type="button"
            onClick={ this.increaseQuantity }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartItem;
