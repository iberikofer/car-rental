import { useState } from 'react';
import type { FC, SyntheticEvent } from 'react';
import type { Car } from '../../../types/car';
import {
  CardImg,
  Container,
  CarsList,
  Card,
  Car as CarItem,
  BlueColor,
  CardDecoration,
  ConditionsList,
  DescriptionPart,
  Decoration,
  Condition,
  CarModel,
  RentalCarBtn,
} from './FavouriteList.styled';
import auto from '../../public/error-auto.jpg';

interface FavouriteListProps {
  favouriteList: Car[];
  setFavouriteList: (cars: Car[]) => void;
}

export const FavouriteList: FC<FavouriteListProps> = ({ favouriteList }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const addressArray = selectedCar?.address ? selectedCar.address.split(', ') : [];
  const conditionsArray = selectedCar?.rentalConditions
    ? selectedCar.rentalConditions.split('\n')
    : [];

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = auto;
    e.preventDefault();
  };

  return (
    <Container>
      <CarsList>
        {favouriteList.map(car => (
          <li key={car.id} style={{ listStyle: 'none' }}>
            <CarItem
              style={{
                borderColor: selectedCar?.id === car.id ? '#ff4d4d' : '',
                backgroundColor: selectedCar?.id === car.id ? 'rgba(255, 77, 77, 0.2)' : '',
              }}
              onClick={() => {
                setSelectedCar(car);
              }}
            >
              <span>
                {car.make} {car.model}, {car.year}
              </span>
              <BlueColor style={{ paddingLeft: '10px' }}>
                {car.rentalPrice}
              </BlueColor>
            </CarItem>
          </li>
        ))}
      </CarsList>
      <div>
        {selectedCar && (
          <Card key={selectedCar.id}>
            <div>
              <CardDecoration style={{ display: 'block' }}>
                <CardImg
                  src={selectedCar.img || auto}
                  alt={`${selectedCar.make} ${selectedCar.model}`}
                  onError={handleImgError}
                />
                <Decoration>
                  <p>
                    {selectedCar.make} <CarModel>{selectedCar.model}</CarModel>,{' '}
                    {selectedCar.year}
                  </p>
                </Decoration>
                <DescriptionPart>
                  {addressArray[1] || ''} | {addressArray[2] || ''} | Id: {selectedCar.id} |{' '}
                  Year: {selectedCar.year} | Type: {selectedCar.type} | Fuel
                  Consumption {selectedCar.fuelConsumption} | Engine Size:{' '}
                  {selectedCar.engineSize}
                </DescriptionPart>
                <p style={{ paddingTop: '14px' }}>
                  {selectedCar.description}
                </p>
                <p style={{ paddingTop: '24px' }}>
                  Accessories and functionalities:
                </p>
                <DescriptionPart>
                  |{' '}
                  {(selectedCar.accessories || []).map(accessor => (
                    <span key={accessor}>{accessor} | </span>
                  ))}
                  <br />|{' '}
                  {(selectedCar.functionalities || []).map(accessor => (
                    <span key={accessor}>{accessor} | </span>
                  ))}
                </DescriptionPart>
                <p style={{ paddingTop: '24px' }}>
                  Rental Conditions:
                </p>
                <ConditionsList>
                  {conditionsArray[0] && (
                    <Condition>
                      {conditionsArray[0].slice(0, conditionsArray[0].length - 2)}
                      <BlueColor>
                        {' '}
                        {conditionsArray[0].slice(
                          conditionsArray[0].length - 2,
                          conditionsArray[0].length
                        )}
                      </BlueColor>
                    </Condition>
                  )}
                  {conditionsArray.slice(1).map(condition => (
                    <Condition key={condition}>{condition}</Condition>
                  ))}

                  {selectedCar.mileage !== undefined && (
                    <Condition>
                      Mileage:
                      <BlueColor>
                        {' '}
                        {typeof selectedCar.mileage === 'number'
                          ? selectedCar.mileage.toLocaleString('en-US')
                          : selectedCar.mileage}
                      </BlueColor>
                    </Condition>
                  )}
                  {selectedCar.rentalPrice && (
                    <Condition>
                      <BlueColor>{selectedCar.rentalPrice}</BlueColor>
                    </Condition>
                  )}
                </ConditionsList>

                <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
              </CardDecoration>
            </div>
          </Card>
        )}
      </div>
    </Container>
  );
};

export default FavouriteList;
