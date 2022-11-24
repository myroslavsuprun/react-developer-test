import React, { Component } from 'react';

import sprite from 'img/sprite.svg';

import {
  CurrencyListWrapper,
  CurrencySpan,
  CurrencyList,
  CurrencyItem,
} from './CurrencySwitcher.styled';

import { OptionItem } from 'componentss/Header/Header.styled';

class CurrencySwitcher extends Component {
  render() {
    return (
      <OptionItem flex>
        <CurrencySpan>$</CurrencySpan>
        <svg width="10" height="10">
          <use href={`${sprite}#icon-chevron-down`}></use>
        </svg>
        <CurrencyListWrapper>
          <CurrencyList>
            <CurrencyItem>$ USD</CurrencyItem>
            <CurrencyItem>€ EUR</CurrencyItem>
            <CurrencyItem>¥ JPY</CurrencyItem>
          </CurrencyList>
        </CurrencyListWrapper>
      </OptionItem>
    );
  }
}

export default CurrencySwitcher;
