import React, { Component } from 'react';

import Container from 'components/Container/Container';
import CartProduct from 'components/CartProduct/CartProduct';
import {
  PageTitle,
  ProductList,
  TotalCountList,
  TotalCountItem,
  TotalCountSpan,
  SubmitOrderBtn,
} from './CartPage.styled';

class CartPage extends Component {
  render() {
    return (
      <Container>
        <PageTitle>Cart</PageTitle>
        <ProductList>
          <CartProduct type="page" />
          <CartProduct type="page" />
        </ProductList>
        <TotalCountList>
          <TotalCountItem>
            <p>Tax 21%:</p>
            <p>Quantity:</p>
            <p>Total:</p>
          </TotalCountItem>
          <TotalCountItem>
            <TotalCountSpan>$42.00</TotalCountSpan>
            <TotalCountSpan>3</TotalCountSpan>
            <TotalCountSpan>$200.00</TotalCountSpan>
          </TotalCountItem>
        </TotalCountList>
        <SubmitOrderBtn>order</SubmitOrderBtn>
      </Container>
    );
  }
}

export default CartPage;
