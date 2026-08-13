import styled from '@emotion/styled';

export const DescriptionPart = styled.p`
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.4;
  font-size: 11.5px;
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  margin: 2px 0 0 0 !important;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-top: 4px;
  row-gap: 3px;
`;

export const TagItem = styled.span`
  font-size: 11.5px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.35;
  white-space: normal;
  word-break: break-word;

  &:not(:last-child)::after {
    content: '|';
    display: inline-block;
    margin: 0 6px;
    color: rgba(18, 20, 23, 0.2);
    font-weight: 300;
  }
`;

export const CarModel = styled.span`
  color: #3470ff;
  font-weight: 600;
  display: inline;
`;

export const Descriptions = styled.div`
  p {
    margin: 0;
  }
  padding: 14px 12px 0 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Decoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
  color: #121417;
`;

export const Prise = styled.span`
  list-style: none;
  display: inline;
  font-weight: 600;
  color: #121417;
`;

export const LearnMoreBtn = styled.button`
  background: linear-gradient(135deg, #3470ff 0%, #0b44cd 100%);
  width: calc(100% - 24px);
  border: none;
  display: block;
  color: #ffffff;
  padding: 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  margin: 14px 12px 12px 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(52, 112, 255, 0.25);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(135deg, #4780ff 0%, #1551dc 100%);
    box-shadow: 0 6px 18px rgba(52, 112, 255, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;


