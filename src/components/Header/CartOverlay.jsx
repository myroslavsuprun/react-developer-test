import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { CartProduct } from 'components';

import {
  CartOverlayBackdrop,
  CartOverlayWrapper,
  CartOverlayTitle,
  CartOverlayTitleSpan,
  ProductList,
  TotalCountWrapper,
  TotalCountP,
  CartOverlayBtnList,
  CartOverlayBtn,
} from './CartOverlay.styled';
import ROUTES from 'constants/routes';

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

  render() {
    const component = (
      <CartOverlayBackdrop onClick={this.handleOverlayBackDropClick}>
        <CartOverlayWrapper>
          <CartOverlayTitle>
            My bag, <CartOverlayTitleSpan>3 items</CartOverlayTitleSpan>
          </CartOverlayTitle>
          <ProductList>
            <CartProduct type="overlay" />
            <CartProduct type="overlay" />
          </ProductList>
          <TotalCountWrapper>
            <TotalCountP fw={500}>Total</TotalCountP>
            <TotalCountP as="span" fw={700}>
              $200.00
            </TotalCountP>
          </TotalCountWrapper>
          <CartOverlayBtnList>
            <li>
              <CartOverlayBtn
                onClick={this.handleButtonLinkClick}
                to={ROUTES.cart}
              >
                View bag
              </CartOverlayBtn>
            </li>
            <li>
              <CartOverlayBtn onClick={this.handleButtonLinkClick}>
                CHECK OUT
              </CartOverlayBtn>
            </li>
          </CartOverlayBtnList>
        </CartOverlayWrapper>
      </CartOverlayBackdrop>
    );

    return createPortal(component, modalRoot);
  }
}

CartOverlay.propTypes = {
  handleOverlayToggle: PropTypes.func.isRequired,
};

export default CartOverlay;
