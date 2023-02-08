/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 10:59:28
 */
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import TassUI from '@tass-ui/components';

const app = createApp(App);

app.use(TassUI as any);
app.use(router);
app.mount('#app');
