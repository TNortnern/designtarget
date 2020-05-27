<template>
  <AuthLayout
    buttonName="Login"
    :cta="{
      name: 'Sign Up',
      message: 'Don\'t have an account?',
      route: 'signup'
    }"
  >
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
      />
    </ValidationProvider>
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
