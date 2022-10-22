import React, { Component } from 'react';

import css from './CartOverlay.module.css';
import CartOverlayProduct from 'Components/CartOverlayProduct/CartOverlayProduct';

class CartOverlay extends Component {
  render() {
    return (
      <div className={css.cartOverlay}>
        <div className={css.cartOverlay__wrapper}>
          <h2 className={css.cartOverlay__title}>
            My bag, <span className={css.cartOverlay__itemSpan}>3 items</span>
          </h2>
          <ul className={css.cartOverlay__productList}>
            <CartOverlayProduct />
            <CartOverlayProduct />
          </ul>
          <div className={css.cartOverlay__totalWrapper}>
            <p className={css.cartOverlay__totalP}>Total</p>
            <span className={css.cartOverlay__totalSpan}>$200.00</span>
          </div>
          <ul className={css.cartOverlay__btnList}>
            <li className={css.cartOverlay__btnItem}>
              <button className={css.cartOverlay__mainBtn}>View bag</button>
            </li>
            <li className={css.cartOverlay__btnItem}>
              <button className={css.cartOverlay__mainBtn}>CHECK OUT</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CartOverlay;
