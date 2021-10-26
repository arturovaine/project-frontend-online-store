import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardProduct from './CardProduct';

class ProductResults extends Component {
  render() {
    const { products, category, query, addToCart } = this.props;
    // console.log(products);
    return (
      <div>
        { products.map((product) => (
          <CardProduct
            key={ product.id }
            product={ product }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            category={ category }
            query={ query }
            addToCart={ addToCart }
          />
        )) }
      </div>);
  }
}

ProductResults.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductResults;
