import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;

    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` }>
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <h3>{price}</h3>
        </Link>
      </div>);
  }
}

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardProduct;
