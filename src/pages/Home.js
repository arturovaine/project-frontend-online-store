import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Categories from '../components/Categories';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    }

    this.saveCategories = this.saveCategories.bind(this);
  }
  
  componentDidMount(){
    this.saveCategories();
  }

  async saveCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }
  render() {
    const { categories } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
        <Categories categories={ categories }/>
      </div>
    );
  }
}

export default Home;
