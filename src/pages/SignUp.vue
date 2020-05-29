<template>
  <AuthLayout
    buttonName="Sign Up"
    :action="register"
    :cta="{
      name: 'Login',
      message: 'Already have an account?',
      route: 'login',
      loading
    }"
  >
    <vue-headful title="Sign Up" description="Design Target sign up page" />
    <h3 class="text-center">{{ error }}</h3>
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
        ref="password"
        :type="passwordType"
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
import { REGISTER } from "@/graphql/mutations/users";
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
  components: {
    AuthLayout
  },
  methods: {
    async register() {
      this.loading = true;
      this.error = "";
      await this.$apollo
        .mutate({
          mutation: REGISTER,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(({ data }) => {
          this.loading = false;

          console.log(data);
          this.$store.commit("setUser", data.createUser.user);
          localStorage.setItem("token", data.createUser.token);
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
b {
  cursor: pointer;
  &:hover {
    color: lighten(black, 34%);
  }
}
</style>
