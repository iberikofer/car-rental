import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  background-color: transparent;
  min-width: 140px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3470ff;
  padding: 12px 24px;
  border-radius: 12px;
  margin: 40px auto 100px auto;
  border: 1.5px solid #3470ff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(135deg, #3470ff 0%, #0b44cd 100%);
    color: #ffffff;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 112, 255, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

