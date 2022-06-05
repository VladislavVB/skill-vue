import { createRouter, createWebHistory } from "vue-router";
import CatalogPage from "@/views/CatalogPage";
import HomePage from "@/views/HomePage";
import ProductPage from "@/views/ProductPage";
import NotFoundPage from "@/views/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogPage,
  },
  {
    path: "/product/:slug",
    name: "productPage",
    component: ProductPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
