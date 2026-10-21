import { useState } from 'react';
import type { FC, SyntheticEvent } from 'react';
import type { Car } from '../../../types/car';
import Description from '../description/Description';
import { CardImg, Card, CarsList, Decoration } from './AllCarCards.styled';
import { FavouriteBtn } from 'components/component/favouriteBtn/FavouriteBtn';
import { ModalCard } from '../modalCard/ModalCard';
import auto from '../../public/error-auto.jpg';

interface AllCarCardsProps {
  carsList: Car[];
  favouriteList?: Car[];
  addFavouriteList: (cars: Car[]) => void;
}

export const AllCarCards: FC<AllCarCardsProps> = ({
  carsList,
  favouriteList = [],
  addFavouriteList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = auto;
    e.preventDefault();
  };

  return (
    <CarsList>
      {carsList.map(car => (
        <Card key={car.id}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Decoration>
              <CardImg
                src={car.img || auto}
                alt={`${car.make} ${car.model}`}
                onError={handleImgError}
              />
              <Description
                car={car}
                setSelectedCar={setSelectedCar}
                setIsModalOpen={setIsModalOpen}
              />
            </Decoration>
          </div>
          <FavouriteBtn
            car={car}
            favouriteList={favouriteList}
            addFavouriteList={addFavouriteList}
          />
        </Card>
      ))}
      {isModalOpen && selectedCar && (
        <ModalCard
          selectedCar={selectedCar}
          setIsModalOpen={setIsModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </CarsList>
  );
};

export default AllCarCards;
