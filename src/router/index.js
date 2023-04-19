import { createRouter, createWebHistory } from "vue-router";
import collections from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "collections",
    component: collections,
  },
  {
    path: "/Men",
    name: "Men",
    component: collections,
  },
  {
    path: "/Women",
    name: "Women",
    component: collections,
  },
  {
    path: "/About",
    name: "About",
    component: collections,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: collections,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
