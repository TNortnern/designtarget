<template>
  <v-app id="app">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import "@/styles";
#app {
  font-family: "Karla", sans-serif !important;
  background-color: #f6f6f6;
}
</style>
