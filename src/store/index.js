import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    red: "#FF2121",
    black: "#272727",
    links: [
      {
        name: "Illustrations",
        href: "/collection/illustrations",
        icon: "picture_in_picture"
      },
      { name: "Images", href: "/collecton/images", icon: "photo" },
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
    }
  },
  actions: {},
  modules: {}
});
