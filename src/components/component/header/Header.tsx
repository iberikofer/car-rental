import type { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderWrapper, Navigation } from './Header.styled';

export const Header: FC = () => {
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
};

export default Header;
