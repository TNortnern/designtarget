<template>
  <div
    class="d-block d-md-none align-self-center"
    style="position: absolute; right: 2%"
  >
    <v-spacer />
    <div>
      <v-app-bar-nav-icon @click="toggle()"></v-app-bar-nav-icon>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggle() {
      this.$store.commit("setDrawer", true);
    }
  }
};
</script>

<style></style>
