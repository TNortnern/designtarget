<template>
  <v-navigation-drawer class="d-block d-md-none" v-model="drawer" app>
    <v-list-item-title class="d-flex pa-3">
      <img src="@/assets/designlogo.png" alt="logo" />
      <b class="align-self-center ml-2">designtarget</b>
    </v-list-item-title>
    <v-divider />
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item
          v-for="link in $store.state.links"
          :key="link.name"
          :to="link.href"
          active-class="drawer__link-active"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.name }} </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    drawer: {
      set(val) {
        this.$store.commit("setDrawer", val);
      },
      get() {
        return this.$store.state.drawer;
      }
    }
  }
};
</script>

<style>
.drawer__link-active {
  background-color: black;
  color: white !important;
}
</style>
