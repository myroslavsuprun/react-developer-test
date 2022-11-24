import { Component } from 'react';

import sprite from 'img/sprite.svg';

import { CurrencySwitcher, CartOverlay } from 'components/Header';
import {
  HeaderStyled,
  HeaderContainer,
  Nav,
  LinkList,
  LinkItem,
  Link,
  Logo,
  OptionList,
  OptionItem,
} from './Header.styled';

import ROUTES from 'constants/routes';

const LINKS = [
  {
    id: 0,
    to: ROUTES.home,
    text: 'Women',
  },
  {
    id: 1,
    to: ROUTES.home,
    text: 'Men',
  },
  {
    id: 2,
    to: ROUTES.home,
    text: 'Kids',
    active: 'true',
  },
];

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
    return (
      <>
        <HeaderStyled>
          <HeaderContainer>
            <Nav>
              <LinkList>
                {LINKS.map(({ id, to, text, active }) => (
                  <LinkItem active={active} key={id}>
                    <Link active={active} to={to}>
                      {text}
                    </Link>
                  </LinkItem>
                ))}
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
                <svg width="30" height="30" fill="#1D1F22">
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

export default Header;
