import { PureComponent } from 'react';
import memoize from 'memoize-one';

import { createDefaultOptionValues, createProductIdWithOptionValues } from 'js';

export const withIfProductInCart = Component => {
  return class extends PureComponent {
    memoizedIfInCardValue = memoize((cartProducts, id) =>
      cartProducts.some(cartProduct => cartProduct.id === id)
    );

    render() {
      const {
        cartProducts,
        product: { id, attributes },
      } = this.props;

      const optionValues = createDefaultOptionValues(attributes);
      const optionValuesArray = Object.values(optionValues);
      const idWithOptionValues = createProductIdWithOptionValues(
        id,
        optionValuesArray
      );

      const ifProductInCart = this.memoizedIfInCardValue(
        cartProducts,
        idWithOptionValues
      );

      return <Component ifProductInCart={ifProductInCart} {...this.props} />;
    }
  };
};
