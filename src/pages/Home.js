import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import ProductResults from '../components/ProductResults';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchValue: '',
      category: '',
      query: '',
      products: [],
    };

    this.saveCategories = this.saveCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  componentDidMount() {
    this.saveCategories();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      searchValue: value,
    });
  }

  async handleClick() {
    const { searchValue } = this.state;
    const searchResult = await getProductsFromCategoryAndQuery('', searchValue);
    console.log(searchResult);
    const { results } = searchResult;
    this.setState({ products: results, query: searchValue });
  }

  async saveCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  async filterCategory({ target }) {
    const searchResult = await getProductsFromCategoryAndQuery(target.id, '');
    const { results } = searchResult;
    this.setState({ products: results, category: target.id });
  }

  render() {
    const { categories, searchValue, products, category, query } = this.state;
    const { addToCart, cartProducts } = this.props;

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          placeholder="Pesquisar"
          value={ searchValue }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          value="Pesquisar"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
            <span>{cartProducts.length}</span>
          </div>
          <Categories categories={ categories } filterCategory={ this.filterCategory } />
          <ProductResults
            products={ products }
            category={ category }
            query={ query }
            addToCart={ addToCart }
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
