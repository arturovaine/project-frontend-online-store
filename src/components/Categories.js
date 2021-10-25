import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, filterCategory } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <label htmlFor={ category.id } key={ category.id }>
            {category.name}
            <input
              type="radio"
              name="category"
              id={ category.id }
              data-testid="category"
              onChange={ filterCategory }
            />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Categories;
