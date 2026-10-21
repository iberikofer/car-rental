import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import axios from 'axios';
import type { Car } from '../../../types/car';
import AllCarCards from 'components/component/allCarCards/AllCarCards';
import Loader from 'components/component/Loader/Loader';
import { LoadMore } from 'components/component/loadMore/LoadMore';

const API_URL = 'https://651fe1f4906e276284c3ac51.mockapi.io/api/cars';

export const Cars: FC = () => {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [allCarsList, setAllCarsList] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [favouriteList, setFavouriteList] = useState<Car[]>([]);
  const [page, setPage] = useState<number>(1);

  const perPage = useCallback((pageNumber: number, list: Car[]) => {
    if (Array.isArray(list)) {
      setCarsList(list.slice(0, pageNumber * 8));
    }
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('favourite');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setFavouriteList(parsed);
        }
      }
    } catch (e) {
      console.error('Error parsing favourites from localStorage:', e);
    }

    async function fetchData() {
      setIsLoading(true);
      setFetchError(null);
      try {
        const response = await axios.get<Car[]>(API_URL);
        const cars = Array.isArray(response.data) ? response.data : [];
        setAllCarsList(cars);
        perPage(1, cars);
      } catch (error) {
        console.error('Failed to load cars from API:', error);
        setFetchError('Failed to load vehicles. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [perPage]);

  const addFavouriteList = (array: Car[]) => {
    setFavouriteList(array);
  };

  const nextPage = () => {
    const next = page + 1;
    setPage(next);
    perPage(next, allCarsList);
  };

  return (
    <div style={{ maxWidth: '1184px', margin: '0 auto', padding: '0 20px', minHeight: 'calc(100vh - 65px)' }}>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: 800,
          margin: '36px 0 24px 0',
          color: '#111827',
          letterSpacing: '-0.02em',
        }}
      >
        Select Your Dream Car
      </h2>
      {isLoading && <Loader />}
      {fetchError && (
        <div style={{ textAlign: 'center', color: '#ef4444', margin: '30px 0', fontSize: '16px', fontWeight: 600 }}>
          {fetchError}
        </div>
      )}
      {!isLoading && !fetchError && (
        <AllCarCards
          favouriteList={favouriteList}
          addFavouriteList={addFavouriteList}
          carsList={carsList}
        />
      )}
      {allCarsList.length > page * 8 && !isLoading && (
        <LoadMore nextPage={nextPage} />
      )}
    </div>
  );
};

export default Cars;
