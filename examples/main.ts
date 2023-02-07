/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-07 21:01:13
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import '@tass-ui/theme-chalk/src/index.scss';
import TassUI from '../build';
import TassUI1 from '../build/es/components';

console.log(TassUI === TassUI1);
const app = createApp(App);

app.use(TassUI as any);
app.use(router);
app.mount('#app');
