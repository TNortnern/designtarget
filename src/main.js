import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CollectionGrid from "./components/common/CollectionGrid.vue";
import Mixins from "./mixins";

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    ...Mixins.methods
  }
});
Vue.component("CollectionGrid", CollectionGrid);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
