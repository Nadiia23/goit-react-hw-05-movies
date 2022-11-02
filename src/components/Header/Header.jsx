import { NavLink } from "react-router-dom";
import s from './header.module.css';

export const Header = () => {
    return (
        <div className={s.headerWrap}>
    <NavLink to='/' end className={({ isActive }) => (isActive ? s.active : s.navigationLink)}>
        Home
      </NavLink>
      <NavLink to='/movies' end className={({ isActive }) => (isActive ? s.active : s.navigationLink)}>
        Movies
      </NavLink>
        </div>
    )
}

export default Header;