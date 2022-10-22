import React, { Component } from 'react';

import css from './ProductPageDescription.module.css';

class ProductPageDescription extends Component {
  render() {
    return (
      <section className={css.pdp__descripitonSection}>
        <div className={css.pdp__activeImgWrapper}>
          <img
            className={css.pdp_activeImg}
            src="https://picsum.photos/500/700"
            alt=""
          />
        </div>
        <div className={css.pdp__descriptionWrapper}>
          <h2 className={css.pdp__title}>Apollo</h2>
          <p className={`${css.pdp__type} ${css.pdp__type_marginBottom}`}>
            Running Short
          </p>
          <p className={`${css.pdp__sizeTitle} ${css.pdp__subtitle}`}>Size:</p>
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
          <p className={`${css.pdp__colorTitle} ${css.pdp__subtitle}`}>
            Color:
          </p>
          <div className={css.pdp__colorBtnWrapper}>
            <button
              className={`${css.pdp__colorBtn} ${css.pdp__colorBtn_active}`}
            ></button>
            <button className={css.pdp__colorBtn}></button>
            <button className={css.pdp__colorBtn}></button>
          </div>
          <p className={`${css.pdp__priceTitle} ${css.pdp__subtitle}`}>
            Price:
          </p>
          <p className={css.pdp__price}>$50.00</p>
          <button className={css.pdp__additionBtn}>Add to cart</button>
          <p className={css.pdp__descriptionP}>
            Find s women's cocktail dresses and party dresses. Stand out in lace
            and metallic cocktail dresses and party dresses from all your
            favorite brands.
          </p>
        </div>
      </section>
    );
  }
}

export default ProductPageDescription;
