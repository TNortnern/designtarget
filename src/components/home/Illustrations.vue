<template>
  <div style="margin-top: 120px;">
    <Section name="Illustrations" href="#illustrations" :items="items" />
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
        name: "Mixkit",
        description:
          "Download high quality, royalty free video footage and art.",
        image: "mixkit"
      },
      {
        name: "unDraw",
        description:
          "Open source illustrations for every project you can imagine and create.",
        image: "unDraw"
      },
      {
        name: "Humaaans",
        description: "Mix & Match high quality illustrations of people.",
        image: "humaaans"
      },
      {
        name: "Lukaszadam",
        description:
          "Free high quality illustrations for everyone. Projects and commercial.",
        image: "lukaszadam"
      }
    ]
  })
};
</script>

<style></style>
