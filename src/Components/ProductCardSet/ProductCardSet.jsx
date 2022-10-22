import React, { Component } from 'react';
import ProductCard from 'Components/ProductCard/ProductCard';
import css from './ProductCardSet.module.css';

class ProductCardSet extends Component {
  render() {
    return (
      <div className={css.container}>
        <h2 className={css.product__title}>Category name</h2>
        <ul className={`${css.product__list} ${css.cardList}`}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </div>
    );
  }
}

export default ProductCardSet;
