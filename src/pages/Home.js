import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import ProductResults from '../components/ProductResults';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchValue: '',
      products: [],
    };

    this.saveCategories = this.saveCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.setState({ products: results });
  }

  async saveCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories, searchValue, products } = this.state;

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

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
        <Categories categories={ categories } />
        <ProductResults products={ products } />
      </div>
    );
  }
}

export default Home;
