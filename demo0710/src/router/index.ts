/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 09:44:52
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 14:20:18
 * @Description: file content
 * @FilePath: \vue3-vite-test\src\router\index.ts
 */

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import TestAxios from "../views/TestAxios.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/testaxios", component: TestAxios },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
