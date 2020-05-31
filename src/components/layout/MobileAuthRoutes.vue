<template>
  <div>
    <v-list-item
      @click="$store.dispatch('logout'), $router.push('/login')"
      v-if="$store.state.auth.user"
    >
      <v-list-item-icon>
        <v-icon>person</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        Logout
      </v-list-item-title>
    </v-list-item>
    <template v-else>
      <v-list-item to="signup" active-class="drawer__link-active">
        <v-list-item-icon>
          <v-icon>person_add</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Sign Up
        </v-list-item-title>
      </v-list-item>
      <v-list-item to="login" active-class="drawer__link-active">
        <v-list-item-icon>
          <v-icon>person</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Login
        </v-list-item-title>
      </v-list-item>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
