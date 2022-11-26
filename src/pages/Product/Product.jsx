import { Component } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetProductById } from 'hoc';

// components
import { Error, Loader, ProductDescription, ProductImages } from 'components';
import { GridContainer } from './Product.styled';

import { shopTitle } from 'constants/shopTitle';

class Product extends Component {
  componentDidUpdate() {
    const { data } = this.props.getProductByIdStatus;

    if (data) {
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
      const { gallery, name, prices, brand, description, inStock, attributes } =
        product;

      const {
        amount,
        currency: { symbol },
      } = prices[0];

      return (
        <GridContainer>
          <ProductImages name={name} gallery={gallery} />
          <ProductDescription
            brand={brand}
            description={description}
            inStock={inStock}
            attributes={attributes}
            amount={amount}
            symbol={symbol}
            name={name}
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

export default withGetProductById(Product);
