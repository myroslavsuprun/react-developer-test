import React, { Component } from 'react';

import ProductPageDescription from 'Components/ProductPageDescription/ProductPageDescription';
import css from './ProductPage.module.css';

class ProductPage extends Component {
  render() {
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
          <ProductPageDescription />
        </div>
      </main>
    );
  }
}

export default ProductPage;
