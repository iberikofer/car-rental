import styled from '@emotion/styled';

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 274px;
  display: block;
  border-radius: 14px;
  height: 268px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Card = styled.li`
  background-color: #ffffff;
  margin-bottom: 21px;
  list-style: none;
  min-height: 426px;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 274px;
  width: 100%;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 28px rgba(52, 112, 255, 0.14);

    img {
      transform: scale(1.04);
    }
  }
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 29px;
  padding-left: 0;
  justify-content: center;
  margin-top: 24px;
`;

export const Decoration = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

