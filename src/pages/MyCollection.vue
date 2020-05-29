<template>
  <Layout v-if="mine">
    <vue-headful
      :title="`My Collection`"
      :description="`Manage your resource collection at Design Target`"
    />
    <v-container v-if="resources">
      <h1 class="mb-3">My Collection</h1>
      <CollectionGrid :collection="resources" />
    </v-container>
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
    if (!this.mine && !this.$store.state.auth.loading) {
      this.$router.push("/");
    } else {
      if (this.mine && !this.mine.resources)
        this.$store.dispatch("getUserResources", this.mine.id);
    }
    return;
  },
  components: {
    Layout
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

<style></style>
