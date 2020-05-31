<template>
  <Layout>
    <vue-headful
      :title="`${mine ? 'My Collection' : 'Login'}`"
      :description="`Manage your resource collection at Design Target`"
    />
    <v-container v-if="resources">
      <template v-if="resources.length">
        <h1 class="mb-3">My Collection</h1>
        <CollectionGrid :collection="resources" :isUsers="true" />
      </template>
      <template v-else>
        <h1>Looks like you haven't liked any resources yet</h1>
      </template>
    </v-container>
    <template v-else>
      <SkeletonRender />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import SkeletonRender from "@/components/skeletons/SkeletonRender"

export default {
  data() {
    return {
      cookieCategory: null
    };
  },
  async mounted() {
    if (this.mine && !this.mine.resources) {
      await this.$store.dispatch("getUserResources", this.mine.id);
    }
  },
  components: {
    Layout,
    SkeletonRender
  },
  computed: {
    resources() {
      return this.mine && this.mine.resources;
    },
    mine() {
      return this.$store.state.auth.user;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";
</style>
