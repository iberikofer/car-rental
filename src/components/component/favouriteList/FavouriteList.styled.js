import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #111827;
  gap: 32px;
  padding-top: 30px;
  flex-wrap: wrap;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 12px;
  width: 100%;
  max-width: 380px;
  padding: 0;
  margin: 0;
`;

export const Car = styled.div`
  padding: 14px 20px;
  background: #ffffff;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: #1f2937;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #ffffff;
    border-color: #ff4d4d;
    transform: translateX(4px);
    box-shadow: 0 4px 14px rgba(255, 77, 77, 0.15);
  }
`;

export const Card = styled.div`
  list-style: none;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  max-width: 500px;
  width: 100%;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const CardDecoration = styled.div`
  padding: 24px;
  color: #121417;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 240px;
  display: block;
  border-radius: 12px;
  margin: 0 auto;
`;

export const DescriptionPart = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  padding-top: 8px;
  margin: 0;
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
  padding: 10px 0;
`;

export const Decoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  padding-top: 16px;
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
  display: block;
  width: auto;
  max-width: 200px;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 12px;
  margin-top: 20px;
  text-align: center;
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
  padding: 6px 12px;
  background-color: #f9f9f9;
  border: 1px solid #eef0f4;
  border-radius: 20px;
  font-size: 12px;
  color: #363535;
`;


