<template>
  <v-col cols="11" sm="6" md="3" :lg="lg" xl="2">
    <img
      :src="item.image.url"
      :alt="item.image.alt || item.name"
      class="d-block"
    />
    <v-container>
      <v-row justify="space-between" align="center">
        <h3>{{ item.name }}</h3>
        <div class="align-self-end">
          <v-btn
            @click="favorite()"
            @mouseover="toggleHovered()"
            @mouseout="toggleHovered()"
            icon
          >
            <v-icon :color="heartHovered || inFavorites ? 'red' : 'black'">
              <template v-if="heartHovered || inFavorites">favorite</template>
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
    },
    lg: {
      type: [Number, String],
      default: 2
    }
  },
  data() {
    return {
      heartHovered: false,
      favorited: []
    };
  },
  methods: {
    toggleHovered() {
      if (!this.inFavorites) {
        this.heartHovered = !this.heartHovered;
      }
    },
    favorite() {
      if (!this.inFavorites) {
        this.favorited = [...this.favorited, this.item];
      } else {
        this.favorited = this.favorited.filter(item => item !== this.item);
      }
    }
  },
  computed: {
    inFavorites() {
      return this.favorited.includes(this.item);
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
h3 {
  font-size: 17px;
}
.row {
  flex-wrap: nowrap;
}
</style>
