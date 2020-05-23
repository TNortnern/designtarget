<template>
  <footer
    :style="`background-color: ${$store.state.black}`"
    class="footer container pa-10"
  >
    <v-row>
      <v-col cols="4">
        <h1>designtarget</h1>
        <p class="mt-5">
          designtarget is a curated list of design resources that will help you
          speed up your workflow.
        </p>
      </v-col>
      <v-col cols="1">
        <a href="#" class="d-block" v-for="item in 5" :key="item">Link</a>
      </v-col>
      <v-col cols="2">
        <a href="#" class="d-block" v-for="item in 2" :key="item">Link</a>
      </v-col>
      <v-col cols="5">
        <p>
          Sign up to our newsletter and get notified whenever a new resource is
          released.
        </p>
        <v-text-field outlined />
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border-radius: 5px;
  color: #ffffff;
}
a {
  color: #ffffff !important;
  text-decoration: none;
}
</style>
