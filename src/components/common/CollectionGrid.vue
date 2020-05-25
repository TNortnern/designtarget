<template>
  <v-row>
    <SectionCard v-for="(item, i) in collection" :key="i" :item="item" lg="3" />
  </v-row>
</template>

<script>
import SectionCard from "@/components/home/misc/SectionCard";
export default {
  components: {
    SectionCard
  },
  props: {
    collection: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style></style>
