import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import LoginView from "../views/authentication/LoginView.vue";
import DashboardView from "../views/dashboard/indexView.vue";
import BillDashboard from "../views/dashboard/BillView.vue";
import ProductsView from "../views/dashboard/AddProductView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TestView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashbord",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/bills",
    name: "billContent",
    component: BillDashboard,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (!token) {
    next({ name: "login" });
  } else {
    next();
  }
});
export default router;
