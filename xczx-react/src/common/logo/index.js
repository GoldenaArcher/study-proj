import pic from '../../asset/img/header/logo.png';
import React from 'react';
import './logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <img src={pic} alt="logo" />
    </div>
  );
};

export default Logo;
