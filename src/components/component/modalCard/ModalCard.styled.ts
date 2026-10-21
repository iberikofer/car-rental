import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalZoomIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -46%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9998;
  animation: ${fadeIn} 0.25s ease-out forwards;
`;

export const Modal = styled.div`
  width: 90%;
  max-width: 541px;
  max-height: 90vh;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 20px;
  padding: 40px 40px 40px 40px;
  background-color: #ffffff;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
  animation: ${modalZoomIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 248px;
  display: block;
  border-radius: 14px;
  margin: 0 auto;
`;

export const Card = styled.div`
  list-style: none;
  p {
    margin: 0;
  }
  border-radius: 14px;
  position: relative;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    transform: rotate(90deg) scale(1.1);
  }
`;

export const DescriptionPart = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  padding-top: 8px;
`;

export const CarModel = styled.span`
  color: #ff4d4d;
  font-weight: 700;
  display: inline;
`;

export const Descriptions = styled.div`
  p {
    margin: 0;
  }
  padding: 10px;
`;

export const Decoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  padding-top: 14px;
  color: #121417;

  p {
    margin: 0;
  }
`;

export const Prise = styled.span`
  list-style: none;
  display: inline;
`;

export const RentalCarBtn = styled.a`
  background: linear-gradient(135deg, #ff4d4d 0%, #dc2626 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 12px 36px;
  border-radius: 12px;
  margin-top: 24px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255, 77, 77, 0.35);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(135deg, #ff6666 0%, #e02424 100%);
    box-shadow: 0 6px 20px rgba(255, 77, 77, 0.5);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BlueColor = styled.span`
  color: #ff4d4d;
  font-weight: 700;
`;

export const ConditionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const Condition = styled.li`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border: 1px solid #eef0f4;
  border-radius: 35px;
  font-size: 12px;
  color: #363535;
  letter-spacing: -0.01em;
`;

