/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:15:22
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-22 16:48:55
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import type {PluginOption} from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineConfig({

  plugins: [(vue() as PluginOption), VueSetupExtend()],
});
