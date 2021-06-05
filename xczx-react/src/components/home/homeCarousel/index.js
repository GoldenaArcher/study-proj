import React from 'react';
import banner from '../../../asset/img/home/banner.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CourseContent from './courseContent';

const HomeBanner = () => {
  // 将作为 props 传给 Carousel 这个组件
  const settings = {
    showStatus: false,
    showArrows: false,
    autoPlay: true,
    showThumbs: false,
    infiniteLoop: true,
  };

  // 手动生成一个由图片组成的数组
  const getBanners = () => {
    const banners = [];
    for (let i = 0; i < 5; i++) {
      banners.push(
        <div key={i}>
          <img src={banner} alt="home-banners" />
        </div>
      );
    }
    return banners;
  };

  return (
    <div className="homepage-banner">
      <div className="container">
        <Carousel {...settings}>{getBanners()}</Carousel>
        <CourseContent />
      </div>
    </div>
  );
};

export default HomeBanner;
