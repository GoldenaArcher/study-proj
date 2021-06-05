import React from 'react';
import HomeBanner from './homeCarousel';
import './Home.css';
import FieldSuggestion from './fieldSuggestion/fieldSuggestion';
import SubHeader from './subHeader';

const Home = () => {
  return (
    <div className="homepage relative">
      <HomeBanner />
      <div className="container">
        <FieldSuggestion />
        <SubHeader
          subHeaderName="编程入门"
          midConent={[1, 2, 3]}
          checkMore='true'
        />
      </div>
    </div>
  );
};

export default Home;
