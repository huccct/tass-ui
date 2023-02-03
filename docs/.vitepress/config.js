export default {
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Echo Ui',
  description: '一个Vue3 UI框架',
  themeConfig: {
    logo: '/public/images/logo.svg',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide/install.md' },
      { text: '组件', link: '/configs' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '安装', link: '/introduction' },
          { text: '快速开始', link: '/getting-started' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Components Team'
    }
  }
};
