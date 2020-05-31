<template>
  <Layout>
    <vue-headful
      title="Home"
      description="View all of design target's resources"
    />
    <Hero />
    <template v-if="topFour || searchItems.length">
      <template v-if="searching">
        <v-container>
          <h1>Search results for {{ currentTerm }}:</h1>
          <template v-if="searchItems.length">
            <CollectionGrid :collection="searchItems" />
          </template>
          <template>
            <h3>No resources found</h3>
          </template>
        </v-container>
      </template>
      <template v-else>
        <Section
          v-for="(category, index) in topFour"
          :key="category.id"
          :name="category.name"
          :href="`collection/${category.name}`"
          :items="category.topFour"
          :category="category"
          :class="index === 0 ? 'home__first-category' : ''"
        />
      </template>
    </template>
    <template v-else>
      <v-skeleton-loader max-width="300" type="card"></v-skeleton-loader>
    </template>
    <!-- <Illustrations />
    <Images />
    <Icons /> -->
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/misc/Section";
// import Illustrations from "@/components/home/Illustrations";
// import Images from "@/components/home/Images";
// import Icons from "@/components/home/Icons";
import { TOP_FOUR_QUERY } from "@/graphql/queries/resources";

export default {
  components: {
    Layout,
    Hero,
    Section
    // Illustrations,
    // Images,
    // Icons
  },
  mounted() {
    if (!this.$store.state.categories.topFour.length) this.setTopFour();
  },
  apollo: {
    categories: {
      query: TOP_FOUR_QUERY,
      skip: true
    }
  },
  methods: {
    async setTopFour() {
      await this.$apollo
        .query({
          query: TOP_FOUR_QUERY
        })
        .then(({ data }) => {
          this.$store.commit("setTopFour", data.categories);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    topFour() {
      return this.$store.state.categories.topFour;
    },
    searchItems() {
      return this.$store.state.utility.items;
    },
    searching() {
      return this.$store.state.utility.searching;
    },
    term() {
      return this.$store.state.utility.term;
    },
    currentTerm() {
      return this.$store.state.utility.currentTerm;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
$marginTop: 30px;
.home__first-category {
  margin-top: 120px;
  @include sm() {
    margin-top: $marginTop;
  }
  @include xs() {
    margin-top: $marginTop;
  }
}
</style>
