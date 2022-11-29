import styled from 'styled-components';

export const CartOverlayBackdrop = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: rgba(57, 55, 72, 0.22);
`;

export const CartOverlayWrapper = styled.div`
  position: fixed;
  right: calc(5% + ((100% - 1440px) / 2));
  top: 80px;

  padding: 32px 16px;

  background-color: #fff;

  max-width: 324px;
`;

export const CartOverlayTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 16px;

  font-weight: 700;
`;

export const CartOverlayTitleSpan = styled.span`
  font-weight: 500;
`;

export const ProductList = styled.ul`
  margin-bottom: 60px;
  padding: 2px 0px 2px 2px;

  max-height: 320px;

  list-style-type: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;

    /* Handle on hover */
    &:hover {
      background: #555;
    }
  }
`;

export const TotalCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;

  font-size: 16px;
`;

export const TotalCountP = styled.p`
  font-weight: ${props => props.fw};
`;

export const CartOverlayLinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  list-style-type: none;
`;

export const CartOverlayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  width: 140px;
  height: 43px;

  background-color: #ffffff;
  border: 1px solid #1d1f22;
  color: #1d1f22;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  text-decoration: none;

  transition: background-color 200ms linear, color 200ms linear,
    border 200ms linear;
  cursor: pointer;

  &:hover {
    background-color: #5ece7b;
    color: #fff;
    border: none;
  }
`;

export const CartOverlayLink = styled(CartOverlayBtn)``;
