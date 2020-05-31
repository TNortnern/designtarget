import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import MyCollection from "../pages/MyCollection";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import store from "../store";
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
    component: MyCollection,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    name: "NotFound",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
    meta: {
      guest: true
    }
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  const toLogin = () => {
    localStorage.removeItem("token");
    next({
      path: "/login",
      params: { nextUrl: to.fullPath }
    });
  };
  const toHome = () => {
    next({
      path: "/",
      params: { nextUrl: to.fullPath }
    });
  };
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      toLogin();
      return;
    }
    // check initially if the user is already logged in if the token exists
    if (!store.state.auth.user) {
      await store.dispatch("getUserByToken", token);
      // dispatch usergetter if not, if it fails then redirect
      if (!store.state.auth.user) {
        toLogin();
        return;
      }
    }
    next();
  } else if (to.matched.some(record => record.meta.guest)) {
    // check to see if user already exists
    if (store.state.auth.user) {
      toHome();
      return;
    }
    // fetch user if token exists
    if (token) {
      await store.dispatch("getUserByToken", token);
      if (store.state.auth.user) {
        toHome();
        return;
      }
    }
    next();
  } else {
    next();
  }
});

export default router;
