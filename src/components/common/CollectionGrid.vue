<template>
  <div>
    <v-row v-if="collection.length">
      <SectionCard
        v-for="(item, i) in collection"
        :key="i"
        :item="item"
        lg="3"
        xl="3"
        :isUsers="isUsers"
      />
    </v-row>
  </div>
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
    },
    isUsers: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
