/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:34:40
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 11:52:44
 */
import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';

const install = function (app: App): void {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default {
  install,
  version,
};
