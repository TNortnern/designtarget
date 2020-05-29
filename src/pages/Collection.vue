<template>
  <Layout v-if="current">
    <vue-headful
      v-if="!mine"
      :title="`Collection - ${capitalize(current.name)}`"
      :description="`Design Target's collection of ${capitalize(current.name)}`"
    />
    <vue-headful
      v-else
      :title="`My Collection`"
      :description="`Manage your resource collection at Design Target`"
    />
    <v-container v-if="resources">
      <h1 class="mb-3">{{ capitalize(current.name) }}</h1>
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
    if (this.$route.collection === "mine") {
      if (!this.mine && !this.$store.state.auth.loading) {
        this.$router.push("/");
      } else {
        this.$store.dispatch("getUserResources", this.mine.id);
      }
      return;
    }
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
    },
    mine() {
      return this.$store.state.auth.user;
    }
  }
};
</script>

<style></style>
