import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import LoginCard from "../components/LoginCard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginCard",
    component: LoginCard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
