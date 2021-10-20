import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import LoginCard from "../components/LoginCard";
import LicenciasClientes from "../components/LicenciasClientes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginCard",
    component: LoginCard,
  },
  {
    path: "/licencias-clientes",
    name: "LicenciasClientes",
    component: LicenciasClientes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
