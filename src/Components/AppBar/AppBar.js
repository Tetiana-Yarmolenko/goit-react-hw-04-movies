import React from 'react';
import { NavLink,} from 'react-router-dom';
import routes from '../../routes';
import s from "./AppBar.module.css"

const AppBar = () => {
  return (
    <nav className={s.nav}>
    <NavLink
      exact
      to={routes.home}
      className={s.link}
      activeClassName={s.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to={routes.movies}
      className={s.link}
      activeClassName={s.activeLink}
    >
      Movies
    </NavLink>
  </nav>
  )
}
 

export default AppBar