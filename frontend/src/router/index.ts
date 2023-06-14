import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", name: "root", redirect: "" }];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
