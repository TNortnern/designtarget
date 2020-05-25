<template>
  <div class="auth-layout">
    <v-row no-gutters justify="center" justify-sm="start">
      <v-col cols="12" lg="6">
        <img
          class="auth-layout__image"
          src="@/assets/authimage.png"
          alt="colorful image"
        />
      </v-col>
      <v-col style="background-color: white;" cols="12" lg="6">
        <form class="d-flex justify-center align-center">
          <div>
            <div class="text-center mb-4">
              <img src="@/assets/designlogo.png" alt="design logo" />
            </div>
            <slot />
          </div>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles";
.auth-layout {
  background-color: white !important;
  height: 100vh;
  overflow: hidden;
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
</style>
