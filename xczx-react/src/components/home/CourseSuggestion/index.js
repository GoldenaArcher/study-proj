import React from 'react';
import SubHeader from '../subHeader';
import { subHeaderOl, checkMore } from '../../../constants/home';
import { courseSuggestion1 } from '../../../constants/courseList';
import CourseItem from '../../../common/courseItem';

// 渲染课程列表，不含其他的内容模块
const CourseSuggestion = (props) => {
  return (
    <div>
      <SubHeader
        subHeaderName="编程入门"
        midConent={subHeaderOl}
        checkMore={checkMore}
      />
      <div className="flex">
        {courseSuggestion1.map((course) => (
          <CourseItem {...course} key={course.id} />
        ))}
      </div>
      <div className="flex">
        {courseSuggestion1.map((course) => (
          <CourseItem {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseSuggestion;
