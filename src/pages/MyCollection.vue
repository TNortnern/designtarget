<template>
  <Layout>
    <template v-if="mine">
      <vue-headful
        :title="`My Collection`"
        :description="`Manage your resource collection at Design Target`"
      />
      <v-container v-if="resources">
        <h1 class="mb-3">My Collection</h1>
        <CollectionGrid :collection="resources" :isUsers="true" />
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
    if (this.mine && !this.mine.resources) {
      await this.$store.dispatch("getUserResources", this.mine.id);
    }
    console.log("this.mine", this.mine);
    console.log("this.resources", this.resources);
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
  },
  watch: {
    mine(newval, oldval) {
      if (newval) console.log("newval", newval);
      if (oldval) console.log("oldval", oldval);
    }
  }
};
</script>

<style></style>
