/*
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-07 15:54:11
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-09 16:07:59
 */
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
const router=createRouter({
  history:createWebHashHistory(import.meta.env.BASE_URL),
  routes:[{path:'/sp',component:()=>import('../TestCx.vue')}]
})
export default router;