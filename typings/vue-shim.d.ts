/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-06 11:08:16
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-06 11:29:24
 */
declare module '*.vue' {
  import type { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
