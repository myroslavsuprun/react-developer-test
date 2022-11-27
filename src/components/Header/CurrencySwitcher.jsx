import { Component } from 'react';
import PropTypes from 'prop-types';

// refdux
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { setActiveCurrency } from 'redux/currencies/activeCurrencySlice';
import { selectActiveCurrency } from 'redux/selectors';

// hoc
import { withGetCurrencies } from 'hoc/withGetCurrencies';

// components
import { CurrencySpan } from './CurrencySwitcher.styled';
import { OptionItem } from 'components/Header/Header.styled';
import { Loader, Error } from 'components';

import sprite from 'img/sprite.svg';
import CurrencyOverlay from './CurrencyOverlay';

class CurrencySwitcher extends Component {
  handleCurrencyCurrentItemClick = () => {
    const { handleCurrencyToggle } = this.props;

    handleCurrencyToggle();
  };

  handleCurrencyChooseItemClick = newCurrentCurrency => {
    const { handleCurrencyToggle, setActiveCurrency, activeCurrency } =
      this.props;

    handleCurrencyToggle();

    if (newCurrentCurrency.symbol === activeCurrency.symbol) {
      return;
    }

    setActiveCurrency(newCurrentCurrency);
  };

  handleCurrencyBackdropClick = e => {
    const { handleCurrencyToggle } = this.props;

    if (e.currentTarget === e.target) {
      handleCurrencyToggle();
    }
  };

  render() {
    const { ifCurrencyOpen, getCurrenciesStatus, activeCurrency } = this.props;

    const { data, isLoading, isSuccess, isError, error } = getCurrenciesStatus;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error error={error} />;
    }

    if (isSuccess) {
      const { currencies } = data;

      return (
        <OptionItem flex>
          <div onClick={this.handleCurrencyCurrentItemClick}>
            <CurrencySpan>{activeCurrency.symbol}</CurrencySpan>
            <svg width="10" height="10">
              <use href={`${sprite}#icon-chevron-down`}></use>
            </svg>
          </div>
          {ifCurrencyOpen && (
            <CurrencyOverlay
              handleCurrencyBackdropClick={this.handleCurrencyBackdropClick}
              handleCurrencyChooseItemClick={this.handleCurrencyChooseItemClick}
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

const mapStateToProps = state => {
  const activeCurrency = selectActiveCurrency(state);

  return { activeCurrency };
};

const mapDispatchToProps = {
  setActiveCurrency,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default compose(enhance, withGetCurrencies)(CurrencySwitcher);
