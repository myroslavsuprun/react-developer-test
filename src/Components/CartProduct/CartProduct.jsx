import React, { Component } from 'react';

import {
  ProductItem,
  ProductLeftWrapper,
  ProductTitle,
  ProductPrice,
  ProductSubtitleOption,
  OptionBtnWrapper,
  OptionBtn,
  ProductRightWrapper,
  ProductQuantityWrapper,
  ProductQuantityBtn,
  ProductImg,
} from './CartProduct.styled';

import sprite from 'img/sprite.svg';

class CartProduct extends Component {
  render() {
    const { type } = this.props;

    return (
      <ProductItem type={type}>
        <ProductLeftWrapper>
          <ProductTitle>Apollo</ProductTitle>
          <ProductTitle as="p">Running Short</ProductTitle>
          <ProductPrice>$50.00</ProductPrice>
          <ProductSubtitleOption>Size:</ProductSubtitleOption>
          <OptionBtnWrapper gap={8} marginBot={8}>
            <OptionBtn large>XS</OptionBtn>
            <OptionBtn large active>
              S
            </OptionBtn>
            <OptionBtn large>M</OptionBtn>
            <OptionBtn large>L</OptionBtn>
          </OptionBtnWrapper>
          <ProductSubtitleOption>Color:</ProductSubtitleOption>
          <OptionBtnWrapper gap={8} marginBot={8}>
            <OptionBtn small bColor="#2B2B2B" active></OptionBtn>
            <OptionBtn small bColor="#2B2B2B"></OptionBtn>
            <OptionBtn small bColor="#2B2B2B"></OptionBtn>
          </OptionBtnWrapper>
        </ProductLeftWrapper>
        <ProductRightWrapper gap={8}>
          <ProductQuantityWrapper gap={58}>
            <ProductQuantityBtn aria-label="Increase quantity">
              <svg width="28" height="28">
                <use href={`${sprite}#icon-plus-lg`}></use>
              </svg>
            </ProductQuantityBtn>
            <span>1</span>
            <ProductQuantityBtn aria-label="Decrease quantity">
              <svg width="28" height="28">
                <use href={`${sprite}#icon-minus-lg`}></use>
              </svg>
            </ProductQuantityBtn>
          </ProductQuantityWrapper>
          <ProductImg src="https://picsum.photos/200/300" alt="" />
        </ProductRightWrapper>
      </ProductItem>
    );
  }
}

export default CartProduct;
