<template>
  <div>
    <Drawer />
    <v-app-bar color="transparent" light elevation="0">
      <v-container>
        <v-row>
          <v-col class="d-flex appbar__logo" cols="3">
            <img @click="goHome()" src="@/assets/designlogo.png" alt="logo" />
            <b @click="goHome()" class="align-self-center ml-2">designtarget</b>
          </v-col>
          <MobileNavigation />
          <v-col
            class="d-none d-md-flex justify-center align-center collection__links"
            cols="5"
          >
            <div>
              <router-link
                class="appbar__link"
                v-for="link in $store.state.links"
                :key="link.name"
                :to="link.href"
                active-class="appbar__link--active"
                >{{ link.name }}</router-link
              >
            </div>
          </v-col>
          <v-col cols="4" class="d-none d-md-flex justify-end">
            <template v-if="$store.state.auth.loading">
              <v-progress-circular indeterminate color="primary">
              </v-progress-circular>
            </template>
            <template v-else-if="!$store.state.auth.user">
              <router-link
                class="appbar__link appbar__link--login mr-8"
                :to="$store.state.loginLink.href"
              >
                {{ $store.state.loginLink.name }}
              </router-link>
              <v-btn
                class="text-capitalize white--text"
                rounded
                dark
                :color="$store.state.red"
                :to="$store.state.signUpLink.href"
              >
                {{ $store.state.signUpLink.name }}
              </v-btn>
            </template>
            <template v-else>
              <div style="position: relative; z-index:9999">
                <v-btn
                  @click="toggleExpand()"
                  class="text-capitalize"
                  text
                  :color="$store.state.black"
                >
                  My Account
                  <v-icon>
                    <template v-if="!expanded">expand_more</template>
                    <template v-else>expand_less</template>
                  </v-icon>
                </v-btn>
                <div
                  v-if="expanded"
                  style="position: absolute; right: -50%; z-index:9999"
                >
                  <ExpandOptions />
                </div>
              </div>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import MobileNavigation from "./MobileNavigation";
import Drawer from "./Drawer";
import ExpandOptions from "./ExpandOptions";
export default {
  components: {
    MobileNavigation,
    Drawer,
    ExpandOptions
  },
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    goHome() {
      if (this.$route.name !== "Home") {
        this.$router.push("/");
      }
    },
    toggleExpand() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.appbar__link {
  margin: 0 17px;
  color: black;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  &:hover {
    color: $red;
  }
}
.appbar__link--login {
  color: $red;
  &:hover {
    color: darken($red, 13%);
  }
}
.appbar__link--active {
  // background-color: $red;
  // color: white;
  // padding: 10px;
  // border-radius: 2px;
  // display: inline-flex;
  // justify-content: center;
  font-weight: bold;
  &:hover {
    font-weight: bold;
    color: black;
  }
}
.appbar__logo {
  img,
  b {
    cursor: pointer;
  }
}
.collection__links {
  position: relative;
  left: 4%;
}
.v-btn {
  width: 124px;
  @include xl() {
    width: 145px;
  }
}
</style>
