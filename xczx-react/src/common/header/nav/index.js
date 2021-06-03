import React from 'react';
import NAV_LINKS from '../../../constants/navLinks';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="flex">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
