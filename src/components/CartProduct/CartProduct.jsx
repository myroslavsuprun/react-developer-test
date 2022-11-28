import { PureComponent } from 'react';
import memoize from 'memoize-one';
import PropTypes from 'prop-types';

// redux
import { selectActiveCurrency } from 'redux/selectors';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

import {
  ProductItem,
  ProductLeftWrapper,
  ProductTitle,
  ProductPrice,
  ProductRightWrapper,
  ProductQuantityWrapper,
  ProductQuantityBtn,
  ProductImg,
} from './CartProduct.styled';

import sprite from 'img/sprite.svg';
import ProductOptions from 'components/ProductDescription/ProductOptions';

class CartProduct extends PureComponent {
  state = {
    quantity: 1,
  };

  handleQuantityIncrement = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }));
  };

  handleQuantityDecrement = () => {
    const { quantity } = this.state;

    if (quantity === 1) {
      return;
    }

    this.setState(prevState => ({
      quantity: prevState.quantity - 1,
    }));
  };

  memoizedActivePrice = memoize((prices, activeCurrency) =>
    prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
  );

  render() {
    const { quantity } = this.state;
    const { type, product, activeCurrency } = this.props;

    const { name, brand, prices, attributes, gallery } = product;

    // Setting memoized currency, so it wouldn't iterate on each render
    const {
      amount,
      currency: { symbol },
    } = this.memoizedActivePrice(prices, activeCurrency);

    return (
      <ProductItem type={type}>
        <ProductLeftWrapper>
          <ProductTitle>{name}</ProductTitle>
          <ProductTitle as="p">{brand}</ProductTitle>
          <ProductPrice>
            {symbol}
            {amount}
          </ProductPrice>
          <ProductOptions type={type} attributes={attributes} />
        </ProductLeftWrapper>
        <ProductRightWrapper gap={8}>
          <ProductQuantityWrapper gap={58}>
            <ProductQuantityBtn
              onClick={this.handleQuantityIncrement}
              type="button"
              aria-label="Increase quantity"
            >
              <svg width="28" height="28">
                <use href={`${sprite}#icon-plus-lg`}></use>
              </svg>
            </ProductQuantityBtn>
            <span>{quantity}</span>
            <ProductQuantityBtn
              onClick={this.handleQuantityDecrement}
              type="button"
              aria-label="Decrease quantity"
            >
              <svg width="28" height="28">
                <use href={`${sprite}#icon-minus-lg`}></use>
              </svg>
            </ProductQuantityBtn>
          </ProductQuantityWrapper>
          <ProductImg src={gallery[0]} alt={name} />
        </ProductRightWrapper>
      </ProductItem>
    );
  }
}

CartProduct.propTypes = {
  type: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
    attributes: PropTypes.array.isRequired,
    gallery: PropTypes.array.isRequired,
  }),
  activeCurrency: PropTypes.shape({
    label: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);

  return { activeCurrency };
};

const enhance = connect(mapStateToProps);

export default compose(enhance)(CartProduct);
