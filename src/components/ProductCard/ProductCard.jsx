import { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import memoize from 'memoize-one';

// hoc
import { withActiveCurrency } from 'hoc';

// Redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { addCartProduct } from 'redux/cart/cartSlice';

// Components
import {
  ProductItem,
  ProductLink,
  ProductImgWrapper,
  ProductImg,
  ProductSoldOut,
  ProductItemButton,
  ProductName,
  ProductPrice,
} from './ProductCard.styled';

// other
import sprite from 'img/sprite.svg';
import { numberWithDividers } from 'js';

class ProductCard extends PureComponent {
  handleAddToCartClick = (e, product) => {
    e.preventDefault();

    if (!product.inStock) {
      return;
    }

    const { addCartProduct } = this.props;

    addCartProduct(product);
  };

  // memoized = memoize((prices, activeCurrency) =>
  //   prices.find(({ currency }) => currency.symbol === activeCurrency.symbol)
  // );

  render() {
    const { product, activeCurrency } = this.props;
    // cartProducts

    const { inStock, gallery, name, id, category } = product;

    // const ifInCart = cartProducts.some(cartProduct => cartProduct.id === id);

    // console.log(ifInCart, '----', id);

    const {
      amount,
      currency: { symbol },
    } = activeCurrency;

    return (
      <ProductItem inStock={inStock}>
        <ProductLink to={`/${category}/${id}`}>
          <ProductImgWrapper>
            <ProductImg src={gallery[0]} alt={name} />
            <ProductSoldOut>OUT OF STOCK</ProductSoldOut>
            <ProductItemButton
              onClick={e => this.handleAddToCartClick(e, product)}
              aria-label="Add to cart"
              type="button"
            >
              <svg width="24" height="24" fill="#fff">
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </ProductItemButton>
          </ProductImgWrapper>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            {symbol}
            {numberWithDividers(amount)}
          </ProductPrice>
        </ProductLink>
      </ProductItem>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    inStock: PropTypes.bool.isRequired,
    gallery: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.shape({
          label: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired,
        }),
      })
    ),
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);
  const cartProducts = selectCartProducts(state);

  return { activeCurrency, cartProducts };
};

const mapDispatchToProps = {
  addCartProduct,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance, withActiveCurrency)(ProductCard);
