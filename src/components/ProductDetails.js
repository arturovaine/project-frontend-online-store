import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {
        title: '',
      },
    };

    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match } = this.props;
    const { params: { id } } = match;
    const [productId, query, categoryId] = id.split('-');

    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    const { results: products } = response;

    const product = this.findProduct(productId, products);

    this.setState({ product });
  }

  findProduct(productId, products) {
    const productMatch = products.find((product) => product.id === productId);
    return productMatch;
  }

  render() {
    const { product } = this.state;
    const { addToCart } = this.props;
    // console.log(product);
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart(product) }
        >
          Adicionar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
