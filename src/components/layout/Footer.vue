<template>
  <footer
    :style="`background-color: ${$store.state.black}`"
    class="footer container pa-10"
  >
    <v-row class="text-center text-sm-left" justify="center" justify-sm="start">
      <v-col cols="12" sm="4">
        <h1>designtarget</h1>
        <p class="mt-5">
          designtarget is a curated list of design resources that will help you
          speed up your workflow.
        </p>
      </v-col>
      <v-col cols="6" sm="2">
        <router-link
          :to="link.href"
          class="d-block"
          v-for="link in linksOne"
          :key="link.name"
        >
          {{ link.name }}
        </router-link>
      </v-col>
      <v-col cols="6" sm="2">
        <div>
          <router-link
            :to="link.href"
            class="d-inline-block"
            v-for="link in linksTwo"
            :key="link.name"
          >
            {{ link.name }}
          </router-link>
        </div>
      </v-col>
      <v-col sm="4">
        <p>
          Sign up to our newsletter and get notified whenever a new resource is
          released.
        </p>
        <div class="footer__subscribe">
          <input class="pl-8" type="text" placeholder="Enter e-mail address" />
          <v-btn class="text-capitalize" :color="$store.state.red" dark rounded>
            Subscribe
          </v-btn>
        </div>
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
  @include xl() {
    min-width: 1679px;
    margin-left: 126px;
  }
}
a {
  color: #ffffff !important;
  white-space: nowrap;
  // for breaking lines
  margin-right: 100%;
  text-decoration: none;
  @include xl() {
    font-size: 24px;
  }
  &:hover {
    color: $red !important;
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
.footer__subscribe {
  position: relative;
  max-width: 411px;
  input {
    width: 100%;
    height: 36px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 6px #00000021;
    border-radius: 300px;
  }
}
.v-btn {
  @include xl() {
    width: 145px;
  }
  @include sm() {
    width: auto;
  }
  position: absolute;
  width: 125px;
  right: 0%;
  top: 0%;
}
</style>
