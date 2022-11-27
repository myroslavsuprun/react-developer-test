import { Component } from 'react';
import { createPortal } from 'react-dom';

import {
  CurrencyListWrapper,
  CurrencyList,
  CurrencyItem,
  CurrencyListBackdrop,
} from './CurrencySwitcher.styled';

const modalRoot = document.getElementById('modal-root');

class CurrencyOverlay extends Component {
  render() {
    const {
      currencies,
      handleCurrencyChooseItemClick,
      handleCurrencyBackdropClick,
    } = this.props;

    const element = (
      <CurrencyListBackdrop onClick={handleCurrencyBackdropClick}>
        <CurrencyListWrapper>
          <CurrencyList>
            {currencies.map(({ label, symbol }) => (
              <CurrencyItem
                key={symbol}
                onClick={() => handleCurrencyChooseItemClick({ label, symbol })}
              >
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
