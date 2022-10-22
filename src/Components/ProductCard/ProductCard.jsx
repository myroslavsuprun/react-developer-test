import React, { Component } from 'react';

import css from './ProductCard.module.css';
import sprite from 'img/sprite.svg';

class ProductCard extends Component {
  render() {
    return (
      <li
        className={`${css.product__item} ${css.product__item_hovered} ${css.cardItem}`}
      >
        <a className={css.product__link} href="./pdp.html">
          <div className={css.product_imgWrapper}>
            <img
              className={css.product__img}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <div className={css.product__img_soldOut}>OUT OF STOCK</div>
            <button className={css.product__button} aria-label="Add to cart">
              <svg
                className={css.product__svg}
                width="24"
                height="24"
                fill="#fff"
              >
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </button>
          </div>
          <p className={css.product__name}>Apollo Running Short</p>
          <p className={css.product__price}>$50.00</p>
        </a>
      </li>
    );
  }
}

export default ProductCard;

// const ProductCard = props => {
//   return (

//   );
// };
