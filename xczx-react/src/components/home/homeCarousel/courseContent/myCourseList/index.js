import React from 'react';
import { courseSchedule } from '../../../../../constants/home';

const MyCourseList = () => {
  const getCourses = () => {
    return courseSchedule.map((course, index) => (
      <dd key={course.name}>
        <a href=".#" className={index === 2 ? 'active' : null}>
          <h4>继续学习 {course.name}</h4>
          <p>正在学习-{course.progress}</p>
        </a>
      </dd>
    ));
  };
  return (
    <div className="my-course-list">
      <dl className="my-course-list-details">
        <dt>我的课程表</dt>
        {getCourses()}
      </dl>
      <button type="button" className="my-course-list-button">
        全部课程
      </button>
    </div>
  );
};

export default MyCourseList;
