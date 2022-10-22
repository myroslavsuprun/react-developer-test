import React, { Component } from 'react';

import sprite from 'img/sprite.svg';
import css from './CartOverlayProduct.module.css';

class CartOverlayProduct extends Component {
  render() {
    return (
      <li className={css.cartOverlay__productItem}>
        <div className={css.cartOverlay__leftWrapper}>
          <p className={css.cartOverlay__productTitle}>Apollo</p>
          <p className={css.cartOverlay__productType}>Running Short</p>
          <p className={css.cartOverlay__productPrice}>$50.00</p>
          <p className={css.cartOverlay__subtitle}>Size:</p>
          <div className={css.cartOverlay__sizeBtnWrapper}>
            <button className={css.cartOverlay__sizeBtn}>XS</button>
            <button
              className={`${css.cartOverlay__sizeBtn} ${css.cartOverlay__sizeBtn_active}`}
            >
              S
            </button>
            <button className={css.cartOverlay__sizeBtn}>M</button>
            <button className={css.cartOverlay__sizeBtn}>L</button>
          </div>
          <p className={css.cart__subtitle}>Color:</p>
          <div className={css.cartOverlay__colorBtnWrapper}>
            <button
              aria-label="color"
              className={`${css.cartOverlay__colorBtn} ${css.cartOverlay__colorBtn_active}`}
            ></button>
            <button
              aria-label="color"
              className={css.cartOverlay__colorBtn}
            ></button>
            <button
              aria-label="color"
              className={css.cartOverlay__colorBtn}
            ></button>
          </div>
        </div>
        <div className={css.cartOverlay__productRightWrapper}>
          <div className={css.cartOverlay__productQuantityWrapper}>
            <button
              className={css.cartOverlay__quantityBtn}
              aria-label="Increase quantity"
            >
              <svg className={css.cartOverlay__svg} width="16" height="16">
                <use href={`${sprite}#icon-plus-lg`}></use>
              </svg>
            </button>
            <span className={css.cartOverlay__quantwitySpan}>1</span>
            <button
              className={css.cartOverlay__quantityBtn}
              aria-label="Decrease quantity"
            >
              <svg className={css.cartOverlay__svg} width="16" height="16">
                <use href={`${sprite}#icon-minus-lg`}></use>
              </svg>
            </button>
          </div>
          <img
            className={css.cartOverlay__productImg}
            src="https://picsum.photos/200/300"
            alt=""
          />
        </div>
      </li>
    );
  }
}

export default CartOverlayProduct;
