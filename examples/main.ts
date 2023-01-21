/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:00
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 14:22:33
 */
import { createApp } from 'vue';
import App from './app.vue';
import '@echo-ui/theme-chalk/src/index.scss';
import EchoUI from '@echo-ui/components';
const app = createApp(App);

app.use(EchoUI);

app.mount('#app');
