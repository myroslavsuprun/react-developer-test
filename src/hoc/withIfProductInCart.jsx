import { PureComponent } from 'react';
import memoize from 'memoize-one';

import { createUniqueIdWithOptionValues } from 'js';

export const withIfProductInCart = Component => {
  return class extends PureComponent {
    memoizedIfInCardValue = memoize((cartProducts, id) =>
      cartProducts.some(cartProduct => cartProduct.id === id)
    );

    render() {
      const {
        cartProducts,
        product: { id, attributes, optionValues },
      } = this.props;

      const idWithOptionValues = createUniqueIdWithOptionValues({
        id,
        attributes,
        optionValues,
      });

      const ifProductInCart = this.memoizedIfInCardValue(
        cartProducts,
        idWithOptionValues
      );

      return <Component ifProductInCart={ifProductInCart} {...this.props} />;
    }
  };
};
