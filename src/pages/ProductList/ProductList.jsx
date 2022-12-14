import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductsByCategory } from 'hoc';

// components
import { Navigate } from 'react-router-dom';
import { Error, Loader, ProductCard } from 'components';
import { CategoryTitle, ProductListStyled } from './ProductList.styled';

// other
import { capitalizeString } from 'js';
import ROUTES from 'constants/routes';
import { shopTitle } from 'constants/shopTitle';

class ProductList extends PureComponent {
  componentDidUpdate() {
    const { getProductsByCategoryStatus } = this.props;
    const { data } = getProductsByCategoryStatus;

    if (data?.category) {
      const { category } = data;

      const categoryName = capitalizeString(category.name);

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
      const { category } = data;
      // Instead of "/*" route.
      // If we type any route and do not receive a category match,
      // then we get redirected to our primary category page.
      if (!category) {
        return <Navigate to={ROUTES.home} />;
      }

      const { name, products } = category;

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
