import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductById } from 'hoc';

// redux
import { compose } from '@reduxjs/toolkit';

// components
import { Navigate } from 'react-router-dom';
import { Error, Loader, ProductDescription, ProductImages } from 'components';
import { GridContainer } from './Product.styled';

// constants
import { shopTitle } from 'constants/shopTitle';
import ROUTES from 'constants/routes';

class Product extends PureComponent {
  componentDidUpdate() {
    const { data } = this.props.getProductByIdStatus;

    if (data?.product) {
      const { product } = data;
      document.title = `${shopTitle} | ${product.name}`;
    }
  }

  render() {
    const { getProductByIdStatus } = this.props;
    const { isSuccess, isError, isLoading, data, error } = getProductByIdStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const { product } = data;

      // Instead of "/*" route.
      // If we type any route and do not receive a category match,
      // then we get redirected to our primary category page.
      if (!product) {
        return <Navigate to={ROUTES.home} />;
      }

      const { gallery, name } = product;

      return (
        <GridContainer>
          <ProductImages name={name} gallery={gallery} />
          <ProductDescription
            addProductToCart={this.addProductToCart}
            product={product}
          />
        </GridContainer>
      );
    }
  }
}

Product.propTypes = {
  getProductByIdStatus: PropTypes.shape({
    data: PropTypes.shape({
      product: PropTypes.shape({
        attributes: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['swatch', 'text']).isRequired,
            items: PropTypes.arrayOf(
              PropTypes.shape({
                displayValue: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
              })
            ),
          })
        ),
        brand: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        gallery: PropTypes.array.isRequired,
        inStock: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        prices: PropTypes.arrayOf(
          PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.shape({
              symbol: PropTypes.string.isRequired,
            }),
          })
        ),
      }),
    }),
  }),
};

export default compose(withGetProductById)(Product);
