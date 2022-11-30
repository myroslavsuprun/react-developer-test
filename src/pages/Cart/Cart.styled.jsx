import { css } from 'styled-components';
import styled from 'styled-components';

export const PageTitle = styled.h1`
  margin-bottom: 54px;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;

  text-transform: uppercase;
`;

export const NoProductsStub = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ProductList = styled.ul`
  padding: 24px 0;
  margin-bottom: 32px;

  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  list-style-type: none;
`;

export const TotalCountList = styled.ul`
  margin-bottom: 16px;
  display: flex;
  gap: 10px;

  font-size: 24px;
  line-height: 1.17;
  list-style-type: none;
`;

export const TotalCountItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const TotalCountSpan = styled.span`
  font-weight: 700;
`;

export const SubmitOrderBtn = styled.button`
  padding: 13px 114px;

  color: #fff;
  border: none;

  text-transform: uppercase;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: #34ab53;
      `;
    }

    return css`
      background-color: #5ec071;
      cursor: pointer;
    `;
  }};
`;
