import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Projects from "@/views/Projects/Projects.vue";

const routes = [
  {
    path: process.env.NODE_ENV === 'development' ? "/" : '/portfolio/',
    name: "Home",
    component: Home,
  },
  {
    path: process.env.NODE_ENV === 'development' ? "/projects" : '/portfolio/projects',
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