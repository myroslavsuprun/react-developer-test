import { PureComponent } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withActiveCurrency, withIfProductInCart } from 'hoc';

// Redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartProducts } from 'redux/selectors';
import { addCartProduct, removeCartProductById } from 'redux/cart/cartSlice';

// Components
import {
  ProductItem,
  ProductLink,
  ProductImgWrapper,
  ProductImg,
  ProductSoldOut,
  ProductItemButton,
  ProductName,
  ProductPrice,
} from './ProductCard.styled';

// other
import sprite from 'img/sprite.svg';
import { createUniqueIdWithOptionValues, numberWithDividers } from 'js';

class ProductCard extends PureComponent {
  handleAddBtnClick = e => {
    e.preventDefault();
    const { addCartProduct } = this.props;
    const { ...product } = this.props.product;

    if (!product.inStock) {
      return;
    }

    // removing unnecessary data for Redux State
    delete product.category;
    delete product.inStock;
    console.log(product);

    addCartProduct({ ...product });
  };

  handleRemoveBtnClick = e => {
    e.preventDefault();

    const { removeCartProductById, product } = this.props;

    if (!product.inStock) {
      return;
    }
    const { attributes, optionValues, id } = product;

    const productId = createUniqueIdWithOptionValues({
      attributes,
      optionValues,
      id,
    });

    removeCartProductById(productId);
  };

  render() {
    const { product, activeCurrency, ifProductInCart } = this.props;

    const { inStock, gallery, name, id, category, brand } = product;

    const {
      amount,
      currency: { symbol },
    } = activeCurrency;

    return (
      <ProductItem inStock={inStock}>
        <ProductLink to={`/${category}/${id}`}>
          <ProductImgWrapper>
            <ProductImg src={gallery[0]} alt={name} />
            <ProductSoldOut>OUT OF STOCK</ProductSoldOut>
            <ProductItemButton
              onClick={
                ifProductInCart
                  ? this.handleRemoveBtnClick
                  : this.handleAddBtnClick
              }
              aria-label={ifProductInCart ? 'Remove from cart' : 'Add to cart'}
              type="button"
              ifProductInCart={ifProductInCart}
            >
              <svg width="24" height="24" fill="#fff">
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </ProductItemButton>
          </ProductImgWrapper>
          <ProductName>
            {brand} {name}
          </ProductName>
          <ProductPrice>
            {symbol}
            {numberWithDividers(amount)}
          </ProductPrice>
        </ProductLink>
      </ProductItem>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    inStock: PropTypes.bool.isRequired,
    gallery: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.shape({
          label: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired,
        }),
      })
    ),
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);
  const cartProducts = selectCartProducts(state);

  return { activeCurrency, cartProducts };
};

const mapDispatchToProps = {
  addCartProduct,
  removeCartProductById,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  enhance,
  withIfProductInCart,
  withActiveCurrency
)(ProductCard);
