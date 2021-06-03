import React from 'react';
import './header.css';

import Logo from '../logo';
import Nav from './nav';
import SearchBar from './searchBar';
import UserProvile from './userProfile';

const index = () => {
  return (
    <header className="header flex flex-center">
      <Logo />
      <Nav />
      <SearchBar />
      <UserProvile />
    </header>
  );
};

export default index;
