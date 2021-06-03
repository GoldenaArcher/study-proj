import React from 'react';
import Footer from '../footer';
import Header from '../header/index';

export default function HeaderFooterHOC(WrappedComp) {
  class HOC extends React.Component {
    render() {
      return (
        <>
          <Header />
          <WrappedComp />
          <Footer />
        </>
      );
    }
  }
  return HOC;
}
