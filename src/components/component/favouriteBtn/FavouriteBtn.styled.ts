import styled from '@emotion/styled';

export const FavouriteBtnEl = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  img {
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.85);
    transform: scale(1.12);

    img {
      transform: scale(1.15);
    }
  }

  &:active {
    transform: scale(0.92);
  }
`;

