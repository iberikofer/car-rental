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
		<Decoration style={{}}>
			<Container>
				<TitleDecoration>
					<Title>
						Welcome to our car rent service!
					</Title>
				</TitleDecoration>
				<Features>
					<p style={{ textAlign: 'center' }}>
						You need to rent somenthing faster that a bike or scooter?
					</p>
					<p style={{ lineHeight: '1.5', textAlign: 'center' }}>
						In our catalog you will find both budget options for everyday travel
						<br></br>and exclusive cars that will surprise everyone around you.
					</p>
					<Buttons>
						<a href="tel:+380730000000">Rental car</a>
						<Link to="/catalog">To catalog</Link>
					</Buttons>
				</Features>
			</Container>
		</Decoration>
	);
}
