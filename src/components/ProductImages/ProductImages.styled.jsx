import styled from 'styled-components';

export const ImagesList = styled.div`
  display: flex;
  gap: 40px;
`;

export const SideImagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-height: 520px;
  overflow-y: auto;

  padding: 1px;

  list-style-type: none;

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

export const SideImage = styled.img`
  object-fit: scale-down;
  width: 80px;

  cursor: pointer;
`;

export const ActiveImageWrapper = styled.div``;

export const ActiveImage = styled.img`
  max-width: 603px;

  object-fit: scale-down;
`;
