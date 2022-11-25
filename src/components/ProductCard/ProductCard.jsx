import { Component } from 'react';
import PropTypes from 'prop-types';

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
import ROUTES from 'constants/routes';
import { numberWithCommas } from 'js';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { inStock, gallery, name, prices } = product;
    const {
      currency: { symbol },
      amount,
    } = prices[0];

    return (
      <ProductItem inStock={inStock}>
        <ProductLink to={ROUTES.product}>
          <ProductImgWrapper>
            <ProductImg src={gallery[0]} alt={name} />
            <ProductSoldOut>OUT OF STOCK</ProductSoldOut>
            <ProductItemButton aria-label="Add to cart">
              <svg width="24" height="24" fill="#fff">
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </ProductItemButton>
          </ProductImgWrapper>
          <ProductName>{name}</ProductName>
          <ProductPrice>
            {symbol}
            {numberWithCommas(amount)}
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
    prices: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
