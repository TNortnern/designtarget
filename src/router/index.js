import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/collection/:collection",
    name: "Collection",
    component: Collection
  },
  {
    path: "*",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
