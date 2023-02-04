export default {
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Echo Ui',
  description: '一个Vue3 UI框架',
  themeConfig: {
    logo: '/public/logo.png',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide/install.md' },
      { text: '组件', link: '/examples/app.vue' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/install.md'
            },
            {
              text: '快速开始',
              link: '/guide/quickstart'
            }
          ]
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx'
            }
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
