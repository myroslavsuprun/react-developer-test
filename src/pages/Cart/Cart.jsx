import { Component } from 'react';

import { CartProduct } from 'components';

import {
  PageTitle,
  ProductList,
  TotalCountList,
  TotalCountItem,
  TotalCountSpan,
  SubmitOrderBtn,
} from './Cart.styled';
import { withUpdateTitle } from 'hoc';

class CartPage extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default withUpdateTitle(CartPage, 'Cart');
