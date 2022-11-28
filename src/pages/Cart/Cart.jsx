import { PureComponent } from 'react';
import memoize from 'memoize-one';
import PropTypes from 'prop-types';

// hoc
import { withUpdateTitle } from 'hoc';

// redux
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { clearCart } from 'redux/cart/cartSlice';

import { CartProduct } from 'components';
import {
  PageTitle,
  ProductList,
  TotalCountList,
  TotalCountItem,
  TotalCountSpan,
  SubmitOrderBtn,
} from './Cart.styled';

class CartPage extends PureComponent {
  handleOrderClick = () => {
    const { clearCart } = this.props;

    clearCart();
  };

  memoizedActivePrice = memoize((prices, activeCurrency) =>
    prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
  );

  render() {
    const { products } = this.props;

    // activeCurrency
    // Setting memoized currency, so it wouldn't iterate on each render
    // const {
    //   amount,
    //   currency: { symbol },
    // } = this.memoizedActivePrice(prices, activeCurrency);

    return (
      <>
        <PageTitle>Cart</PageTitle>
        <ProductList>
          {products.map(product => (
            <CartProduct key={product.id} product={product} type="cartPage" />
          ))}
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
        <SubmitOrderBtn type="button" onClick={this.handleOrderClick}>
          Order
        </SubmitOrderBtn>
      </>
    );
  }
}

CartPage.propTypes = {
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

export default compose(enhance, withUpdateTitle)(CartPage, 'Cart');
