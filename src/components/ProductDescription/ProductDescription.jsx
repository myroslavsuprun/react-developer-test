import { PureComponent } from 'react';
import { Markup } from 'interweave';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { removeCartProductById, addCartProduct } from 'redux/cart/cartSlice';
import { updateCartTotalIfRemoved } from 'redux/cartTotal/cartTotalSlice';

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
  memoizeIfInCardValue,
} from 'js';

class ProductDescription extends PureComponent {
  state = {
    optionValues: null,
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

  handleRemoveBtnClick = () => {
    const { removeCartProductById, product, updateCartTotalIfRemoved } =
      this.props;

    if (!product.inStock) {
      return;
    }

    const { optionValues } = this.state;
    const { id, prices } = product;

    const productId = createUniqueIdWithOptionValues({
      id,
      optionValues,
    });

    removeCartProductById(productId);
    updateCartTotalIfRemoved({ prices });
  };

  handleOptionAddition = optionUpdate => {
    this.setState(prevState => ({
      optionValues: { ...prevState.optionValues, ...optionUpdate },
    }));
  };

  render() {
    const { optionValues } = this.state;
    const { product, activeCurrency, cartProducts } = this.props;

    if (!optionValues) {
      return;
    }

    const { brand, description, inStock, attributes, name, id } = product;

    const idWithOptionValues = createUniqueIdWithOptionValues({
      id,
      optionValues,
    });

    const ifProductInCart = memoizeIfInCardValue(
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
  cartProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
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
  updateCartTotalIfRemoved: PropTypes.func.isRequired,
  removeCartProductById: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);
  const cartProducts = selectCartProducts(state);

  return { activeCurrency, cartProducts };
};

const mapDispathcToProps = {
  addCartProduct,
  updateCartTotalIfRemoved,
  removeCartProductById,
};

const enhance = connect(mapStateToProps, mapDispathcToProps);

export default compose(enhance, withActiveCurrency)(ProductDescription);
