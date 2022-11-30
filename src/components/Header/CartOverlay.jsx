import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// redux
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { removeCartProducts } from 'redux/cart/cartSlice';
import {
  selectActiveCurrency,
  selectCartProducts,
  selectCartTotal,
} from 'redux/selectors';

// hoc
import { withActiveCartTotal } from 'hoc';

// components
import { NavLink } from 'react-router-dom';
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
    const { removeCartProducts } = this.props;

    removeCartProducts();
  };

  render() {
    const { products, activeCartTotal } = this.props;
    const { totalQuantity, currency, totalAmount } = activeCartTotal;

    const ifCartEmpty = !Boolean(totalQuantity);

    const component = (
      <CartOverlayBackdrop onClick={this.handleOverlayBackDropClick}>
        <CartOverlayWrapper>
          <CartOverlayTitle>
            My bag,{' '}
            <CartOverlayTitleSpan>{totalQuantity} item(s)</CartOverlayTitleSpan>
          </CartOverlayTitle>
          <ProductList>
            {ifCartEmpty ? (
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
            {!ifCartEmpty && (
              <>
                <TotalCountP fw={500}>Total</TotalCountP>
                <TotalCountP as="span" fw={700}>
                  {currency.symbol}
                  {totalAmount.toFixed(2)}
                </TotalCountP>
              </>
            )}
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
  removeCartProducts: PropTypes.func.isRequired,
  activeCartTotal: PropTypes.shape({
    currency: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      label: PropTypes.string,
    }),
    totalAmount: PropTypes.number,
  }),
};

const mapStateToProps = state => {
  const products = selectCartProducts(state);
  const activeCurrency = selectActiveCurrency(state);
  const cartTotal = selectCartTotal(state);

  return { products, activeCurrency, cartTotal };
};

const mapDispatchToProps = {
  removeCartProducts,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance, withActiveCartTotal)(CartOverlay);
