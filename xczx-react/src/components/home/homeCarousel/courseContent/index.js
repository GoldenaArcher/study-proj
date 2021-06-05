import React from 'react';
import CourseSubNav from './courseSubNav';
import MyCourseList from './myCourseList';

const CourseContent = () => {
  return (
    <div className="absolute course-content flex space-between">
      <CourseSubNav />
      <MyCourseList />
    </div>
  );
};

export default CourseContent;
