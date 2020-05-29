<template>
  <v-app id="app">
    <div :style="`padding-bottom: ${footerHeight}px`">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import { TOP_FOUR_QUERY } from "@/graphql/queries/resources";
import { USER_QUERY } from "@/graphql/queries/users";
export default {
  name: "App",
  data() {
    return {
      footerHeight: 0
    };
  },
  apollo: {
    categories: {
      query: TOP_FOUR_QUERY,
      skip: true
    },
    user: {
      query: USER_QUERY,
      skip: true
    }
  },
  mounted() {
    window.addEventListener("resize", this.setFooterHeight);
    // here we want the footer to always be at the bottom so we set the padding bottom equal to it's height
    // avoid setting on login and signup since these pages don't have footers
    if (this.routeName !== "login" && this.routeName !== "signup") {
      if (document.querySelector("footer"))
        this.footerHeight = document.querySelector("footer").offsetHeight;
    }
    if (!this.$store.state.categories.topFour.length) this.setTopFour();
    if (!this.$store.state.auth.user) this.getUser();
  },
  methods: {
    setFooterHeight() {
      const footer = document.querySelector("footer").offsetHeight;
      this.footerHeight = footer;
    },
    async setTopFour() {
      this.$store.dispatch("getTopFour", {});
    },
    async getUser() {
      await this.$apollo
        .query({
          query: USER_QUERY,
          variables: {
            id: "5ecfa7eacb82c91c9860d0e79"
          }
        })
        .then(({ data }) => {
          this.$store.commit("setUser", data.user);
        })
        .catch(err => {
          console.log('err', err)
          this.$store.commit("setUser", null);
        });
    }
  },
  watch: {
    $route(to) {
      // avoid setting on login and signup since these pages don't have footers
      if (to.name !== "login" && to.name !== "signup") {
        this.setFooterHeight();
      }
      if (to.name !== "Collection") {
        // remove set category if not visiting collections page
        if (this.$store.state.categories.current)
          this.$store.commit("setCurrent", null);
        console.log("unset here..");
      }
    }
  },
  computed: {
    routeName() {
      return this.$route.name;
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
