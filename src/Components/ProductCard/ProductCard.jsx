import React, { Component } from 'react';

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

class ProductCard extends Component {
  static defaultProps = {
    soldOut: false,
  };

  render() {
    const { soldOut } = this.props;

    return (
      <ProductItem soldOut={soldOut}>
        <ProductLink href="./pdp.html">
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

export default ProductCard;
