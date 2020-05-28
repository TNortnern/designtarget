<template>
  <v-container class="section">
    <div class="d-flex flex-wrap justify-center justify-md-start mb-10">
      <h1 class="mr-5">{{ name }}</h1>
      <v-btn
        @click="viewCategory()"
        class="text-capitalize align-self-center"
        :color="$store.state.red"
        dark
        rounded
        >View All</v-btn
      >
    </div>
    <v-row
      justify-md="space-between"
      justify-lg="space-between"
      justify="center"
    >
      <SectionCard v-for="item in items" :key="item.id" :item="item" />
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
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => {}
    },
    category: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    viewCategory() {
      this.$store.commit("setCurrent", this.category);
      this.$router.push(this.href);
    }
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
