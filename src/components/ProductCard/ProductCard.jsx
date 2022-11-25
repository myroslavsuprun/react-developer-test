import { Component } from 'react';
import PropTypes from 'prop-types';

import sprite from 'img/sprite.svg';
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
import ROUTES from 'constants/routes';

class ProductCard extends Component {
  static defaultProps = {
    soldOut: false,
  };

  render() {
    const { soldOut } = this.props;

    return (
      <ProductItem soldOut={soldOut}>
        <ProductLink to={ROUTES.product}>
          <ProductImgWrapper>
            <ProductImg src="https://picsum.photos/300/400" alt="" />
            <ProductSoldOut>OUT OF STOCK</ProductSoldOut>
            <ProductItemButton aria-label="Add to cart">
              <svg width="24" height="24" fill="#fff">
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </ProductItemButton>
          </ProductImgWrapper>
          <ProductName>Apollo Running Short</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </ProductLink>
      </ProductItem>
    );
  }
}

ProductCard.propTypes = {
  soldOut: PropTypes.bool.isRequired,
};

export default ProductCard;
