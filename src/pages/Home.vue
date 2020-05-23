<template>
  <Layout>
    <Hero />
    <Illustrations />
    <Images />
    <Icons />
  </Layout>
</template>

<script>
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Illustrations from "@/components/home/Illustrations";
import Images from "@/components/home/Images";
import Icons from "@/components/home/Icons";
export default {
  components: {
    Layout,
    Hero,
    Illustrations,
    Images,
    Icons
  }
};
</script>

<style></style>
