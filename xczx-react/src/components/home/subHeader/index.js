import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubHeader = (props) => {
  const { subHeaderName, midConent, checkMore } = props;

  const [activeTitle, setTitle] = useState(midConent[0].title);

  function clickHandler(e, val) {
    e.preventDefault();
    setTitle(val);
  }

  const getMidContent = () => {
    return (
      <ul className="flex">
        {midConent.map((val) => {
          const { title } = val;
          return (
            <li key={title}>
              <a
                href={val.url}
                onClick={(e) => clickHandler(e, title)}
                className={activeTitle === title ? 'selected' : null}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="sub-header flex space-between flex-center">
      <h3>{subHeaderName}</h3>
      {getMidContent()}
      <div>
        <a href={checkMore.url}>{checkMore.title}</a>
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  subHeaderName: PropTypes.string.isRequired,
  midConent: PropTypes.arrayOf(Object), // array of object of name and url
  checkMore: PropTypes.object, // object of name and url
};

export default SubHeader;
