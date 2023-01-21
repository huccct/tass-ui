/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:15:22
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 13:39:40
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
});
