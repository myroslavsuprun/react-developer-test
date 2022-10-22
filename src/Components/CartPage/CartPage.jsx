import React, { Component } from 'react';

import sprite from 'img/sprite.svg';
import css from './CartPage.module.css';

class CartPage extends Component {
  render() {
    return (
      <main>
        <div className={css.container}>
          <h1 className={css.cart__title}>Cart</h1>
          <ul className={css.cart__productList}>
            <li className={css.cart__productItem}>
              <div className={css.cart__productLeftWrapper}>
                <p className={`${css.cart__productTitle} ${css.pdp__title}`}>
                  Apollo
                </p>
                <p
                  className={`${css.cart__productType} ${css.cart__productType_marginBottom} ${css.pdp__type}`}
                >
                  Running Short
                </p>
                <p className={css.cart__productPrice}>$50.00</p>
                <p className={css.pdp__subtitle}>Size:</p>
                <div className={css.pdp__sizeBtnWrapper}>
                  <button className={css.pdp__sizeBtn}>XS</button>
                  <button
                    className={`${css.pdp__sizeBtn} ${css.pdp__sizeBtn_active}`}
                  >
                    S
                  </button>
                  <button className={css.pdp__sizeBtn}>M</button>
                  <button className={css.pdp__sizeBtn}>L</button>
                </div>
                <p className={css.pdp__subtitle}>Color:</p>
                <div className={css.pdp__colorBtnWrapper}>
                  <button
                    className={`${css.pdp__colorBtn} ${css.pdp__colorBtn_active}`}
                  ></button>
                  <button className={css.pdp__colorBtn}></button>
                  <button className={css.pdp__colorBtn}></button>
                </div>
              </div>
              <div className={css.cart__productRightWrapper}>
                <div className={css.cart__productQuantityWrapper}>
                  <button
                    className={css.cart__quantityBtn}
                    aria-label="Increase quantity"
                  >
                    <svg className={css.cart__svg} width="28" height="28">
                      <use href={`${sprite}#icon-plus-lg`}></use>
                    </svg>
                  </button>
                  <span className={css.cart__quantitySpan}>1</span>
                  <button
                    className={css.cart__quantityBtn}
                    aria-label="Decrease quantity"
                  >
                    <svg className={css.cart__svg} width="28" height="28">
                      <use href={`${sprite}#icon-minus-lg`}></use>
                    </svg>
                  </button>
                </div>
                <div className={css.cart__productImgWrapper}>
                  <img
                    className={css.cart__productImg}
                    src="https://picsum.photos/200/300"
                    alt=""
                  />
                  <div className={css.cart__productChangeBtnWrapper}>
                    <button
                      className={css.cart__imgChangeBtn}
                      aria-label="Previous image"
                    >
                      <svg className={css.cart__svg} width="18" height="18">
                        <use href={`${sprite}#icon-chevron-left`}></use>
                      </svg>
                    </button>
                    <button
                      className={css.cart__imgChangeBtn}
                      aria-label="Next image"
                    >
                      <svg className={css.cart__svg} width="18" height="18">
                        <use href={`${sprite}#icon-chevron-right`}></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul className={css.cart__countList}>
            <li className={css.cart__countItem}>
              <p className={css.cart__countTitle}>Tax 21%:</p>
              <p className={css.cart__countTitle}>Quantity:</p>
              <p className={css.cart__countTitle}>Total:</p>
            </li>
            <li className={css.cart__countItem}>
              <span className={css.cart__countSum}>$42.00</span>
              <span className={css.cart__countSum}>3</span>
              <span className={css.cart__countSum}>$200.00</span>
            </li>
          </ul>
          <button className={css.cart__orderBtn}>order</button>
        </div>
      </main>
    );
  }
}

export default CartPage;
