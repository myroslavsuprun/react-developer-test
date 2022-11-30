import { PureComponent } from 'react';

import { createUniqueIdWithOptionValues, memoizeIfInCardValue } from 'js';

export const withIfProductInCart = Component => {
  return class extends PureComponent {
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

      const ifProductInCart = memoizeIfInCardValue(
        cartProducts,
        idWithOptionValues
      );

      return <Component ifProductInCart={ifProductInCart} {...this.props} />;
    }
  };
};
