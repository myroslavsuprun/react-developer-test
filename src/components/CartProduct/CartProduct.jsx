import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withActiveCurrency } from 'hoc';

// redux
import { selectActiveCurrency } from 'redux/selectors';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';

// components
import CartProductOptions from './CartProductOptions';
import {
  ProductItem,
  ProductLeftWrapper,
  ProductTitle,
  ProductPrice,
  ProductRightWrapper,
  ProductQuantityWrapper,
  ProductQuantityBtn,
  ChangeImgWrapper,
  ProductImg,
  ChangeImgButtonWrapper,
  ImgChangeBtn,
} from './CartProduct.styled';

// other
import sprite from 'img/sprite.svg';
import cartType from 'constants/cartType';

class CartProduct extends PureComponent {
  state = {
    quantity: 1,
    activeImageIndex: 0,
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

  handleNextImageBtn = () => {
    const { activeImageIndex } = this.state;
    const { product } = this.props;
    const { gallery } = product;

    const galleryLength = gallery.length;

    if (activeImageIndex === galleryLength - 1) {
      return;
    }

    this.setState(prevState => ({
      activeImageIndex: prevState.activeImageIndex + 1,
    }));
  };

  handlePreviousImageBtn = () => {
    const { activeImageIndex } = this.state;

    if (activeImageIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      activeImageIndex: prevState.activeImageIndex - 1,
    }));
  };

  render() {
    const { quantity, activeImageIndex } = this.state;
    const { cartType: cartTypeProp, product, activeCurrency } = this.props;

    const { name, brand, attributes, gallery, optionValues } = product;

    const {
      amount,
      currency: { symbol },
    } = activeCurrency;

    const ifImgBtnsShown =
      cartTypeProp === cartType.page && gallery.length >= 2;

    return (
      <ProductItem cartType={cartTypeProp}>
        <ProductLeftWrapper>
          <ProductTitle>{name}</ProductTitle>
          <ProductTitle as="p">{brand}</ProductTitle>
          <ProductPrice>
            {symbol}
            {amount}
          </ProductPrice>
          <CartProductOptions
            activeOptionValues={optionValues}
            cartType={cartTypeProp}
            attributes={attributes}
          />
        </ProductLeftWrapper>
        <ProductRightWrapper gap={8}>
          <ProductQuantityWrapper>
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
          <ChangeImgWrapper>
            <ProductImg src={gallery[activeImageIndex]} alt={name} />
            {ifImgBtnsShown && (
              <ChangeImgButtonWrapper>
                <ImgChangeBtn
                  onClick={this.handlePreviousImageBtn}
                  type="button"
                  area-label="previous image"
                >
                  <svg width="14" height="14">
                    <use href={`${sprite}#icon-chevron-left`}></use>
                  </svg>
                </ImgChangeBtn>
                <ImgChangeBtn
                  onClick={this.handleNextImageBtn}
                  type="button"
                  area-label="next image"
                >
                  <svg width="14" height="14">
                    <use href={`${sprite}#icon-chevron-right`}></use>
                  </svg>
                </ImgChangeBtn>
              </ChangeImgButtonWrapper>
            )}
          </ChangeImgWrapper>
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
