import { useState, useEffect } from 'react';
import type { FC } from 'react';
import type { Car } from '../../../types/car';
import { FavouriteBtnEl } from './FavouriteBtn.styled';
import FavoriteIcon from '../../public/FavoriteIcon.svg';
import FavoriteIconFilled from '../../public/heart.svg';

interface FavouriteBtnProps {
  car: Car;
  favouriteList?: Car[];
  addFavouriteList: (cars: Car[]) => void;
}

export const FavouriteBtn: FC<FavouriteBtnProps> = ({
  car,
  favouriteList = [],
  addFavouriteList,
}) => {
  const [inFavouriteList, setInFavouriteList] = useState(false);

  useEffect(() => {
    if (favouriteList) {
      setInFavouriteList(favouriteList.some(item => item.id === car.id));
    }
  }, [car, favouriteList]);

  const addToFavourite = (targetCar: Car) => {
    const newArray = favouriteList ? [...favouriteList, targetCar] : [targetCar];
    localStorage.setItem('favourite', JSON.stringify(newArray));
    addFavouriteList(newArray);
  };

  const removeFromFavourite = (targetCar: Car) => {
    const newArray = favouriteList.filter(item => item.id !== targetCar.id);
    localStorage.setItem('favourite', JSON.stringify(newArray));
    addFavouriteList(newArray);
  };

  return (
    <FavouriteBtnEl
      onClick={() => {
        if (inFavouriteList) {
          removeFromFavourite(car);
        } else {
          addToFavourite(car);
        }
      }}
    >
      {inFavouriteList ? (
        <img
          width="18"
          height="18"
          src={FavoriteIconFilled}
          alt="filled favourite icons"
        />
      ) : (
        <img
          width="18"
          height="18"
          src={FavoriteIcon}
          alt="empty favourite icons"
        />
      )}
    </FavouriteBtnEl>
  );
};

export default FavouriteBtn;
