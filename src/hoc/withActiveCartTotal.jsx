import { PureComponent } from 'react';
import { memoizeActivePrice } from 'js';

export function withActiveCartTotal(Component) {
  return class extends PureComponent {
    render() {
      const { activeCurrency, cartTotal, ...otherProps } = this.props;
      const { prices = [], totalQuantity = 0 } = cartTotal;

      // Setting memoized currency, so it wouldn't iterate on each render
      const memoizedCartTotal = memoizeActivePrice(prices, activeCurrency);

      const activeCartTotal = { ...memoizedCartTotal, totalQuantity };

      return <Component activeCartTotal={activeCartTotal} {...otherProps} />;
    }
  };
}
