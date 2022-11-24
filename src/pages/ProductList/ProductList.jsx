import { Component } from 'react';

import { ProductCard } from 'components';

import { CategoryTitle, ProductListStyled } from './ProductList.styled';

class ProductList extends Component {
  render() {
    return (
      <>
        <CategoryTitle>Category name</CategoryTitle>
        <ProductListStyled>
          <ProductCard soldOut={true} />
          <ProductCard soldOut={false} />
          <ProductCard soldOut={false} />
          <ProductCard soldOut={false} />
        </ProductListStyled>
      </>
    );
  }
}

export default ProductList;
