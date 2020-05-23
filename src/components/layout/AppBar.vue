<template>
  <div>
    <v-app-bar app color="transparent" light elevation="0">
      <v-row>
        <v-col class="d-flex" cols="5">
          <img src="@/assets/designlogo.png" alt="logo" />
          <b class="align-self-center ml-2">designtarget</b>
        </v-col>
        <v-col class="text-center" cols="2">
          <a href="#">Illustrations</a>
          <a href="#">Images</a>
          <a href="#">Icons</a>
        </v-col>
        <v-col cols="5" class="d-flex justify-end">
          <v-btn
            class="text-capitalize"
            rounded
            width="175px"
            dark
            color="#FF2121"
          >
            Liked Resources
          </v-btn>
        </v-col>
      </v-row>
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
