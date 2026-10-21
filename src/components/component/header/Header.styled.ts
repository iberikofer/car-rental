import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
`;

export const Navigation = styled.nav`
  max-width: 1184px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 14px 24px;

  a {
    color: #4b5563;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 20px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &:hover {
      color: #ff4d4d;
      background-color: rgba(255, 77, 77, 0.08);
      transform: translateY(-1px);
    }

    &.active {
      color: #ffffff;
      background: linear-gradient(135deg, #ff4d4d 0%, #dc2626 100%);
      box-shadow: 0 4px 14px rgba(255, 77, 77, 0.35);
    }
  }
`;


