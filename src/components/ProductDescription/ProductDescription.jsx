import { Component } from 'react';

import { numberWithDividers } from 'js';
import { Markup } from 'interweave';
import {
  DescriptionSection,
  ProductTitle,
  ProductPriceTitle,
  ProductPrice,
  BtnAddition,
  ProductDescriptionStyled,
} from './ProductDescription.styled';
import ProductOptions from './ProductOptions';

class ProductDescription extends Component {
  render() {
    const { brand, description, inStock, attributes, amount, symbol, name } =
      this.props;

    return (
      <DescriptionSection>
        <ProductTitle marginB={16}>{name}</ProductTitle>
        <ProductTitle as="p" marginB={42}>
          {brand}
        </ProductTitle>
        <ProductOptions attributes={attributes} />
        <ProductPriceTitle>Price:</ProductPriceTitle>
        <ProductPrice>
          {symbol}
          {numberWithDividers(amount)}
        </ProductPrice>
        <BtnAddition disapled={!inStock} inStock={inStock}>
          {inStock ? 'Add to cart' : 'Out of stock'}
        </BtnAddition>
        <ProductDescriptionStyled>
          <Markup content={description} />
        </ProductDescriptionStyled>
      </DescriptionSection>
    );
  }
}

export default ProductDescription;
