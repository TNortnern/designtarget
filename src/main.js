import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CollectionGrid from "./components/common/CollectionGrid";
import CategoryModal from "./components/admin/CategoryModal";
import ResourceModal from "./components/admin/ResourceModal";
import Mixins from "./mixins";
import VeeValidate from "./plugins/vee-validate";
import apolloProvider from "./plugins/apolloProvider";
import vueHeadful from "vue-headful";

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    ...Mixins.methods
  }
});
Vue.component("vue-headful", vueHeadful);
Vue.component("CollectionGrid", CollectionGrid);
Vue.component("CategoryModal", CategoryModal)
Vue.component("ResourceModal", ResourceModal)

new Vue({
  router,
  store,
  VeeValidate,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount("#app");
