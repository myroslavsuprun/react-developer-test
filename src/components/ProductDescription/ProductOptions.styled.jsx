import styled, { css } from 'styled-components';

export const OptionTitle = styled.p`
  margin-bottom: 8px;

  ${pageStyleType => {
    switch (pageStyleType) {
      case 'cartOverlay':
        return css`
          font-size: 14px;
          line-height: 1.14;
          text-transform: capitalize;
        `;
      default:
        return css`
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 700;
          line-height: 1;
          text-transform: uppercase;
        `;
    }
  }}
`;

export const OptionBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ type, pageStyleType }) =>
    type === 'text' && pageStyleType !== 'cartOverlay' ? `12px` : '8px'};

  margin-bottom: ${({ pageStyleType }) =>
    pageStyleType === 'cartOverlay' ? `8px` : `16px`};
`;

export const OptionBtn = styled.button`
  cursor: pointer;
`;

export const OptionSwatchBtn = styled(OptionBtn)`
  width: 35px;
  height: 35px;

  border: 1px solid #fff;
  background-color: ${props => props.bgColor};

  ${({ active }) =>
    active &&
    css`
      outline: 1px solid #5ece7b;
    `}
`;

export const OptionTextBtn = styled(OptionBtn)`
  /* min-width: 63px;
  max-width: 80px;
  height: 45px; */

  /* background-color: transparent;
  border: 1px solid #1d1f22;
  color: #1d1f22;

  font-family: 'Source Sans Pro', sans-serif; */
  /* font-size: 16px;
  line-height: 1.12;
  letter-spacing: 0.05em; */

  background-color: transparent;
  border: 1px solid #1d1f22;

  color: #1d1f22;

  font-family: 'Source Sans Pro', sans-serif;

  ${({ active }) =>
    active &&
    css`
      background-color: #1d1f22;
      color: #ffffff;
    `}

  ${({ pageStyleType }) => {
    switch (pageStyleType) {
      case 'cartOverlay':
        return css`
          padding: 2px 2px;

          min-width: 24px;
          min-height: 24px;

          font-size: 14px;
        `;
      default:
        return css`
          padding: 13px 22px;

          max-width: 63px;
          max-height: 45px;

          font-size: 16px;
          line-height: 1.12;
          letter-spacing: 0.05em;
        `;
    }
  }}
`;
