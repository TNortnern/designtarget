<template>
  <AuthLayout
    buttonName="Login"
    :cta="{
      name: 'Sign Up',
      message: 'Don\'t have an account?',
      route: 'signup'
    }"
  >
    <v-text-field v-model="email" label="Email" placeholder="Email" outlined />
    <v-text-field
      v-model="password"
      label="Password"
      placeholder="Password"
      outlined
    />
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
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
