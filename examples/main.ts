/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-06 10:53:42
 */
import { createApp } from 'vue';
import App from './app.vue';
import '@tass-ui/theme-chalk/src/index.scss';
import TassUI from '@tass-ui/components';
const app = createApp(App);

app.use(TassUI);

app.mount('#app');
