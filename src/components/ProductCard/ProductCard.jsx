import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withActiveCurrency } from 'hoc';

// Redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency } from 'redux/selectors';
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

  render() {
    const { product, activeCurrency } = this.props;

    const { inStock, gallery, name, id, category } = product;

    // Setting memoized currency, so it wouldn't iterate on each render
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
              disabled={inStock}
              aria-label="Add to cart"
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

  return { activeCurrency };
};

const mapDispatchToProps = {
  addCartProduct,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance, withActiveCurrency)(ProductCard);
