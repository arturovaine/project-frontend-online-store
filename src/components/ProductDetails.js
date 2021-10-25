import React from 'react';

class ProductDetails extends React.Component {

  render() {
    const { match } = this.props;
    const { params: { id } } = match;
    return (
      <div>
        <h2>teste</h2>
      </div>
    );
  }
}

export default ProductDetails;
