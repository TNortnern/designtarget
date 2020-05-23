<template>
  <v-col cols="11" sm="12" lg="2" xl="1">
    <div
      :style="`background-color: ${$store.state.black}`"
      class="sponsored pt-4 pb-4"
    >
      <div class="text-center">
        <v-btn class="text-capitalize" :color="$store.state.red" rounded dark>
          <v-icon left>
            info
          </v-icon>
          Sponsored
        </v-btn>
      </div>
      <div
        class="d-flex flex-column align-center justify-center
         white--text mt-3 sponsored__bluehost"
        style="background-color: #4474BA; height: 70px;"
      >
        <v-icon color="white">
          grid_on
        </v-icon>
        <span>Bluehost</span>
      </div>
      <div class="text-center white--text mt-2 pl-3 pr-3">
        <b>
          Limited time
        </b>
        <p class="mt-1">
          Get 50% off your domain and hosting for the first year. No strings
          attached.
        </p>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles";
.sponsored {
  border-radius: 5px;
  height: 100%;
  min-width: 155px;
}
p {
  font-size: 14px;
}
.sponsored__bluehost {
  @include md() {
    width: 115px;
    margin: 0 auto;
  }
}
</style>
