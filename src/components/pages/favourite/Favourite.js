import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteList } from 'components/component/favouriteList/FavouriteList';
import { Decoration, Title, EmptyContainer } from './Favourite.styled';

export default function Favourite() {
	const [favouriteList, setFavouriteList] = useState([]);
	useEffect(() => {
		const getFromStorage = JSON.parse(localStorage.getItem('favourite'));
		if (getFromStorage) {
			setFavouriteList(getFromStorage);
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
}

