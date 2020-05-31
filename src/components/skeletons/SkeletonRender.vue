<template>
  <v-container :class="classes">
    <v-row>
      <SkeletonCard v-for="(skeleton, i) in 4" :key="i" />
    </v-row>
  </v-container>
</template>

<script>
import SkeletonCard from "./SkeletonCard";
export default {
  components: {
    SkeletonCard
  },
  props: {
    classes: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
</style>
