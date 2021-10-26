import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class ProductResults extends Component {
  render() {
    const { products, category, query } = this.props;
    console.log(products);
    return (
      <div>
        { products.map((product) => (
          <CardProduct
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            category={ category }
            query={ query }
          />
        )) }
      </div>);
  }
}

ProductResults.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductResults;
