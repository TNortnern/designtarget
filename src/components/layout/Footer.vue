<template>
  <footer
    :style="`background-color: ${$store.state.black}`"
    class="footer container pa-10"
  >
    <v-row class="text-center text-sm-left" justify="center" justify-sm="start">
      <v-col cols="12" sm="5" xl="4">
        <h1>designtarget</h1>
        <p class="mt-5">
          designtarget is a curated list of design resources that will help you
          speed up your workflow.
        </p>
      </v-col>
      <v-col cols="6" sm="2" xl="2">
        <router-link
          :to="link.href"
          class="d-block"
          v-for="link in linksOne"
          :key="link.name"
        >
          {{ link.name }}
        </router-link>
      </v-col>
      <v-col cols="6" sm="2" xl="2">
        <router-link
          :to="link.href"
          class="d-block"
          v-for="link in linksTwo"
          :key="link.name"
        >
          {{ link.name }}
        </router-link>
      </v-col>
      <v-col sm="3" xl="3">
        <p>
          Sign up to our newsletter and get notified whenever a new resource is
          released.
        </p>
        <v-text-field outlined />
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  data: () => ({
    linksOne: [
      { name: "Images", href: "#images" },
      { name: "Fonts", href: "#fonts" },
      { name: "Illustrations", href: "#illustrations" },
      { name: "Videos", href: "#videos" },
      { name: "Landing Pages", href: "#landing" }
    ],
    linksTwo: [
      { name: "Facebook", href: "#facebook" },
      { name: "Twitter", href: "#twitter" }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "@/styles";
footer {
  border-radius: 5px;
  color: #ffffff;
}
a {
  color: #ffffff !important;
  text-decoration: none;
  @include xl() {
    font-size: 24px;
  }
}
h1 {
  @include xl() {
    font-size: 50px;
  }
}
p {
  @include xl() {
    font-size: 24px;
  }
}
</style>
