import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Car } from '../../../types/car';
import { FavouriteList } from 'components/component/favouriteList/FavouriteList';
import { Decoration, Title, EmptyContainer } from './Favourite.styled';

export const Favourite: FC = () => {
  const [favouriteList, setFavouriteList] = useState<Car[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('favourite');
      if (saved) {
        const getFromStorage = JSON.parse(saved);
        if (Array.isArray(getFromStorage)) {
          setFavouriteList(getFromStorage);
        }
      }
    } catch (e) {
      console.error('Error loading favourites from localStorage:', e);
    }
  }, []);

  return (
    <Decoration>
      {favouriteList.length > 0 ? (
        <div style={{ maxWidth: '1184px', margin: '0 auto', padding: '0 20px' }}>
          <Title style={{ textAlign: 'center', margin: 0 }}>
            Your Favorite Cars
          </Title>
          <FavouriteList
            favouriteList={favouriteList}
            setFavouriteList={setFavouriteList}
          />
        </div>
      ) : (
        <EmptyContainer>
          <h2>Your list of favorite cars is empty</h2>
          <p>Explore our wide selection of cars and add your favorites to view them here.</p>
          <Link to="/catalog">Go to Catalog</Link>
        </EmptyContainer>
      )}
    </Decoration>
  );
};

export default Favourite;
