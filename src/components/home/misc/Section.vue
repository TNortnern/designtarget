<template>
  <v-container class="section">
    <div class="d-flex mb-10">
      <h1 class="d-inline mr-5">Illustrations</h1>
      <v-btn
        class="text-capitalize align-self-center"
        :color="$store.state.red"
        dark
        rounded
        >View All</v-btn
      >
    </div>
    <v-row justify="space-between">
      <SectionCard v-for="item in 4" :key="item" />
      <Sponsored />
    </v-row>
  </v-container>
</template>

<script>
import SectionCard from "./SectionCard";
import Sponsored from "./Sponsored";
export default {
  components: {
    SectionCard,
    Sponsored
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
.v-btn {
  width: 125px;
  @include xl() {
    font-size: 18px;
    width: 145px;
  }
}
h1 {
  @include xl() {
    font-size: 50px;
  }
}
</style>
