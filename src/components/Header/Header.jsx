import React, { Component } from 'react';

import { CurrencySwitcher, CartOverlay } from 'components/Header';
import sprite from 'img/sprite.svg';

import {
  HeaderTag,
  HeaderContainer,
  Nav,
  LinkList,
  LinkItem,
  LinkItemActive,
  Link,
  LinkActive,
  Logo,
  OptionList,
  OptionItem,
} from './Header.styled';

class Header extends Component {
  render() {
    return (
      <HeaderTag>
        <HeaderContainer>
          <Nav>
            <LinkList>
              <LinkItem>
                <Link href="#">women</Link>
              </LinkItem>
              <LinkItemActive>
                <LinkActive href="">men</LinkActive>
              </LinkItemActive>
              <LinkItem>
                <Link href="">kids</Link>
              </LinkItem>
            </LinkList>
          </Nav>
          <Logo href="">
            <svg width="30" height="30">
              <use href={`${sprite}#icon-main`}></use>
            </svg>
          </Logo>
          <OptionList>
            <CurrencySwitcher />
            <OptionItem cart>
              <svg width="30" height="30" fill="#1D1F22">
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </OptionItem>
          </OptionList>
        </HeaderContainer>
        <CartOverlay />
      </HeaderTag>
    );
  }
}

export default Header;
