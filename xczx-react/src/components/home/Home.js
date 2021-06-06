import React from 'react';
import HomeBanner from './homeCarousel';
import './Home.css';
import FieldSuggestion from './fieldSuggestion/fieldSuggestion';
import CourseSuggestion from './CourseSuggestion';

const Home = () => {
  return (
    <div className="homepage relative">
      <HomeBanner />
      <div className="container">
        <FieldSuggestion />
        <div className="homepage-main">
          <CourseSuggestion />
        </div>
      </div>
    </div>
  );
};

export default Home;
