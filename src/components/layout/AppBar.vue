<template>
  <div>
    <v-app-bar color="transparent" light elevation="0">
      <v-container>
        <v-row>
          <v-col class="d-flex" cols="3">
            <img src="@/assets/designlogo.png" alt="logo" />
            <b class="align-self-center ml-2">designtarget</b>
          </v-col>
          <v-col class="text-center" cols="5">
            <a href="#">Illustrations</a>
            <a href="#">Images</a>
            <a href="#">Icons</a>
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <v-btn
              class="text-capitalize"
              rounded
              width="175px"
              dark
              :color="$store.state.red"
            >
              Liked Resources
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  margin: 0 17px;
  color: black !important;
  text-decoration: none;
}
</style>
