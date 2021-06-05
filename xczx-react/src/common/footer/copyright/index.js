import React from 'react';
import Logo from '../../logo';

const Copyright = () => {
  return (
    <div className="copyright">
      <Logo />
      <p>
        学成在线致力于普及中国最好的教育。它与中国一流大学和机构合作，提供在线课程。
        <br />© 2017年 XTGG Inc. 保留所有权利。-沪ICP备11111111号
      </p>
      <button type="button" className="download-app">
        下载APP
      </button>
    </div>
  );
};

export default Copyright;
