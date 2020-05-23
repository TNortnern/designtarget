<template>
  <div>
    <Section name="Icons" href="#icons" :items="items" />
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
        name: "Iconscout",
        description: "Browse 2 million+ high quality icons and illustrations.",
        image: "iconscout"
      },
      {
        name: "Material Icons",
        description:
          "Material icons are delightful, beautifully crafted symbols.",
        image: "materialicons"
      },
      {
        name: "Iconfinder",
        description: "Iconfinder is the leading marketplace for vector icons.",
        image: "iconfinder"
      },
      {
        name: "The Noun Project",
        description:
          "Over 2 million icons, royalty free. Customize any icon you want.",
        image: "noun"
      }
    ]
  })
};
</script>

<style></style>
