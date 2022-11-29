import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withActiveCurrency } from 'hoc';

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
  OptionBtn,
  OptionBtnWrapper,
  ProductSubtitleOption,
} from './CartProduct.styled';
// import ProductOptions from 'components/ProductDescription/ProductOptions';

import sprite from 'img/sprite.svg';

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

  render() {
    const { quantity } = this.state;
    const { cartType, product, activeCurrency } = this.props;

    const { name, brand, gallery } = product;
    //  attributes,
    const {
      amount,
      currency: { symbol },
    } = activeCurrency;

    return (
      <ProductItem cartType={cartType}>
        <ProductLeftWrapper>
          <ProductTitle>{name}</ProductTitle>
          <ProductTitle as="p">{brand}</ProductTitle>
          <ProductPrice>
            {symbol}
            {amount}
          </ProductPrice>
          <ProductSubtitleOption>Size:</ProductSubtitleOption>
          <OptionBtnWrapper gap={8} marginBot={8}>
            <OptionBtn large>XS</OptionBtn>
            <OptionBtn large active>
              S
            </OptionBtn>
            <OptionBtn large>M</OptionBtn>
            <OptionBtn large>L</OptionBtn>
          </OptionBtnWrapper>
          <ProductSubtitleOption>Color:</ProductSubtitleOption>
          <OptionBtnWrapper gap={8} marginBot={8}>
            <OptionBtn small bColor="#2B2B2B" active></OptionBtn>
            <OptionBtn small bColor="#2B2B2B"></OptionBtn>
            <OptionBtn small bColor="#2B2B2B"></OptionBtn>
          </OptionBtnWrapper>
          {/* <ProductOptions cartType={cartType} attributes={attributes} /> */}
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
  cartType: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
    attributes: PropTypes.array.isRequired,
    gallery: PropTypes.array.isRequired,
  }),
  activeCurrency: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currencies: PropTypes.shape({
      label: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);

  return { activeCurrency };
};

const enhance = connect(mapStateToProps);

export default compose(enhance, withActiveCurrency)(CartProduct);
