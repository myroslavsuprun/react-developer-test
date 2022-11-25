import { Component } from 'react';
import PropTypes from 'prop-types';

import sprite from 'img/sprite.svg';

import {
  CurrencyListWrapper,
  CurrencySpan,
  CurrencyList,
  CurrencyItem,
} from './CurrencySwitcher.styled';

import { OptionItem } from 'components/Header/Header.styled';

const CURRENCIES = [
  { id: 0, name: '$ USD' },
  { id: 1, name: '€ EUR' },
  { id: 2, name: '¥ JPY' },
];

class CurrencySwitcher extends Component {
  handleCurrencyListClick = e => {
    const { handleCurrencyToggle } = this.props;
    if (e.currentTarget === e.target) {
      handleCurrencyToggle();
    }
  };

  handleCurrencySwitcherClick = () => {
    const { handleCurrencyToggle } = this.props;

    handleCurrencyToggle();
  };

  render() {
    const { ifCurrencyOpen } = this.props;

    return (
      <OptionItem flex>
        <div onClick={this.handleCurrencySwitcherClick}>
          <CurrencySpan>$</CurrencySpan>
          <svg width="10" height="10">
            <use href={`${sprite}#icon-chevron-down`}></use>
          </svg>
        </div>
        {ifCurrencyOpen && (
          <CurrencyListWrapper>
            <CurrencyList>
              {CURRENCIES.map(({ id, name }) => (
                <CurrencyItem
                  key={id}
                  onClick={this.handleCurrencySwitcherClick}
                >
                  {name}
                </CurrencyItem>
              ))}
            </CurrencyList>
          </CurrencyListWrapper>
        )}
      </OptionItem>
    );
  }
}

CurrencySwitcher.propTypes = {
  ifCurrencyOpen: PropTypes.bool.isRequired,
  handleCurrencyToggle: PropTypes.func.isRequired,
};

export default CurrencySwitcher;
