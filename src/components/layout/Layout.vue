<template>
  <div>
    <AppBar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import AppBar from "./AppBar";
import Footer from "./Footer";
export default {
  components: {
    AppBar,
    Footer
  }
};
</script>

<style></style>
