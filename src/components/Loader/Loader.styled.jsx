import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export const LoaderStyled = styled.span`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);

  width: 60px;
  height: 60px;
  border: 5px solid #5ece7b;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
