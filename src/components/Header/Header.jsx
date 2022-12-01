import { Component } from 'react';
import PropTypes from 'prop-types';

// hoc
import { withGetCategories, withUseParams, withActiveCartTotal } from 'hoc';

// redux
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { selectActiveCurrency, selectCartTotal } from 'redux/selectors';

// components
import { CurrencySwitcher, CartOverlay } from 'components/Header';
import {
  HeaderStyled,
  HeaderContainer,
  Nav,
  LinkList,
  LinkItem,
  LinkStyled,
  Logo,
  OptionList,
  OptionItem,
  CartNotification,
} from './Header.styled';

// other
import sprite from 'img/sprite.svg';
import ROUTES from 'constants/routes';

class Header extends Component {
  state = {
    ifOverlayOpen: false,
    ifCurrencyOpen: false,
  };

  handleOverlayToggle = () => {
    this.setState(({ ifOverlayOpen }) => ({
      ifOverlayOpen: !ifOverlayOpen,
      ifCurrencyOpen: false,
    }));
  };

  handleCurrencyToggle = () => {
    this.setState(({ ifCurrencyOpen }) => ({
      ifCurrencyOpen: !ifCurrencyOpen,
      ifOverlayOpen: false,
    }));
  };

  render() {
    const { ifOverlayOpen, ifCurrencyOpen } = this.state;
    const { categoriesQueryStatus, params, activeCartTotal } = this.props;
    const { data, isSuccess } = categoriesQueryStatus;
    const { categoryId } = params;

    if (isSuccess) {
      const { categories } = data;

      const { totalQuantity } = activeCartTotal;

      return (
        <>
          <HeaderStyled>
            <HeaderContainer>
              <Nav>
                <LinkList>
                  {categories.map(({ name }) => {
                    const ifActive = name === categoryId ? 1 : null;

                    return (
                      <LinkItem active={ifActive} key={name}>
                        <LinkStyled to={`/${name}`} active={ifActive}>
                          {name}
                        </LinkStyled>
                      </LinkItem>
                    );
                  })}
                </LinkList>
              </Nav>
              <Logo to={ROUTES.home} aria-label="Shop logotype">
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-main`}></use>
                </svg>
              </Logo>
              <OptionList>
                <CurrencySwitcher
                  ifCurrencyOpen={ifCurrencyOpen}
                  handleCurrencyToggle={this.handleCurrencyToggle}
                />
                <OptionItem cart onClick={this.handleOverlayToggle}>
                  <svg width="26" height="26" fill="#1D1F22">
                    <use href={`${sprite}#icon-cart`}></use>
                  </svg>
                  {Boolean(totalQuantity) && (
                    <CartNotification>{totalQuantity}</CartNotification>
                  )}
                </OptionItem>
              </OptionList>
            </HeaderContainer>
          </HeaderStyled>

          {ifOverlayOpen && (
            <CartOverlay handleOverlayToggle={this.handleOverlayToggle} />
          )}
        </>
      );
    }
  }
}

Header.propTypes = {
  params: PropTypes.object.isRequired,
  categoriesQueryStatus: PropTypes.object.isRequired,
  activeCartTotal: PropTypes.shape({
    totalQuantity: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = state => {
  const cartTotal = selectCartTotal(state);
  const activeCurrency = selectActiveCurrency(state);

  return { cartTotal, activeCurrency };
};

const enhance = connect(mapStateToProps);

export default compose(
  enhance,
  withGetCategories,
  withUseParams,
  withActiveCartTotal
)(Header);
