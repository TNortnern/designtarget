<template>
  <div>
    <AppBar />
    <slot />
    <v-container>
    <Footer :absolute="absolute" />
    </v-container>
  </div>
</template>

<script>
import AppBar from "./AppBar";
import Footer from "./Footer";
export default {
  components: {
    AppBar,
    Footer
  },
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
