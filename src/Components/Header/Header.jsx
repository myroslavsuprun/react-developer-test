import React, { Component } from 'react';

import css from './Header.module.css';
import sprite from 'img/sprite.svg';

class Header extends Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.header__wrapper}>
          <nav className={css.nav}>
            <ul className={css.nav__list}>
              <li className={css.nav__item}>
                <a className={css.nav__link} href="#">
                  women
                </a>
              </li>
              <li className={`${css.nav__item} ${css.nav__item_active}`}>
                <a
                  className={`${css.nav__link} ${css.nav__link_active}`}
                  href="#"
                >
                  men
                </a>
              </li>
              <li className={css.nav__item}>
                <a className={css.nav__link} href="">
                  kids
                </a>
              </li>
            </ul>
          </nav>
          <a className={css.logo} href="">
            <svg className={css.logo__svg} width="30" height="30">
              <use href={`${sprite}#icon-main`}></use>
            </svg>
          </a>
          <ul className={css.optionList}>
            <li
              className={`${css.optionList__item} ${css.optionList__item_flex} ${css.optionList_currency}`}
            >
              <svg
                className={css.optionList__svg}
                width="30"
                height="30"
                fill="#1D1F22"
              >
                <use href={`${sprite}#icon-dollar`}></use>
              </svg>
              <svg className={css.optionList__svg} width="10" height="10">
                <use href={`${sprite}#icon-chevron-down`}></use>
              </svg>
              <div className={css.option__currencyWrapper}>
                <ul className={css.option__currencyList}>
                  <li className={css.option__currencyItem}>$ USD</li>
                  <li className={css.option__currencyItem}>€ EUR</li>
                  <li className={css.option__currencyItem}>¥ JPY</li>
                </ul>
              </div>
            </li>
            <li
              className={`${css.optionList__item} ${css.optionList__item_cart}`}
            >
              <svg
                className={css.optionList__svg}
                width="30"
                height="30"
                fill="#1D1F22"
              >
                <use href={`${sprite}#icon-cart`}></use>
              </svg>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
