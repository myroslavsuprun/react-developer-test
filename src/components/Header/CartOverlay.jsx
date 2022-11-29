import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// redux
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { clearCart } from 'redux/cart/cartSlice';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';

import { CartProduct } from 'components';
import {
  CartOverlayBackdrop,
  CartOverlayWrapper,
  CartOverlayTitle,
  CartOverlayTitleSpan,
  ProductList,
  TotalCountWrapper,
  TotalCountP,
  CartOverlayLinkList,
  CartOverlayLink,
  CartOverlayBtn,
} from './CartOverlay.styled';

// constants
import ROUTES from 'constants/routes';
import cartType from 'constants/cartType';

const modalRoot = document.getElementById('modal-root');

class CartOverlay extends Component {
  componentDidMount = () => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', this.handleWindowKeypress);
  };

  componentWillUnmount = () => {
    document.body.style.overflowY = 'unset';
    window.removeEventListener('keydown', this.handleWindowKeypress);
  };

  handleOverlayBackDropClick = e => {
    const { handleOverlayToggle } = this.props;

    if (e.currentTarget === e.target) {
      handleOverlayToggle();
    }
  };

  handleWindowKeypress = e => {
    const { handleOverlayToggle } = this.props;

    const pressedKey = e.code;
    if (pressedKey === `Escape`) {
      handleOverlayToggle();
    }
  };

  handleButtonLinkClick = () => {
    const { handleOverlayToggle } = this.props;

    handleOverlayToggle();
  };

  handleCheckoutClick = () => {
    const { clearCart } = this.props;

    clearCart();
  };

  render() {
    const { products } = this.props;

    // activeCurrency
    // Setting memoized currency, so it wouldn't iterate on each render
    // const {
    //   amount,
    //   currency: { symbol },
    // } = this.memoizedActivePrice(prices, activeCurrency);

    const component = (
      <CartOverlayBackdrop onClick={this.handleOverlayBackDropClick}>
        <CartOverlayWrapper>
          <CartOverlayTitle>
            My bag, <CartOverlayTitleSpan>3 items</CartOverlayTitleSpan>
          </CartOverlayTitle>
          <ProductList>
            {products.length === 0 ? (
              <p>The cart is empty</p>
            ) : (
              products.map(product => (
                <CartProduct
                  key={product.id}
                  product={product}
                  cartType={cartType.overlay}
                />
              ))
            )}
          </ProductList>
          <TotalCountWrapper>
            <TotalCountP fw={500}>Total</TotalCountP>
            <TotalCountP as="span" fw={700}>
              $200.00
            </TotalCountP>
          </TotalCountWrapper>
          <CartOverlayLinkList>
            <li>
              <CartOverlayLink
                as={NavLink}
                onClick={this.handleButtonLinkClick}
                to={ROUTES.cart}
              >
                View bag
              </CartOverlayLink>
            </li>
            <li>
              <CartOverlayBtn type="button" onClick={this.handleCheckoutClick}>
                CHECK OUT
              </CartOverlayBtn>
            </li>
          </CartOverlayLinkList>
        </CartOverlayWrapper>
      </CartOverlayBackdrop>
    );

    return createPortal(component, modalRoot);
  }
}

CartOverlay.propTypes = {
  handleOverlayToggle: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  activeCurrency: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  clearCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const products = selectCartProducts(state);
  const activeCurrency = selectActiveCurrency(state);

  return { products, activeCurrency };
};

const mapDispatchToProps = {
  clearCart,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance)(CartOverlay);
