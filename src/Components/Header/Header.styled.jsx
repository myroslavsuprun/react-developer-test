import styled from 'styled-components';
import { css } from 'styled-components';

export const HeaderTag = styled.header`
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
`;

export const LinkItemActive = styled(LinkItem)`
  &::after {
    content: '';
    position: relative;
    display: block;
    bottom: -25px;

    height: 1px;
    width: 96px;

    background-color: #5ece7b;
  }
`;

export const Link = styled.a`
  color: #1d1f22;

  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
`;

export const LinkActive = styled(Link)`
  color: #5ece7b;

  font-weight: 600;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;

export const OptionList = styled.ul`
  position: relative;
  display: flex;
  gap: 22px;

  margin-left: auto;

  list-style-type: none;
`;

export const OptionItem = styled.li`
  padding-top: ${props => props.cart && '7px'};

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
