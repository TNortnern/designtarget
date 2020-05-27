<template>
  <AuthLayout
    buttonName="Sign Up"
    :cta="{
      name: 'Login',
      message: 'Already have an account?',
      route: 'login'
    }"
  >
    <vue-headful title="Sign Up" description="Design Target sign up page" />
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
b {
  cursor: pointer;
  &:hover {
    color: lighten(black, 34%);
  }
}
</style>
