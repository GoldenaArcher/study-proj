import React from 'react';
import { courseSubNavList } from '../../../../../constants/home';

const CourseSubNav = () => {
  return (
    <div className="course-sub-nav">
      <ul>
        {courseSubNavList.map((val) => (
          <li className="relative" key={val}>
            <a href='.#'>{val}</a>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default CourseSubNav;
