import Vue from "vue";
import { required, email } from "vee-validate/dist/rules";
import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
  extend
} from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

setInteractionMode("eager");

extend("email", {
  ...email,
  message: "Invalid email address"
});
extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  }
}