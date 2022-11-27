import { Component } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductsByCategory } from 'hoc';

// components
import { Error, Loader, ProductCard } from 'components';
import { CategoryTitle, ProductListStyled } from './ProductList.styled';
import { Navigate } from 'react-router-dom';
import ROUTES from 'constants/routes';
import { shopTitle } from 'constants/shopTitle';

class ProductList extends Component {
  componentDidUpdate() {
    const { data } = this.props.getProductsByCategoryStatus;

    if (data) {
      const { category } = data;
      const categoryName =
        category.name.charAt(0).toUpperCase() + category.name.slice(1);
      document.title = `${shopTitle} | ${categoryName}`;
    }
  }

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
      // Instead of "/*" route.
      // If we type any route and do not receive a category match,
      // then we get redirected to our primary category page.
      if (!data.category) {
        return <Navigate to={ROUTES.home} />;
      }

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
  getProductsByCategoryStatus: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      products: PropTypes.array.isRequired,
    }),
  }),
};

export default withGetProductsByCategory(ProductList);
