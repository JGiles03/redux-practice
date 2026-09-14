import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Header() {
  return (
    <main>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/points">Points</NavLink>
          <NavLink to="/letter">Letter</NavLink>
          <NavLink to="/sortingHat">Sorting Hat</NavLink>
        </nav>
      </header>
      <Outlet />
    </main>
  )
};

export default Header;