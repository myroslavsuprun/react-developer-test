import { Component } from 'react';
import { Markup } from 'interweave';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { addCartProduct } from 'redux/cart/cartSlice';

// hoc
import { withActiveCurrency, withIfProductInCart } from 'hoc';

import {
  DescriptionSection,
  ProductTitle,
  ProductPriceTitle,
  ProductPrice,
  BtnAddition,
  ProductDescriptionStyled,
} from './ProductDescription.styled';
import ProductOptions from './ProductOptions';

import { numberWithDividers, createOptionIdState } from 'js';

class ProductDescription extends Component {
  state = {
    optionValues: {},
  };

  componentDidMount() {
    const {
      product: { attributes },
    } = this.props;

    if (!attributes) {
      return;
    }

    this.setState(() => {
      const defaultAttributeValues = attributes.reduce(
        (acc, { name, items }) => {
          const defaultAttribute = { [createOptionIdState(name)]: items[0].id };

          return { ...acc, ...defaultAttribute };
        },
        {}
      );

      return { optionValues: defaultAttributeValues };
    });
  }

  handleAddProductClick = () => {
    const { addCartProduct, product } = this.props;
    const { optionValues } = this.state;

    if (!product.inStock) {
      return;
    }

    addCartProduct({ ...product, optionValues: { ...optionValues } });
  };

  handleOptionAddition = optionUpdate => {
    this.setState(prevState => ({
      optionValues: { ...prevState.optionValues, ...optionUpdate },
    }));
  };

  render() {
    const { optionValues } = this.state;
    const { product, activeCurrency, ifProductInCart } = this.props;

    const { brand, description, inStock, attributes, name } = product;

    const {
      amount,
      currency: { symbol },
    } = activeCurrency;

    const btnTextIfInStock = ifProductInCart
      ? 'Remove from cart'
      : 'Add to cart';

    return (
      <DescriptionSection>
        <ProductTitle marginB={16}>{name}</ProductTitle>
        <ProductTitle as="p" marginB={42}>
          {brand}
        </ProductTitle>
        <ProductOptions
          handleOptionAddition={this.handleOptionAddition}
          activeOptionBtns={optionValues}
          attributes={attributes}
        />
        <ProductPriceTitle>Price:</ProductPriceTitle>
        <ProductPrice>
          {symbol}
          {numberWithDividers(amount)}
        </ProductPrice>
        <BtnAddition
          type="button"
          onClick={this.handleAddProductClick}
          disapled={!inStock}
          inStock={inStock}
        >
          {inStock ? btnTextIfInStock : 'Out of stock'}
        </BtnAddition>
        <ProductDescriptionStyled>
          <Markup content={description} />
        </ProductDescriptionStyled>
      </DescriptionSection>
    );
  }
}

ProductDescription.propTypes = {
  addCartProduct: PropTypes.func.isRequired,
  activeCurrency: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    currency: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
    }),
  }),
  product: PropTypes.shape({
    attributes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['swatch', 'text']).isRequired,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            displayValue: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
          })
        ),
      })
    ),
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.array.isRequired,
    inStock: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.shape({
          symbol: PropTypes.string.isRequired,
        }),
      })
    ),
  }),
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);
  const cartProducts = selectCartProducts(state);

  return { activeCurrency, cartProducts };
};

const mapDispathcToProps = {
  addCartProduct,
};

const enhance = connect(mapStateToProps, mapDispathcToProps);

export default compose(
  enhance,
  withActiveCurrency,
  withIfProductInCart
)(ProductDescription);
