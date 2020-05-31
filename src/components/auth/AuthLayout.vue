<template>
  <div class="auth-layout">
    <v-row no-gutters justify="center" justify-lg="start">
      <v-col class="d-none d-lg-block" cols="12" lg="6">
        <img
          class="auth-layout__image"
          src="@/assets/authimage.png"
          alt="colorful image"
        />
      </v-col>
      <v-col class="auth-layout__form" cols="12" lg="6">
        <ValidationObserver v-slot="{ invalid }">
          <form
            @submit.prevent="() => (!invalid ? action() : '')"
            class="d-flex justify-center align-center container"
          >
            <div>
              <div class="text-center mb-4">
                <img src="@/assets/designlogo.png" alt="design logo" />
              </div>
              <slot />
              <v-btn
                v-if="!cta.loading"
                type="submit"
                :color="$store.state.red"
                block
                dark
                rounded
              >
                {{ buttonName }}
              </v-btn>
              <div v-else class="text-center">
                <v-progress-circular indeterminate> </v-progress-circular>
              </div>
              <div class="text-center mt-5">
                <span>
                  {{ cta.message }}
                  <b @click="$router.push(cta.route)">{{ cta.name }}</b></span
                >
              </div>
            </div>
          </form>
        </ValidationObserver>
      </v-col>
    </v-row>
    <Footer
      style="opacity: 0; position: fixed; bottom: 0; left: 0; z-index:-99;"
    />
  </div>
</template>

<script>
import Footer from "../layout/Footer";
export default {
  components: {
    Footer
  },
  props: {
    action: {
      type: Function,
      default: () => {}
    },
    buttonName: {
      type: String,
      default: ""
    },
    cta: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.auth-layout {
  background-color: white !important;
  overflow-y: hidden;
  height: 100vh;
  // overflow from hidden footer won't show with this
  position: fixed;
  width: 100%;
  @include xs() {
    overflow: auto;
  }
  @include md() {
    overflow: auto;
  }
  @include sm() {
    overflow: auto;
  }
}
.auth-layout__form {
  align-self: center;
  height: 100vh;
  background-color: white;
}
.auth-layout__image {
  width: 100%;
  height: 100vh;
}
form {
  height: 100%;
}
input {
  color: black;
  background-color: black;
}
b {
  cursor: pointer;
  &:hover {
    color: lighten(black, 34%);
  }
}
</style>
