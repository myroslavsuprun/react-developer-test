import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withUpdateTitle, withActiveCartTotal } from 'hoc';

// redux
import {
  selectActiveCurrency,
  selectCartProducts,
  selectCartTotal,
} from 'redux/selectors';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { removeCartProducts } from 'redux/cart/cartSlice';

// components
import { CartProduct } from 'components';
import {
  PageTitle,
  ProductList,
  TotalCountList,
  TotalCountItem,
  TotalCountSpan,
  SubmitOrderBtn,
  NoProductsStub,
} from './Cart.styled';

// constants
import cartType from 'constants/cartType';
import { taxRate } from 'constants/taxRate';

class CartPage extends PureComponent {
  handleOrderClick = () => {
    const { removeCartProducts } = this.props;

    removeCartProducts();
  };

  render() {
    const { products, activeCartTotal } = this.props;
    const {
      currency,
      totalAmount,
      taxPay,
      totalQuantity = 0,
    } = activeCartTotal;

    const ifCartEmpty = !Boolean(totalQuantity);

    return (
      <>
        <PageTitle>Cart</PageTitle>
        <ProductList>
          {ifCartEmpty ? (
            <NoProductsStub>The cart is empty</NoProductsStub>
          ) : (
            products.map(product => (
              <CartProduct
                key={product.id}
                product={product}
                cartType={cartType.page}
              />
            ))
          )}
        </ProductList>
        <TotalCountList>
          {!ifCartEmpty && (
            <>
              <TotalCountItem>
                <p>Tax {taxRate * 100}%:</p>
                <p>Quantity:</p>
                <p>Total:</p>
              </TotalCountItem>
              <TotalCountItem>
                <TotalCountSpan>
                  {currency.symbol}
                  {taxPay.toFixed(2)}
                </TotalCountSpan>
                <TotalCountSpan>{totalQuantity}</TotalCountSpan>
                <TotalCountSpan>
                  {currency.symbol}
                  {totalAmount.toFixed(2)}
                </TotalCountSpan>
              </TotalCountItem>
            </>
          )}
        </TotalCountList>
        <SubmitOrderBtn
          type="button"
          disabled={ifCartEmpty}
          onClick={this.handleOrderClick}
        >
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
  removeCartProducts: PropTypes.func.isRequired,
  activeCartTotal: PropTypes.shape({
    currency: PropTypes.shape({
      label: PropTypes.string,
      symbol: PropTypes.string,
    }),
    totalAmount: PropTypes.number,
    taxPay: PropTypes.number,
    totalQuantity: PropTypes.number,
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

export default compose(
  enhance,
  withActiveCartTotal,
  withUpdateTitle
)(CartPage, 'Cart');
