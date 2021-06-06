import React from 'react';
import './courseItem.css';
import hotLabel from '../../asset/img/courses/hot.png';
import newLabel from '../../asset/img/courses/new.png';
import { COURSES } from '../../constants/routerPaths';

import { useHistory } from 'react-router-dom';

const getLabelImg = (img, label) => {
  return <img src={img} alt={label} className={label} />;
};

const CourseItem = (props) => {
  const history = useHistory();
  const { peopleStudying, courseLevel, id, title, img, isNew, isHot } = props;

  const redirectToCourseDetail = () => {
    history.push(`${COURSES}/${id}`);
  };

  const isNewCourse = isNew
    ? getLabelImg(newLabel, 'new-course absolute')
    : null;
  const isHotCourse = isHot
    ? getLabelImg(hotLabel, 'hot-course absolute')
    : null;

  return (
    <div className="course-item relative" onClick={redirectToCourseDetail}>
      <img src={img} alt={title} className="course-img" />
      <h4>{title}</h4>
      <p className="course-info">
        <span className="course-level">{courseLevel}</span> · {peopleStudying}
        人正在学习
      </p>
      {isNewCourse}
      {isHotCourse}
    </div>
  );
};

export default CourseItem;
