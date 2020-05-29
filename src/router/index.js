import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import MyCollection from "../pages/MyCollection";
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
    path: "/mycollection",
    name: "MyCollection",
    component: MyCollection
  },
  {
    path: "*",
    name: "NotFound",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  }
];



const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
