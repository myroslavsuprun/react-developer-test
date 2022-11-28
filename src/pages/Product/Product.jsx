import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';

// redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency } from 'redux/selectors';
import { addCartProduct } from 'redux/cart/cartSlice';

// hoc
import { withGetProductById } from 'hoc';

// components
import { Error, Loader, ProductDescription, ProductImages } from 'components';
import { GridContainer } from './Product.styled';

import { shopTitle } from 'constants/shopTitle';

class Product extends PureComponent {
  componentDidUpdate() {
    const { data } = this.props.getProductByIdStatus;

    if (data) {
      const { product } = data;
      document.title = `${shopTitle} | ${product.name}`;
    }
  }

  addProductToCart = () => {
    const { addCartProduct, getProductByIdStatus } = this.props;

    const {
      data: { product },
    } = getProductByIdStatus;

    if (!product.inStock) {
      return;
    }

    addCartProduct(product);
  };

  memoizedActivePrice = memoize((prices, activeCurrency) =>
    prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
  );

  render() {
    const { getProductByIdStatus, activeCurrency } = this.props;
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
      } = this.memoizedActivePrice(prices, activeCurrency);

      return (
        <GridContainer>
          <ProductImages name={name} gallery={gallery} />
          <ProductDescription
            addProductToCart={this.addProductToCart}
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

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);

  return { activeCurrency };
};

const mapDispathcToProps = {
  addCartProduct,
};

const enhance = connect(mapStateToProps, mapDispathcToProps);

export default compose(enhance, withGetProductById)(Product);
