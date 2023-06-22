import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/src/components/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("/src/components/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
