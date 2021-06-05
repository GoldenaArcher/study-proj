import React from 'react';
import ld from '../../../asset/img/header/ld.png';
import profile from '../../../asset/img/header/pic.png';

const UserProfile = () => {
  return (
    <div className="user flex flex-center">
      <div className="user-center">个人中心</div>
      <div className="alert">
        <a href="./">
          <img src={ld} alt="" />{' '}
        </a>
      </div>
      <div className="user-profile">
        <img src={profile} alt="user-profile" />
      </div>
      <div className="username">qq-leishui</div>
    </div>
  );
};

export default UserProfile;
