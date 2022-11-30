import { PureComponent } from 'react';
import { memoizeActivePrice } from 'js';

export const withActiveCurrency = Component => {
  return class extends PureComponent {
    render() {
      const { activeCurrency, ...otherProps } = this.props;
      const { prices } =
        this.props?.products ?? this.props?.product ?? this.props;

      // Setting memoized currency, so it wouldn't iterate on each render
      const memoizedCurrency = memoizeActivePrice(prices, activeCurrency);

      return <Component activeCurrency={memoizedCurrency} {...otherProps} />;
    }
  };
};
