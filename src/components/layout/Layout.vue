<template>
  <div>
    <AppBar />
    <slot />
    <Footer :absolute="absolute" />
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
