const isProd = process.env.NODE_ENV === 'production';
export default {
  base: isProd ? '/tass-ui/' : '',
  title: '一个Vue3 UI框架',
  titleTemplate: ':title - Tass UI',
  description: '一个Vue3 UI框架',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: './images/logo_icon.png' }]],
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
          text: '基础',
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
            { text: 'Collapse 折叠面板 ', link: '/components/collapse/' },
            { text: 'DatePicker 日期选择器', link: '/components/datepicker/' },
            { text: 'Upload 上传', link: '/components/upload/' }
          ]
        },
        {
          text: '视图',
          items: [
            { text: 'Swiper 轮播', link: '/components/swiper/' },
            { text: 'Progress 进度条', link: '/components/progress/' },
            { text: 'Table 表格', link: '/components/table/' }
          ]
        },
        {
          text: '提示',
          items: [
            { text: 'Alert 警告', link: '/components/alert/' },
            { text: 'Message 消息提示', link: '/components/message/' },
            { text: 'Dialog 对话框', link: '/components/dialog/' }
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
    },
    algolia: {
      appId: '883U6KEOAU',
      apiKey: '49156c3943b71f4167959c3202872067',
      indexName: 'huccctio',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  }
};
