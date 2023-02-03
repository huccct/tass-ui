export default {
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Echo Ui',
  description: '一个Vue3 UI框架',
  themeConfig: {
    logo: '/public/images/logo.svg',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/configs' },
      { text: '资源', link: 'https://github.com/...' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Components Team'
    }
  }
};
