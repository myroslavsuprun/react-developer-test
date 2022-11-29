import { Component } from 'react';
import { Markup } from 'interweave';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';

// redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { removeCartProductById, addCartProduct } from 'redux/cart/cartSlice';

// hoc
import { withActiveCurrency } from 'hoc';

// components
import ProductOptions from './ProductOptions';
import {
  DescriptionSection,
  ProductTitle,
  ProductPriceTitle,
  ProductPrice,
  BtnAddition,
  ProductDescriptionStyled,
} from './ProductDescription.styled';

import {
  numberWithDividers,
  createDefaultOptionValues,
  createUniqueIdWithOptionValues,
} from 'js';

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
      const defaultAttributeValues = createDefaultOptionValues(attributes);

      return { optionValues: defaultAttributeValues };
    });
  }

  handleAddBtnClick = () => {
    const { optionValues } = this.state;
    const { addCartProduct } = this.props;
    const { ...product } = this.props.product;

    if (!product.inStock) {
      return;
    }

    delete product.inStock;
    delete product.description;

    addCartProduct({ ...product, optionValues: { ...optionValues } });
  };

  handleRemoveBtnClick = e => {
    e.preventDefault();

    const { removeCartProductById, product } = this.props;

    if (!product.inStock) {
      return;
    }
    const { optionValues } = this.state;
    const { id } = product;

    const productId = createUniqueIdWithOptionValues({
      id,
      optionValues,
    });

    removeCartProductById(productId);
  };

  handleOptionAddition = optionUpdate => {
    this.setState(prevState => ({
      optionValues: { ...prevState.optionValues, ...optionUpdate },
    }));
  };

  memoizedIfInCardValue = memoize((cartProducts, id) =>
    cartProducts.some(cartProduct => cartProduct.id === id)
  );

  render() {
    const { optionValues } = this.state;
    const { product, activeCurrency, cartProducts } = this.props;

    const { brand, description, inStock, attributes, name, id } = product;

    const idWithOptionValues = createUniqueIdWithOptionValues({
      id,
      optionValues,
    });

    const ifProductInCart = this.memoizedIfInCardValue(
      cartProducts,
      idWithOptionValues
    );

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
          onClick={
            ifProductInCart ? this.handleRemoveBtnClick : this.handleAddBtnClick
          }
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
  removeCartProductById,
};

const enhance = connect(mapStateToProps, mapDispathcToProps);

export default compose(enhance, withActiveCurrency)(ProductDescription);
