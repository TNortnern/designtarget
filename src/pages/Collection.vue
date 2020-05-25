<template>
  <Layout>
    <v-container>
      <h1 class="mb-3">{{ capitalize(title) }}</h1>
      <CollectionGrid :collection="items" />
    </v-container>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
export default {
  data: () => ({
    items: [
      {
        name: "Mixkit",
        description:
          "Download high quality, royalty free video footage and art.",
        image: "mixkit"
      },

      {
        name: "Humaaans",
        description: "Mix & Match high quality illustrations of people.",
        image: "humaaans"
      },
      {
        name: "Lukaszadam",
        description:
          "Free high quality illustrations for everyone. Projects and commercial.",
        image: "lukaszadam"
      },
      {
        name: "Mixkit",
        description:
          "Download high quality, royalty free video footage and art.",
        image: "mixkit"
      },
      {
        name: "unDraw",
        description:
          "Open source illustrations for every project you can imagine and create.",
        image: "unDraw"
      },
      {
        name: "Humaaans",
        description: "Mix & Match high quality illustrations of people.",
        image: "humaaans"
      },
      {
        name: "Lukaszadam",
        description:
          "Free high quality illustrations for everyone. Projects and commercial.",
        image: "lukaszadam"
      }
    ]
  }),
  components: {
    Layout
  },
  computed: {
    title() {
      return this.$route.params.collection;
    }
  }
};
</script>

<style></style>
