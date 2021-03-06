<template>
  <v-app id="app">
    <v-progress-linear
      v-if="$store.state.appLoading"
      fixed
      indeterminate
      color="black"
    ></v-progress-linear>
    <div :style="`padding-bottom: ${footerHeight}px`">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import { TOP_FOUR_QUERY } from "@/graphql/queries/resources";
import { USER_BY_TOKEN_QUERY } from "@/graphql/queries/users";
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
      query: USER_BY_TOKEN_QUERY,
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
    if (!this.$store.state.auth.user) this.getUser();
    if (!this.$store.state.categories.topFour.length) this.setTopFour();
  },
  methods: {
    setFooterHeight() {
      const footer = document.querySelector("footer").offsetHeight;
      this.footerHeight = footer;
    },
    setTopFour() {
      this.$store.dispatch("getTopFour", {});
    },
    getUser() {
      this.$apollo
        .query({
          query: USER_BY_TOKEN_QUERY,
          variables: {
            token: localStorage.getItem("token")
          }
        })
        .then(({ data }) => {
          this.$store.commit("setUser", data.userByToken);
        })
        .catch(err => {
          console.log("err", err);
          this.$store.commit("setUser", null);
        });
    }
  },
  watch: {
    $route(to) {
      // avoid setting on login and signup since these pages don't have footers
      if (to.name !== "login" && to.name !== "signup") {
        try {
          this.setFooterHeight();
        } catch (e) {
          this.throwAway(e);
        }
      }
      if (to.name !== "Collection") {
        // remove set category if not visiting collections page
        if (this.$store.state.categories.current)
          this.$store.commit("setCurrent", null);
      }
    },
    user(val) {
      if (val) {
        // specifically here to reset the footer height of auth guarded pages
        setInterval(() => {
          this.setFooterHeight();
        }, 1);
      }
    }
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    user() {
      return this.$store.state.auth.user;
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
