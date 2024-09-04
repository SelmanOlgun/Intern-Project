import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "@/components/BaseLayout.vue";
import AnalyticalPage from "@/views/AnalyticalPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import ProductDetailPage from "@/views/ProductDetailPage.vue";
import NewProductPage from "@/views/NewProductPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/analytical",
  },
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "analytical",
        name: "Analytical",
        component: AnalyticalPage,
      },
      {
        path: "/products",
        name: "Products",
        component: ProductsPage
      },
      {
        path: "/product-detail",
        name: "ProductDetail",
        component: ProductDetailPage
      },
      {
        path: "/new-product",
        name: "NewProduct",
        component: NewProductPage
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
