import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Collection from "../pages/Collection.vue";
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
