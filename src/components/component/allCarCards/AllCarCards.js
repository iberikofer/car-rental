import { useState } from 'react';
import PropTypes from 'prop-types';
import Description from '../description/Description';
import { CardImg, Card, CarsList, Decoration } from './AllCarCards.styled';
import { FavouriteBtn } from 'components/component/favouriteBtn/FavouriteBtn';
import { ModalCard } from '../modalCard/ModalCard';
import auto from '../../public/error-auto.jpg';

export default function AllCarCard({
  carsList,
  favouriteList,
  addFavouriteList,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
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
                onError={e => {
                  e.target.src = auto;
                  e.preventDefault();
                }}
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
}

AllCarCard.propTypes = {
  carsList: PropTypes.array.isRequired,
  favouriteList: PropTypes.array,
  addFavouriteList: PropTypes.func.isRequired,
};

