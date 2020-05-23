import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    red: "#FF2121",
    black: "#272727",
    links: [
      { name: "Illustrations", href: "#p", icon: "picture_in_picture" },
      { name: "Images", href: "#s", icon: "photo" },
      { name: "Icons", href: "#i", icon: "error_outline" }
    ],
    buttonLink: {
      name: "Liked Resources",
      href: "#"
    },
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
