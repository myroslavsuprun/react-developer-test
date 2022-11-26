import { Component } from 'react';
import { createPortal } from 'react-dom';

import {
  CurrencyListWrapper,
  CurrencyList,
  CurrencyItem,
  CurrencyListBackdrop,
} from 'components/Header/CurrencySwitcher.styled';

const modalRoot = document.getElementById('modal-root');

class CurrencyOverlay extends Component {
  render() {
    const {
      currencies,
      handleCurrencySwitcherClick,
      handleCurrencyWrapperClick,
    } = this.props;

    const element = (
      <CurrencyListBackdrop onClick={handleCurrencyWrapperClick}>
        <CurrencyListWrapper>
          <CurrencyList>
            {currencies.map(({ label, symbol }) => (
              <CurrencyItem key={symbol} onClick={handleCurrencySwitcherClick}>
                {symbol} {label}
              </CurrencyItem>
            ))}
          </CurrencyList>
        </CurrencyListWrapper>
      </CurrencyListBackdrop>
    );

    return createPortal(element, modalRoot);
  }
}

export default CurrencyOverlay;
