import styled, { css } from 'styled-components';

export const CurrencyListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 14px;
  bottom: -200px;
  display: block;

  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  transition: transform 300ms linear, visibility 150ms linear,
    opacity 150ms linear;
  user-select: none;

  /* ${props =>
    props.active
      ? css`
          visibility: visible;
          pointer-events: all;
          opacity: 1;
          display: block;
        `
      : css`
          visibility: none;
          pointer-events: none;
          opacity: 0;
          display: none;
        `} */
`;

export const CurrencySpan = styled.span`
  font-size: 28px;
  margin-right: 4px;

  cursor: pointer;
`;

export const CurrencyList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
`;

export const CurrencyItem = styled.li`
  padding: 16px 20px;

  min-width: 114px;

  background-color: #fff;

  transition: background-color 300ms linear;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
