import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Page from "../views/Page.vue";
import EditProject from "../views/EditProject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page",
    name: "page",
    component: Page,
  },
  {
    path: "/edit-project",
    name: "edit",
    component: EditProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
