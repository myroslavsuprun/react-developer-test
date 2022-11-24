import styled from 'styled-components';
import { css } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.0828fr 1fr;
  gap: 40px;
`;

export const SideImagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  list-style-type: none;
`;

export const SideImage = styled.img`
  object-fit: cover;

  cursor: pointer;
`;

export const DescriptionSection = styled.section`
  display: grid;

  grid-template-columns: 610px 292px;
  gap: 100px;
`;

export const ActiveImage = styled.img`
  width: 610px;
  max-height: 493px;
  object-fit: cover;
`;

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

export const OptionTitle = styled.p`
  margin-bottom: 8px;

  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const OptionBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => `${props.gap}px`};

  margin-bottom: ${props => `${props.marginB}px`};
`;

export const OptionBtn = styled.button`
  cursor: pointer;

  ${props => {
    if (props.large)
      return css`
        padding: 13px 22px;

        width: 63px;
        height: 45px;

        background-color: transparent;
        border: 1px solid #1d1f22;
        color: #1d1f22;

        font-family: 'Source Sans Pro', sans-serif;
        font-size: 16px;
        line-height: 1.12;
        letter-spacing: 0.05em;

        ${() => {
          if (props.active)
            return css`
              background-color: #1d1f22;
              color: #ffffff;
            `;
        }}
      `;

    return css`
      width: 35px;
      height: 35px;

      border: 1px solid #fff;
      background-color: ${props => props.bColor};

      ${() => {
        if (props.active)
          return css`
            outline: 1px solid #5ece7b;
          `;
      }}
    `;
  }}
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
  padding: 16px 80px;
  margin-bottom: 40px;
  min-width: 292px;

  border: none;
  background: #5ece7b;
  color: #fff;

  text-transform: uppercase;

  cursor: pointer;
`;

export const ProductDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;
