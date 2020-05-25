<template>
  <v-app id="app">
    <div :style="`padding-bottom: ${footerHeight}px`">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      footerHeight: 0
    };
  },
  mounted() {
    window.addEventListener("resize", this.setFooterHeight);
    this.footerHeight = document.querySelector("footer").offsetHeight;
  },
  methods: {
    setFooterHeight() {
      this.footerHeight = document.querySelector("footer").offsetHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import "@/styles";
#app {
  font-family: "Karla", sans-serif !important;
  background-color: #f6f6f6;
  min-height: 100vh;
  position: relative;
}
</style>
