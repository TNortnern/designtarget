<template>
  <Layout>
    <vue-headful
      title="Home"
      description="View all of design target's resources"
    />
    <Hero />
    <Section
      v-for="(category, index) in topFour"
      :key="category.id"
      :name="category.name"
      :href="`collection/${category.name}`"
      :items="category.topFour"
      :category="category"
      :class="index === 0 ? 'home__first-category' : ''"
    />
    <Illustrations />
    <Images />
    <Icons />
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/misc/Section";
import Illustrations from "@/components/home/Illustrations";
import Images from "@/components/home/Images";
import Icons from "@/components/home/Icons";
export default {
  components: {
    Layout,
    Hero,
    Section,
    Illustrations,
    Images,
    Icons
  },
  computed: {
    topFour() {
      return this.$store.state.categories.topFour;
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
