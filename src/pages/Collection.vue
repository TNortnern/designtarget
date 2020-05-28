<template>
  <Layout>
    <vue-headful
      :title="`Collection - ${capitalize(current.name)}`"
      :description="`Design Target's collection of ${capitalize(current.name)}`"
    />
    <v-container>
      <h1 class="mb-3">{{ capitalize(current.name) }}</h1>
      <CollectionGrid :collection="resources" />
    </v-container>
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import { CATEGORY_QUERY } from "@/graphql/queries/resources";

export default {
  data: () => ({}),
  async mounted() {
    await this.$apollo
      .query({
        query: CATEGORY_QUERY,
        variables: {
          id: this.current.id
        }
      })
      .then(({ data }) => {
        this.$store.commit("setAllResources", data.category.resources);
      })
      .catch(err => {
        console.log(err);
      });
  },
  apollo: {
    category: {
      query: CATEGORY_QUERY,
      skip: true
    }
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
