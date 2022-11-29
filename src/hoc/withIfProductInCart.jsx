import memoize from 'memoize-one';
import { PureComponent } from 'react';

export const withIfProductInCart = Component => {
  return class extends PureComponent {
    memoizedIfInCardValue = memoize((cartProducts, id) =>
      cartProducts.some(cartProduct => cartProduct.id === id)
    );

    render() {
      const {
        cartProducts,
        product: { id },
      } = this.props;

      const ifProductInCart = this.memoizedIfInCardValue(cartProducts, id);

      return <Component ifProductInCart={ifProductInCart} {...this.props} />;
    }
  };
};
