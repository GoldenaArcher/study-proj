import * as routePaths from './routerPaths';

const FOOTER_LINKS = {
  about: {
    key: '关于学成网',
    options: [
      {
        url: routePaths.INDEX,
        name: '关于',
      },
      {
        url: routePaths.INDEX,
        name: '团队管理',
      },
      {
        url: routePaths.INDEX,
        name: '工作机会',
      },
      {
        url: routePaths.INDEX,
        name: '客户服务',
      },
      {
        url: routePaths.INDEX,
        name: '帮助',
      },
    ],
  },
  userGuide: {
    key: '新手指南',
    options: [
      {
        url: routePaths.INDEX,
        name: '如何注册',
      },
      {
        url: routePaths.INDEX,
        name: '如何选课',
      },
      {
        url: routePaths.INDEX,
        name: '如何拿到毕业证',
      },
      {
        url: routePaths.INDEX,
        name: '学分是什么',
      },
      {
        url: routePaths.INDEX,
        name: '考试未通过怎么办',
      },
    ],
  },
  parterner: {
    key: '合作伙伴',
    options: [
      {
        url: routePaths.INDEX,
        name: '合作机构',
      },
      {
        url: routePaths.INDEX,
        name: '合作导师',
      },
    ],
  },
};

export default FOOTER_LINKS;
