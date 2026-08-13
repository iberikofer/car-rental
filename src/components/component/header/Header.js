import { NavLink, Outlet } from 'react-router-dom';
import { HeaderWrapper, Navigation } from './Header.styled';

export default function Header() {
	return (
		<div>
			<HeaderWrapper>
				<Navigation>
					<NavLink to="/" end>
						Home
					</NavLink>
					<NavLink to="/catalog">
						Catalog
					</NavLink>
					<NavLink to="/favourite">
						Favorite
					</NavLink>
				</Navigation>
			</HeaderWrapper>
			<Outlet />
		</div>
	);
}

