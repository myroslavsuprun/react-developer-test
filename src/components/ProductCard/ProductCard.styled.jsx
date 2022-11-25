import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

let inStock = null;

export const ProductItemButton = styled.button`
  position: absolute;
  display: none;
  padding: 14px;

  width: 52px;
  height: 52px;

  bottom: -25px;
  right: 15px;
  border-radius: 50%;
  border: none;
  background-color: #5ece7b;
`;

export const ProductItem = styled.li`
  // initializing styling of the ProductCard
  ${props => {
    inStock = props.inStock;
  }}

  padding: 16px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    ${ProductItemButton} {
      display: block;

      cursor: pointer;
    }
  }
`;

export const ProductLink = styled(NavLink)`
  text-decoration: none;
  color: #1d1f22;
`;

export const ProductImgWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const ProductImg = styled.img`
  ${() => {
    if (!inStock) return;

    return css`
      background: #ffffff;
      opacity: 0.5;
    `;
  }}

  margin-bottom: 24px;

  width: 354px;
  height: 340px;
  object-fit: scale-down;
`;

export const ProductSoldOut = styled.div`
  color: #8d8f9a;
  font-size: 24px;

  display: none;

  ${() => {
    if (!inStock) return;

    return css`
      display: block;
      position: absolute;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      text-transform: uppercase;
    `;
  }}
`;

export const ProductName = styled.p`
  ${() => {
    if (!inStock) return;

    return css`
      color: #8d8f9a;
    `;
  }}
  font-weight: 300;
`;

export const ProductPrice = styled.p`
  ${() => {
    if (!inStock) return;

    return css`
      color: #8d8f9a;
    `;
  }}

  font-weight: 500;
`;
