export default {
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Tass UI',
  description: '一个Vue3 UI框架',
  themeConfig: {
    logo: '/logo-horizontal.png',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/huccct/tass-ui' }],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基本',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
            { text: 'Grid 栅格', link: '/components/grid/' },
            { text: 'Icon 图标', link: '/components/icon/' }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Components Team'
    }
  }
};
