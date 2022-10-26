import styled from 'styled-components';

export const CurrencyListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 14px;
  bottom: 0;

  opacity: 0;
  visibility: none;
  display: none;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  pointer-events: none;
  transition: transform 300ms linear, visibility 150ms linear,
    opacity 150ms linear;
  user-select: none;

  ${props =>
    props.active &&
    `
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    `}
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
