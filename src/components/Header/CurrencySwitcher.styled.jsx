import styled from 'styled-components';

export const CurrencyListBackdrop = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  width: 100%;
  height: 100%;
`;

export const CurrencyListWrapper = styled.div`
  position: fixed;
  right: 22%;
  top: 84px;
  display: block;
  transform: translateX(50%);

  width: 114px;

  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  transition: transform 300ms linear, visibility 150ms linear,
    opacity 150ms linear;
  user-select: none;
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
