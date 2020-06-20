<template>
  <Layout>
    <template>
      <vue-headful
        v-if="current"
        :title="`Collection - ${capitalize(current.name)}`"
        :description="
          `Design Target's collection of ${capitalize(current.name)}`
        "
      />
      <vue-headful
        :title="`Collection`"
        :description="`Design Target's collection`"
      />
      <v-container
        v-if="current && resources && resources.length && !loadingResources"
      >
        <h1 class="mb-3 text-center text-sm-left">
          {{ capitalize(current.name) }}
        </h1>
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
    this.$store.dispatch("getCategoryResources", this.route.collection);
  },
  watch: {
    route(to) {
      if (to) {
        this.$store.dispatch("getCategoryResources", this.route.collection);
      }
    }
  },
  components: {
    Layout,
    SkeletonRender
  },
  computed: {
    current() {
      return this.$store.state.categories.current;
    },
    route() {
      return this.$route.params;
    },
    resources() {
      return this.current.resources;
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
