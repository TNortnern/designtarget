<template>
  <Layout>
    <template v-if="current">
      <vue-headful
        :title="`Collection - ${capitalize(current.name)}`"
        :description="
          `Design Target's collection of ${capitalize(current.name)}`
        "
      />
      <v-container v-if="resources && !loadingResources">
        <h1 class="mb-3">{{ capitalize(current.name) }}</h1>
        <CollectionGrid :collection="resources" />
      </v-container>
      <template v-else>
        <SkeletonRender />
      </template>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import SkeletonRender from "@/components/skeletons/SkeletonRender";

export default {
  data() {
    return {
      cookieCategory: null
    };
  },
  mounted() {
    const cookieCategory = JSON.parse(localStorage.getItem("category"));
    if (this.current) {
      localStorage.setItem("category", JSON.stringify(this.current));
    } else if (cookieCategory) {
      this.$store.commit("setCurrent", cookieCategory);
    }
    this.$store.dispatch("getCategoryResources", this.current.id);
  },
  components: {
    Layout,
    SkeletonRender
  },
  computed: {
    current() {
      return this.$store.state.categories.current;
    },
    resources() {
      return this.$store.state.categories.allResources;
    },
    loadingResources() {
      return (
        this.$store.state.categories.loading.name ===
          "loadingCategoryResources" &&
        this.$store.state.categories.loading === true
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";
</style>
