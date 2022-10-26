import React, { Component } from 'react';

import css from './ProductPage.module.css';

class ProductPage extends Component {
  render() {
    // const { name, description, gallery, prices, brand, attributes } =
    //   this.props;
    return (
      <main className={css.pdp}>
        <div className={`${css.container} ${css.pdp__container}`}>
          <ul className={css.pdp__imagesList}>
            <li>
              <img
                className={css.pdp_img}
                src="https://picsum.photos/200/300"
                alt=""
              />
            </li>
            <li>
              <img
                className={css.pdp_img}
                src="https://picsum.photos/200/300"
                alt=""
              />
            </li>
            <li>
              <img
                className={css.pdp_img}
                src="https://picsum.photos/200/300"
                alt=""
              />
            </li>
          </ul>
          <section className={css.pdp__descripitonSection}>
            <div className={css.pdp__activeImgWrapper}>
              <img
                className={css.pdp_activeImg}
                src="https://picsum.photos/200/300"
                alt=""
              />
            </div>
            <div className={css.pdp__descriptionWrapper}>
              <h2 className={css.pdp__title}>'Apolo'</h2>
              <p className={`${css.pdp__type} ${css.pdp__type_marginBottom}`}>
                Brand
              </p>
              <div key={value.id}>
                <p className={`${css.pdp__sizeTitle} ${css.pdp__subtitle}`}>
                  Name
                </p>
                <div className={css.pdp__colorBtnWrapper}>
                  <button
                    className={css.pdp__sizeBtn}
                    style={{ backgroundColor: `${item.value}` }}
                  ></button>
                  })}
                </div>
              </div>
              <p className={`${css.pdp__colorTitle} ${css.pdp__subtitle}`}>
                {attributes[1].id}
              </p>
              <div className={css.pdp__colorBtnWrapper}>
                {attributes[1].items.map(item => {
                  return (
                    <button
                      className={css.pdp__colorBtn}
                      style={{ backgroundColor: `${item.value}` }}
                      key={item.id}
                    ></button>
                  );
                })}
              </div>
              <p className={`${css.pdp__priceTitle} ${css.pdp__subtitle}`}>
                Price:
              </p>
              <p className={css.pdp__price}>
                {prices[0].currency.symbol}
                {prices[0].amount}
              </p>
              <button className={css.pdp__additionBtn}>Add to cart</button>
              <p className={css.pdp__descriptionP}>{description}</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default ProductPage;
