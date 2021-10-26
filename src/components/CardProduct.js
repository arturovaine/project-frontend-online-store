import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  render() {
    const {
      title, thumbnail, price, id, query, category, addToCart, product } = this.props;

    return (
      <div data-testid="product">
        <Link
          to={ `/product/${id}-${query}-${category}` }
          data-testid="product-detail-link"
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <h3>{price}</h3>
        </Link>
        <button type="button" onClick={ () => addToCart(product) }>Adicionar</button>
      </div>);
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CardProduct;
