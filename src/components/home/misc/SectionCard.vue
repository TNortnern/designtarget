<template>
  <v-col cols="11" sm="6" md="3" lg="2">
    <img
      :src="require(`@/assets/${item.image}.png`)"
      alt="mixkit"
      class="d-block"
    />
    <v-container>
      <v-row justify="space-between" align="center">
        <h3>{{ item.name }}</h3>
        <div class="align-self-end">
          <v-btn @mouseover="toggleHovered()" @mouseout="toggleHovered()" icon>
            <v-icon :color="heartHovered ? 'red' : 'black'">
              <template v-if="heartHovered">favorite</template>
              <template v-else>favorite_border</template>
            </v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
    <p>
      {{ item.description }}
    </p>
  </v-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      heartHovered: false
    };
  },
  methods: {
    toggleHovered() {
      this.heartHovered = !this.heartHovered;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles";
img {
  width: 100%;
  @include xl() {
    width: 277px;
  }
}
</style>
