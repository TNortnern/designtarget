<template>
  <AuthLayout
    buttonName="Login"
    :action="login"
    :cta="{
      name: 'Sign Up',
      message: 'Don\'t have an account?',
      route: 'signup',
      loading
    }"
  >
    <h3 class="text-center">{{ error }}</h3>
    <vue-headful title="Login" description="Design Target login page" />
    <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
      <v-text-field
        v-model="email"
        label="Email"
        placeholder="Email"
        :error-messages="errors"
        outlined
      />
    </ValidationProvider>
    <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
      <v-text-field
        v-model="password"
        label="Password"
        :error-messages="errors"
        placeholder="Password"
        outlined
        :type="passwordType"
        ref="password"
      >
        <v-btn
          style="position: absolute; right: 3%; top: 20%"
          icon
          slot="append"
          @click="passwordToggle"
          ><v-icon color="black">remove_red_eye</v-icon></v-btn
        >
      </v-text-field>
    </ValidationProvider>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout";
import { LOGIN_QUERY } from "@/graphql/queries/users";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,
      passwordType: "password"
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = "";
      await this.$apollo
        .mutate({
          mutation: LOGIN_QUERY,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(({ data }) => {
          this.loading = false;
          // console.log(data);
          this.$store.commit("setUser", data.login.user);
          localStorage.setItem("token", data.login.token);
          this.$router.push("/");
        })
        .catch(err => {
          this.loading = false;
          this.error = err.graphQLErrors[0].message;
          console.log("err", err);
        });
    },
    passwordToggle() {
      if (this.$refs.password.type === "password") this.passwordType = "text";
      if (this.$refs.password.type === "text") this.passwordType = "password";
    }
  },
  components: {
    AuthLayout
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.v-text-field {
  width: 350px;
  @include xl() {
    width: 407px;
  }
  @include xs() {
    width: 100%;
  }
}
</style>
