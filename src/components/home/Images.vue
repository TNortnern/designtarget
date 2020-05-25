<template>
  <div>
    <Section name="Images" href="collection/images" :items="items" />
  </div>
</template>

<script>
import Section from "./misc/Section";
export default {
  components: {
    Section
  },
  data: () => ({
    items: [
      {
        name: "Unsplash",
        description:
          "The internet’s source of freely-usable images. Powered by creators.",
        image: "unsplash"
      },
      {
        name: "Pexels",
        description:
          "Free stock photos you can use everywhere. ✓ Free for commercial use.",
        image: "pexels"
      },
      {
        name: "FOCA Stock",
        description: "Free beautiful photos, videos, and templates.",
        image: "focastock"
      },
      {
        name: "Stocksnap",
        description:
          "High quality and high resolution stock images free from all copyright.",
        image: "stocksnap"
      }
    ]
  })
};
</script>

<style></style>
