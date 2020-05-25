<template>
  <AuthLayout>
    <v-text-field label="Email" placeholder="Email" outlined />
    <v-text-field label="Password" placeholder="Password" outlined />
    <v-btn :color="$store.state.red" block dark rounded>
      Login
    </v-btn>
    <div class="text-center mt-5">
      <span
        >Don't have an account?
        <b @click="$router.push('signup')">Sign Up</b></span
      >
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout";

export default {
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
