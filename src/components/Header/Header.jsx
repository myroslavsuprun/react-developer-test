// hoc
import { withGetCategories, withUseParams } from 'hoc';

// components
import { Component } from 'react';
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
} from './Header.styled';

// other
import PropTypes from 'prop-types';
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
    const { categoriesQueryStatus, params } = this.props;
    const { data, isSuccess } = categoriesQueryStatus;
    const { categoryId } = params;

    if (isSuccess) {
      const { categories } = data;

      return (
        <>
          <HeaderStyled>
            <HeaderContainer>
              <Nav>
                <LinkList>
                  {categories.map(({ name }) => {
                    const ifActive = name === categoryId;

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
              <Logo to={ROUTES.home}>
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
};

export default withGetCategories(withUseParams(Header));
