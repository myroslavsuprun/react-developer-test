import styled, { css } from 'styled-components';

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
  gap: ${({ type }) => (type === 'text' ? `12px` : '8px')};

  margin-bottom: ${({ marginB }) => `${marginB}px`};
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
  min-width: 63px;
  max-width: 80px;
  height: 45px;

  background-color: transparent;
  border: 1px solid #1d1f22;
  color: #1d1f22;

  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.12;
  letter-spacing: 0.05em;

  ${({ active }) =>
    active &&
    css`
      background-color: #1d1f22;
      color: #ffffff;
    `}
`;
