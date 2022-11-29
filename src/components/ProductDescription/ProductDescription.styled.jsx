import styled, { css } from 'styled-components';

export const DescriptionSection = styled.section``;

export const ProductTitle = styled.h2`
  ${props => {
    if (props.as) return;

    return css`
      font-weight: 600;
    `;
  }}

  margin-bottom: ${props => `${props.marginB}px`};

  font-size: 30px;
  line-height: 0.9;
`;

export const ProductPriceTitle = styled.p`
  margin-top: 36px;
  margin-bottom: 20px;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  text-transform: uppercase;
`;

export const ProductPrice = styled.p`
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 24px;
  line-height: 0.75;
`;

export const BtnAddition = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  min-width: 292px;
  min-height: 52px;

  border: none;
  background-color: #5ece7b;
  color: #fff;

  text-transform: uppercase;

  ${({ inStock }) =>
    inStock
      ? css`
          opacity: 1;
          cursor: pointer;
        `
      : css`
          opacity: 0.6;
          cursor: default;
        `}
`;

export const ProductDescriptionStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;
