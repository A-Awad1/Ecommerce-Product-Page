import { createRouter, createWebHistory } from "vue-router";
import collection from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "collection",
    component: collection,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
