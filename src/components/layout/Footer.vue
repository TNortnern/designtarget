<template>
  <v-footer
    :style="`background-color: ${$store.state.black}`"
    class="footer pa-4 pl-8 pr-8 pa-sm-10 container"
    absolute
    dark
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
        <div v-for="link in linksOne" :key="link.name">
          <router-link
            class="d-i-block"
            :to="!link.comingSoon ? link.href : '#'"
          >
            {{ link.name
            }}<template v-if="link.comingSoon">(coming soon)</template>
          </router-link>
        </div>
      </v-col>
      <v-col cols="6" sm="2">
        <div v-for="link in linksTwo" :key="link.name">
          <router-link class="d-i-block" :to="link.href" v-if="!link.external">
            {{ link.name }}
          </router-link>
          <a :href="link.href" target="_blank" v-else>
            {{ link.name }}
          </a>
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
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    linksOne: [
      { name: "Illustrations", href: "/collection/illustrations" },
      { name: "Images", href: "/collection/images" },
      { name: "Icons", href: "/collection/icons" },
      { name: "Videos", href: "/collection/videos", comingSoon: true },
      {
        name: "Landing Pages",
        href: "/collection/landingpages",
        comingSoon: true
      }
    ],
    linksTwo: [
      {
        name: "Facebook",
        href: "https://facebook.com/designtargetresources",
        external: true
      },
      {
        name: "Twitter",
        href: "https://twitter.com/search?q=designtarget&src=typed_query",
        external: true
      }
    ]
  }),
  props: {
    absolute: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
footer {
  margin-bottom: 15px;
  @include xs() {
    border-radius: 0px;
  }
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
@mixin relativeButton() {
  position: relative;
  margin-top: 10px;
}
.v-btn {
  @include xl() {
    width: 145px;
  }
  @include sm() {
    width: auto;
  }
  @include xs() {
    @include relativeButton();
  }
  @include sm() {
    @include relativeButton();
  }
  @include md() {
    @include relativeButton();
  }
  position: absolute;
  width: 125px;
  right: 0%;
  top: 0%;
}
</style>
