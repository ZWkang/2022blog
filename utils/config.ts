export type routerModes = 'id' | 'name' | 'date';

export type configType = {
  routerMode: routerModes;
};

const config: configType = {
  routerMode: 'id', // 路由模式
};

export const navs = [
  {
    name: 'Home',
    description: '这是首页',
    path: '/home',
  },
  {
    name: 'About',
    description: '这是关于我',
    path: '/about',
  },
  {
    name: 'Rss',
    description: '订阅Rss',
    path: '/rss.xml',
  },
];

export default config;
