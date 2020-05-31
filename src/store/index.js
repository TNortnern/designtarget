import Vue from "vue";
import Vuex from "vuex";
import categories from "./categories";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    red: "#FF2121",
    black: "#272727",
    appLoading: false,
    links: [
      {
        name: "Illustrations",
        href: "/collection/illustrations",
        icon: "picture_in_picture"
      },
      { name: "Images", href: "/collection/images", icon: "photo" },
      { name: "Icons", href: "/collection/icons", icon: "error_outline" }
    ],
    buttonLink: {
      name: "Liked Resources",
      href: "#"
    },

    loginLink: { name: "Login", href: "/login" },
    signUpLink: { name: "Sign Up", href: "/signup", button: true },

    drawer: false
  },
  mutations: {
    setDrawer(state, drawer) {
      if (drawer) {
        state.drawer = false;
      }
      state.drawer = !state.drawer;
    },
    setAppLoading(state, loading) {
      state.appLoading = loading;
    }
  },
  actions: {},
  modules: {
    categories,
    auth
  }
});
