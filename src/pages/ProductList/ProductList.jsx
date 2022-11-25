import { Component } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductsByCategory } from 'hoc';

// components
import { Error, Loader, ProductCard } from 'components';
import { CategoryTitle, ProductListStyled } from './ProductList.styled';

class ProductList extends Component {
  render() {
    const { getProductsByCategoryStatus } = this.props;

    const { isLoading, isError, isSuccess, error, data } =
      getProductsByCategoryStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const {
        category: { name, products },
      } = data;

      return (
        <>
          <CategoryTitle>{name}</CategoryTitle>
          <ProductListStyled>
            {products.map(product => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ProductListStyled>
        </>
      );
    }
  }
}

ProductList.propTypes = {
  getProductsByCategoryStatus: PropTypes.object.isRequired,
};

export default withGetProductsByCategory(ProductList);
