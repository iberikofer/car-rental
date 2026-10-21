import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Decoration = styled.div`
  min-height: calc(100vh - 65px);
  background-color: #f8f9fc;
  color: #111827;
  padding-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  padding-top: 36px;
  padding-bottom: 12px;
  color: #111827;
  letter-spacing: -0.02em;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 24px;
  animation: ${fadeIn} 0.6s ease-out forwards;

  h2 {
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 700;
    margin-bottom: 12px;
    color: #111827;
  }

  p {
    font-size: 16px;
    color: #6b7280;
    max-width: 400px;
    margin-bottom: 28px;
    line-height: 1.5;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #ff4d4d 0%, #dc2626 100%);
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(255, 77, 77, 0.35);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: linear-gradient(135deg, #ff6666 0%, #e02424 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 77, 77, 0.5);
    }
  }
`;


