import React from 'react';
import { Link } from 'react-router-dom';
import {
	Title,
	TitleDecoration,
	Container,
	Decoration,
	Features,
	Buttons,
} from './Home.styled';

export default function Home() {
	return (
		<Decoration>
			<Container>
				<TitleDecoration>
					<Title>Welcome to our car rent service!</Title>
				</TitleDecoration>
				<Features>
					<p>Need to rent something faster than a bike or scooter?</p>
					<p>
						In our catalog you will find both budget options for everyday travel
						<br />
						and exclusive cars that will surprise everyone around you.
					</p>
					<Buttons>
						<a href="tel:+380730000000">Call Us</a>
						<Link to="/catalog">Explore Catalog</Link>
					</Buttons>
				</Features>
			</Container>
		</Decoration>
	);
}

