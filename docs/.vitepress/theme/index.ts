// .vitepress/theme/index.js

import DefaultTheme from 'vitepress/theme';
import '@tass-ui/theme-chalk/src/index.scss';
import TassUI from '@tass-ui/components';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(TassUI);
  }
};
