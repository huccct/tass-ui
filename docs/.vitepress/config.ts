export default {
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Tass UI',
  description: '一个Vue3 UI框架',
  lastUpdated: true,
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
        },
        {
          text: '导航',
          items: [
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown/' },
            { text: 'Pagination 分页', link: '/components/pagination/' }
          ]
        },
        {
          text: '表单',
          items: [
            { text: 'Checkbox 复选框', link: '/components/checkbox/' },
            { text: 'Input 输入框', link: '/components/input/' },
            { text: 'Switch 开关', link: '/components/switch/' },
            { text: 'Slider 滑块', link: '/components/slider/' },
            { text: 'TimePicker 时间选择器', link: '/components/timepicker/' }
          ]
        },
        {
          text: '视图',
          items: [
            { text: 'Swiper 轮播', link: '/components/swiper/' },
            { text: 'Progress 进度条', link: '/components/progress/' }
          ]
        },
        {
          text: '提示',
          items: [
            { text: 'Alert 警告', link: '/components/alert/' },
            { text: 'Message 消息提示', link: '/components/message/' }
          ]
        },
        {
          text: '其他',
          items: [{ text: 'Backtop 回到顶部', link: '/components/backtop/' }]
        }
      ]
    },
    lastUpdatedText: '最近更新时间',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Components Team'
    }
  }
};
