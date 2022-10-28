import React, { Component } from 'react';

import Container from 'Components/Container';
import ProductCard from 'Components/ProductCard/ProductCard';

import { CategoryTitle, ProductList } from './ProductCardSet.styled';

class ProductCardSet extends Component {
  render() {
    return (
      <Container>
        <CategoryTitle>Category name</CategoryTitle>
        <ProductList>
          <ProductCard soldOut={true} />
          <ProductCard soldOut={false} />
          <ProductCard soldOut={false} />
          <ProductCard soldOut={false} />
        </ProductList>
      </Container>
    );
  }
}

export default ProductCardSet;
