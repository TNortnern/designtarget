<template>
  <Layout>
    <template v-if="current">
      <vue-headful
        :title="`Collection - ${capitalize(current.name)}`"
        :description="
          `Design Target's collection of ${capitalize(current.name)}`
        "
      />
      <v-container v-if="resources">
        <h1 class="mb-3">{{ capitalize(current.name) }}</h1>
        <CollectionGrid :collection="resources" />
      </v-container>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";

export default {
  data() {
    return {
      cookieCategory: null
    };
  },
  async mounted() {
    const cookieCategory = JSON.parse(localStorage.getItem("category"));
    if (this.current) {
      localStorage.setItem("category", JSON.stringify(this.current));
    } else if (cookieCategory) {
      this.$store.commit("setCurrent", cookieCategory);
    }
    this.$store.dispatch("getCategoryResources", this.current.id);
  },
  components: {
    Layout
  },
  computed: {
    current() {
      return this.$store.state.categories.current;
    },
    resources() {
      return this.$store.state.categories.allResources;
    }
  }
};
</script>

<style></style>
