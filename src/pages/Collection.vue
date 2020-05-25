<template>
  <Layout absolute>
    <div>
      <h1>{{ capitalize(title) }}</h1>
      <CollectionGrid />
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
export default {
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
