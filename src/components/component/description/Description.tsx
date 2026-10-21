import type { FC } from 'react';
import type { Car } from '../../../types/car';
import {
  Prise,
  Descriptions,
  Decoration,
  CarModel,
  LearnMoreBtn,
  TagList,
  TagItem,
} from './Description.styled';

interface DescriptionProps {
  car: Car;
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedCar: (car: Car | null) => void;
}

export const Description: FC<DescriptionProps> = ({
  car,
  setIsModalOpen,
  setSelectedCar,
}) => {
  const addressArray = car?.address ? car.address.split(', ') : [];
  const city = addressArray[1] || '';
  const country = addressArray[2] || '';
  const rentalCompany = car?.rentalCompany || '';
  const type = car?.type || '';
  const model = car?.model || '';
  const id = car?.id || '';
  const functionality = car?.functionalities?.[0] || '';

  const openModal = () => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const line1Items = [city, country, rentalCompany].filter(Boolean);
  const line2Items = [type, model, id, functionality].filter(Boolean);

  return (
    <>
      <Descriptions>
        <Decoration>
          <p>
            {car?.make} <CarModel>{car?.model}</CarModel>, {car?.year}
          </p>
          <Prise>{car?.rentalPrice}</Prise>
        </Decoration>

        <TagList>
          {line1Items.map((item, index) => (
            <TagItem key={index}>{item}</TagItem>
          ))}
        </TagList>

        <TagList>
          {line2Items.map((item, index) => (
            <TagItem key={index}>{item}</TagItem>
          ))}
        </TagList>
      </Descriptions>
      <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
    </>
  );
};

export default Description;
