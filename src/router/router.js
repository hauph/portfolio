import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Projects from "@/views/Projects/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;