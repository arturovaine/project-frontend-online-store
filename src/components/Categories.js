import React from 'react'
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() { 
    const { categories } = this.props;
    return (
      <div>
        {categories.map((categoria) => (
          <label htmlFor={categoria.id} key={categoria.id}>
            {categoria.name}
            <input type="radio" name="categorie" id={categoria.id} data-testid="category" />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Categories;
