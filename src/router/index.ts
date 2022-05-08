import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Crew from "../views/Crew.vue";
import Destinations from "../views/Destinations.vue";
import Home from "../views/Home.vue";
import Tech from "../views/Tech.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destinations,
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/tech",
    name: "Technology",
    component: Tech,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
