import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Decoration = styled.div`
  min-height: calc(100vh - 65px);
  background: radial-gradient(circle at 50% 15%, #edf3ff 0%, #f7f9fd 50%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 77, 77, 0.1) 0%, rgba(255, 77, 77, 0) 70%);
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  padding: 40px 24px;
  margin: 0 auto;
  color: #111827;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const TitleDecoration = styled.div`
  display: flex;
  position: relative;
  animation: ${fadeInDown} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const Title = styled.h1`
  font-size: clamp(32px, 5vw, 54px);
  font-weight: 800;
  margin: 0 0 16px 0;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #111827 20%, #ff4d4d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Features = styled.div`
  display: flex;
  max-width: 720px;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.15s;
  animation-fill-mode: both;

  p {
    font-size: clamp(16px, 2.5vw, 20px);
    color: #4b5563;
    margin: 8px 0;
    line-height: 1.6;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 36px;
  width: 100%;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    padding: 14px 28px;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Primary Button (Catalog) */
  a:last-of-type {
    background: linear-gradient(135deg, #ff4d4d 0%, #dc2626 100%);
    color: #ffffff;
    box-shadow: 0 4px 18px rgba(255, 77, 77, 0.35);

    &:hover {
      background: linear-gradient(135deg, #ff6666 0%, #e02424 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 77, 77, 0.5);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Secondary Button (Call) */
  a:first-of-type {
    background-color: #ffffff;
    color: #1f2937;
    border: 1.5px solid #e5e7eb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);

    &:hover {
      border-color: #ff4d4d;
      color: #ff4d4d;
      background-color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(255, 77, 77, 0.15);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;


