import React, { Component } from 'react';

import CartProduct from 'components/CartProduct/CartProduct';

import {
  CartOverlayDiv,
  CartOverlayWrapper,
  CartOverlayTitle,
  CartOverlayTitleSpan,
  ProductList,
  TotalCountWrapper,
  TotalCountP,
  CartOverlayBtnList,
  CartOverlayBtn,
} from './CartOverlay.styled';

class CartOverlay extends Component {
  render() {
    return (
      <CartOverlayDiv>
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
              <CartOverlayBtn>View bag</CartOverlayBtn>
            </li>
            <li>
              <CartOverlayBtn>CHECK OUT</CartOverlayBtn>
            </li>
          </CartOverlayBtnList>
        </CartOverlayWrapper>
      </CartOverlayDiv>
    );
  }
}

export default CartOverlay;
