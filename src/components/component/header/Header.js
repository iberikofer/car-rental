import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './Header.styled';

export default function Header() {
	const handleActiveStyle = ({ isActive }) => {
		return { color: isActive ? '#ff0000' : '#3470ff' };
	};
	return (
		<div>
			<Navigation>
				<NavLink to="/" style={handleActiveStyle}>
					Home
				</NavLink>
				<NavLink to="/catalog" style={handleActiveStyle}>
					Catalog
				</NavLink>
				<NavLink to="/favourite" style={handleActiveStyle}>
					Favorite
				</NavLink>
			</Navigation>
			<Outlet></Outlet>
		</div>
	);
}
