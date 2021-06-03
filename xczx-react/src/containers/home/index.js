import React from 'react';
import HeaderFooterHOC from '../../common/renderWithHeaderFooter';
import Home from '../../components/home/Home';

const HomeIndex = () => {
  return <div><Home /></div>;
};

export default HeaderFooterHOC(HomeIndex);
