import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withUpdateTitle } from 'hoc';

// redux
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
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

class CartPage extends PureComponent {
  handleOrderClick = () => {
    const { removeCartProducts } = this.props;

    removeCartProducts();
  };

  render() {
    const { products } = this.props;

    return (
      <>
        <PageTitle>Cart</PageTitle>
        <ProductList>
          {products.length === 0 ? (
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
  removeCartProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const products = selectCartProducts(state);
  const activeCurrency = selectActiveCurrency(state);

  return { products, activeCurrency };
};

const mapDispatchToProps = {
  removeCartProducts,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance, withUpdateTitle)(CartPage, 'Cart');
