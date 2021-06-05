import React from 'react';
import NAV_LINKS from '../../../constants/navLinks';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as routePaths from '../../../constants/routerPaths';

const Nav = () => {
  const location = useLocation();

  const isActiveNav = (pathname, url) => {
    // 当path正好与url相等
    // 因为目前只考虑 courses/:id 的特殊项，所以写死了这一个判断
    let isActive =
      pathname === url ||
      (pathname.includes(routePaths.COURSES) &&
        url.includes(routePaths.COURSES));
    return isActive;
  };

  return (
    <nav className="nav">
      <ul className="flex">
        {NAV_LINKS.map((link) => {
          const { url } = link;
          return (
            <li
              key={link.name}
              // 如果当前url等于nav中的url，则证明这是当前页面
              className={
                isActiveNav(location.pathname, url) ? 'active-nav' : null
              }
            >
              <Link to={url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
