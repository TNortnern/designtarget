<template>
  <v-app id="app">
    <div :style="`padding-bottom: ${footerHeight}px`">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import { TOP_FOUR_QUERY } from "@/graphql/queries/resources";
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
    }
  },
  mounted() {
    window.addEventListener("resize", this.setFooterHeight);
    // here we want the footer to always be at the bottom so we set the padding bottom equal to it's height
    // avoid setting on login and signup since these pages don't have footers
    if (this.routeName !== "login" && this.routeName !== "signup") {
      this.footerHeight = document.querySelector("footer").offsetHeight;
    }
    if (!this.$store.state.categories.topFour.length) this.setTopFour();
  },
  methods: {
    setFooterHeight() {
      const footer = document.querySelector("footer").offsetHeight;
      this.footerHeight = footer;
    },
    async setTopFour() {
      await this.$apollo
        .query({
          query: TOP_FOUR_QUERY
        })
        .then(({ data }) => {
          this.$store.commit("setTopFour", data.categories);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    $route(to) {
      // avoid setting on login and signup since these pages don't have footers
      if (to.name !== "login" && to.name !== "signup") {
        this.setFooterHeight();
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
