<template>
  <div>
    <Drawer />
    <v-app-bar color="transparent" light elevation="0">
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="3">
            <img src="@/assets/designlogo.png" alt="logo" />
            <b class="align-self-center ml-2">designtarget</b>
          </v-col>
          <MobileNavigation />
          <v-col class="d-none d-md-flex justify-center align-center" cols="5">
            <div>
              <a
                v-for="link in $store.state.links"
                :key="link.name"
                :href="link.href"
                >{{ link.name }}</a
              >
            </div>
          </v-col>
          <v-col cols="4" class="d-none d-md-flex justify-end">
            <v-btn
              class="text-capitalize white--text"
              rounded
              width="175px"
              dark
              :color="$store.state.red"
              :to="$store.state.buttonLink.href"
            >
              {{ $store.state.buttonLink.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import MobileNavigation from "./MobileNavigation";
import Drawer from "./Drawer";
export default {
  components: {
    MobileNavigation,
    Drawer
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
a {
  margin: 0 17px;
  color: black !important;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: $red !important;
  }
}
</style>
