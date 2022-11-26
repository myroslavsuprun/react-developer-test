import styled from 'styled-components';
import { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 100;

  width: 100%;
  max-height: 80px;

  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px 100px;

  max-width: 1440px;
  max-height: 80px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinkList = styled.nav`
  display: flex;

  text-transform: uppercase;
  list-style-type: none;
`;

export const LinkItem = styled.li`
  min-width: 96px;

  text-align: center;

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: '';
        position: relative;
        display: block;
        bottom: -25px;

        height: 1px;
        width: 96px;

        background-color: #5ece7b;
      }
    `}
`;

export const LinkStyled = styled(Link)`
  padding: 20px 0;

  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;

  ${({ active }) =>
    active
      ? css`
          color: #5ece7b;

          font-weight: 600;
        `
      : css`
          color: #1d1f22;
        `};
`;

export const Logo = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
`;

export const OptionList = styled.ul`
  position: relative;
  display: flex;
  gap: 22px;

  margin-left: auto;

  list-style-type: none;
`;

export const OptionItem = styled.li`
  padding-top: ${props => props.cart && '6px'};

  cursor: pointer;

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
