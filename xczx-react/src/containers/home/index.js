import React from 'react';
import HeaderFooterHOC from '../../common/renderWithHeaderFooter';
import Home from '../../components/home/Home';

const HomeIndex = () => {
  return <Home />;
};

export default HeaderFooterHOC(HomeIndex);
