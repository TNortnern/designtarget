import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CollectionGrid from "./components/common/CollectionGrid.vue";
import Mixins from "./mixins";
import VeeValidate from "./plugins/vee-validate";

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
  VeeValidate,
  vuetify,
  render: h => h(App)
}).$mount("#app");
