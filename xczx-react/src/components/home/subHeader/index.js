import React from 'react';

const SubHeader = (props) => {
  const { subHeaderName, midConent, checkMore } = props;

  return (
    <div className="flex space-between">
      {subHeaderName}
      {midConent.map((val) => val)}
      {checkMore}
    </div>
  );
};

export default SubHeader;
