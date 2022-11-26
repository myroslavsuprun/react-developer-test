import { Component } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetCurrencies } from 'hoc/withGetCurrencies';

// components
import { CurrencySpan } from './CurrencySwitcher.styled';
import { OptionItem } from 'components/Header/Header.styled';
import { Loader, Error } from 'components';

import sprite from 'img/sprite.svg';
import CurrencyOverlay from './CurrencyOverlay';

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

  handleCurrencyWrapperClick = e => {
    const { handleCurrencyToggle } = this.props;

    if (e.currentTarget === e.target) {
      handleCurrencyToggle();
    }
  };

  render() {
    const { ifCurrencyOpen, getCurrenciesStatus } = this.props;

    const { data, isLoading, isSuccess, isError, error } = getCurrenciesStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const { currencies } = data;
      const activeCurrency = currencies[0].symbol;

      return (
        <OptionItem flex>
          <div onClick={this.handleCurrencySwitcherClick}>
            <CurrencySpan>{activeCurrency}</CurrencySpan>
            <svg width="10" height="10">
              <use href={`${sprite}#icon-chevron-down`}></use>
            </svg>
          </div>
          {ifCurrencyOpen && (
            <CurrencyOverlay
              handleCurrencyWrapperClick={this.handleCurrencyWrapperClick}
              handleCurrencySwitcherClick={this.handleCurrencySwitcherClick}
              currencies={currencies}
            />
          )}
        </OptionItem>
      );
    }
  }
}

CurrencySwitcher.propTypes = {
  ifCurrencyOpen: PropTypes.bool.isRequired,
  handleCurrencyToggle: PropTypes.func.isRequired,
  getCurrenciesStatus: PropTypes.shape({
    data: PropTypes.shape({
      currencies: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          symbol: PropTypes.string.isRequired,
        })
      ),
    }),
  }),
};

export default withGetCurrencies(CurrencySwitcher);
